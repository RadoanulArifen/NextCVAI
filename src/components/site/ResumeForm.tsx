import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WEBHOOK = "https://arifen.app.n8n.cloud/webhook-test/b3f349cc-ea6e-488c-b4c2-6e7ad4f6d276";

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  jobTitle: z.string().trim().min(2, "Enter a job title").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(5, "Enter a phone number").max(40),
  address: z.string().trim().min(2, "Enter an address").max(200),
  experience: z.string().trim().min(5, "Tell us about your experience").max(2000),
  education: z.string().trim().min(2, "Add education details").max(1000),
  skills: z.string().trim().min(2, "List a few skills").max(500),
  projects: z.string().trim().min(2, "Add at least one project").max(2000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  address: "",
  experience: "",
  education: "",
  skills: "",
  projects: "",
};

export function ResumeForm() {
  const [data, setData] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please complete the form");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, source: "NextCV AI Landing", submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      toast.success("Resume request sent! Our AI is working on it.");
      setData(initial);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fields: Array<{ k: keyof FormState; label: string; placeholder: string; type?: string; full?: boolean }> = [
    { k: "fullName", label: "Full Name", placeholder: "Ada Lovelace" },
    { k: "jobTitle", label: "Job Title", placeholder: "Senior AI Engineer" },
    { k: "email", label: "Email", placeholder: "you@domain.com", type: "email" },
    { k: "phone", label: "Phone Number", placeholder: "+1 555 010 0123" },
    { k: "address", label: "Address", placeholder: "San Francisco, CA", full: true },
  ];

  return (
    <form onSubmit={submit} className="rounded-3xl glass p-6 shadow-elegant md:p-10">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg shadow-glow">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Build your resume with AI</h3>
          <p className="text-sm text-muted-foreground">Fill in your details. We'll craft an ATS-ready resume in seconds.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.k} className={f.full ? "md:col-span-2" : ""}>
            <Label htmlFor={f.k} className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {f.label}
            </Label>
            <Input
              id={f.k}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              value={data[f.k]}
              onChange={update(f.k)}
              className="h-12 rounded-xl border-border/70 bg-background/60 backdrop-blur"
            />
          </div>
        ))}
        {([
          { k: "experience", label: "Experience", placeholder: "List your roles, companies, and achievements." },
          { k: "education", label: "Education", placeholder: "Degree, institution, year." },
          { k: "skills", label: "Skills", placeholder: "React, TypeScript, LLMs, RAG, AWS…" },
          { k: "projects", label: "Projects", placeholder: "Projects with links and impact." },
        ] as const).map((f) => (
          <div key={f.k} className="md:col-span-2">
            <Label htmlFor={f.k} className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {f.label}
            </Label>
            <Textarea
              id={f.k}
              rows={4}
              placeholder={f.placeholder}
              value={data[f.k]}
              onChange={update(f.k)}
              className="rounded-xl border-border/70 bg-background/60 backdrop-blur"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          By submitting you agree to our Terms. Your data is private and never shared.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="gradient-bg text-primary-foreground shadow-glow hover:opacity-95"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating…
            </>
          ) : (
            <>Generate AI Resume</>
          )}
        </Button>
      </div>
    </form>
  );
}