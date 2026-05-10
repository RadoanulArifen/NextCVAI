import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  Cpu,
  Download,
  Github,
  Linkedin,
  ScanLine,
  Sparkles,
  Star,
  Twitter,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/site/Navbar";
import { ResumeForm } from "@/components/site/ResumeForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <BuilderSection />
      <Templates />
      <ATSSection />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute -top-32 -left-24 -z-10 h-[480px] w-[480px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-20 right-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              New · GPT-powered resume engine
            </div>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              The AI Resume Builder for{" "}
              <span className="gradient-text">ATS-ready</span> hires.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              NextCV AI writes, formats and optimizes your resume in seconds — engineered for modern hiring systems and beautifully designed for humans.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" className="gradient-bg text-primary-foreground shadow-glow hover:opacity-95" asChild>
                <a href="#builder">
                  Build Resume Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#templates">Browse templates</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No credit card</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Export to PDF</div>
              <div className="hidden items-center gap-2 sm:flex"><CheckCircle2 className="h-4 w-4 text-primary" /> 80+ ATS Score</div>
            </div>
          </div>

          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-float">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary-glow/20 to-transparent blur-2xl" />
      <div className="rounded-2xl glass p-5 shadow-elegant">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-success/80" />
          </div>
          <span className="text-xs text-muted-foreground">resume.pdf</span>
          <BadgeCheck className="h-4 w-4 text-primary" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          <div className="col-span-1 space-y-2">
            <div className="h-14 w-14 rounded-full gradient-bg" />
            <div className="h-2 w-20 rounded bg-muted" />
            <div className="h-2 w-16 rounded bg-muted" />
            <div className="mt-4 space-y-1.5">
              <div className="h-2 w-full rounded bg-muted" />
              <div className="h-2 w-3/4 rounded bg-muted" />
              <div className="h-2 w-2/3 rounded bg-muted" />
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <div className="h-3 w-2/3 rounded bg-foreground/80" />
            <div className="h-2 w-1/3 rounded bg-muted" />
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-full rounded bg-muted" />
              <div className="h-2 w-[92%] rounded bg-muted" />
              <div className="h-2 w-[85%] rounded bg-muted" />
              <div className="h-2 w-[70%] rounded bg-muted" />
            </div>
            <div className="mt-4 h-2 w-1/2 rounded bg-foreground/80" />
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded bg-muted" />
              <div className="h-2 w-[88%] rounded bg-muted" />
              <div className="h-2 w-[75%] rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
      {/* Floating ATS badge */}
      <div className="absolute -right-4 -top-4 rounded-2xl glass p-3 shadow-glow md:-right-6 md:-top-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" className="text-muted" strokeWidth="3" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" className="text-primary" strokeWidth="3" strokeDasharray={`${(92 / 100) * 94.2} 100`} strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">92</span>
          </div>
          <div>
            <p className="text-xs font-medium">ATS Score</p>
            <p className="text-[10px] text-muted-foreground">Optimized</p>
          </div>
        </div>
      </div>
      {/* Floating AI suggestion */}
      <div className="absolute -left-4 bottom-6 hidden rounded-xl glass p-3 shadow-elegant md:flex md:-left-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg">
            <Wand2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-xs font-medium">AI suggestion</p>
            <p className="text-[10px] text-muted-foreground">Stronger action verbs added</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Trusted ---------------- */
function TrustedBy() {
  const logos = ["Stripe", "Vercel", "Notion", "Linear", "Figma", "GitHub", "OpenAI", "Anthropic"];
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by job seekers hired at
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-14 animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="text-2xl font-semibold tracking-tight text-muted-foreground/70">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
function Features() {
  const items = [
    { icon: ScanLine, title: "ATS Optimization", text: "Beat applicant tracking systems with engine-tuned formatting and keywords." },
    { icon: Bot, title: "AI Content Writing", text: "Turn rough notes into crisp, results-driven bullet points." },
    { icon: Cpu, title: "AI Skill Suggestions", text: "Personalized skills from your role, stack and target jobs." },
    { icon: Download, title: "Instant PDF Export", text: "Export pixel-perfect resumes ready to send anywhere." },
    { icon: BarChart3, title: "Smart Resume Analysis", text: "Real-time score and improvement insights as you type." },
    { icon: Wand2, title: "AI Resume Formatting", text: "One-click reformatting into modern, recruiter-loved layouts." },
  ];
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Features"
          title={<>Everything you need to <span className="gradient-text">land the role</span></>}
          subtitle="Built with state-of-the-art AI and obsessed over by recruiters and engineers."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:gradient-bg group-hover:text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground backdrop-blur">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------------- Builder Section ---------------- */
function BuilderSection() {
  return (
    <section id="builder" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-1/2 h-[500px] -translate-y-1/2 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10" />
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Resume Builder"
          title={<>Generate your resume in <span className="gradient-text">under a minute</span></>}
          subtitle="Tell us about you. Our AI handles writing, formatting, and ATS optimization."
        />
        <div className="mt-12">
          <ResumeForm />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Templates ---------------- */
function Templates() {
  const templates = [
    { name: "Atlas", role: "Software Engineer", accent: "from-violet-500 to-fuchsia-500" },
    { name: "Quanta", role: "AI Engineer", accent: "from-sky-500 to-cyan-400" },
    { name: "Onyx", role: "Corporate", accent: "from-slate-700 to-slate-500" },
    { name: "Lumen", role: "Product Manager", accent: "from-amber-500 to-rose-500" },
    { name: "Vertex", role: "Designer", accent: "from-emerald-500 to-teal-400" },
    { name: "Halo", role: "Student", accent: "from-indigo-500 to-blue-400" },
  ];
  return (
    <section id="templates" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Templates"
          title={<>Beautiful templates, <span className="gradient-text">recruiter-approved</span></>}
          subtitle="Pick a starting point and let AI handle the rest. Every template is ATS-tested."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className={`relative h-56 bg-gradient-to-br ${t.accent}`}>
                <div className="absolute inset-4 rounded-xl bg-background/95 p-4 shadow-elegant transition-transform duration-500 group-hover:scale-[0.97]">
                  <div className="h-2 w-1/2 rounded bg-foreground/80" />
                  <div className="mt-2 h-1.5 w-1/3 rounded bg-muted" />
                  <div className="mt-4 space-y-1.5">
                    <div className="h-1.5 w-full rounded bg-muted" />
                    <div className="h-1.5 w-5/6 rounded bg-muted" />
                    <div className="h-1.5 w-4/6 rounded bg-muted" />
                  </div>
                  <div className="mt-4 h-1.5 w-1/3 rounded bg-foreground/80" />
                  <div className="mt-2 space-y-1.5">
                    <div className="h-1.5 w-full rounded bg-muted" />
                    <div className="h-1.5 w-3/4 rounded bg-muted" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <Button size="sm" variant="ghost" className="opacity-0 transition-opacity group-hover:opacity-100">
                  Use template <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ATS ---------------- */
function ATSSection() {
  const checks = [
    { label: "Keyword match", value: "94%" },
    { label: "Formatting", value: "Pass" },
    { label: "Action verbs", value: "Strong" },
    { label: "Length", value: "Optimal" },
  ];
  return (
    <section id="ats" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
              ATS Score
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Score <span className="gradient-text">80+</span> on every applicant tracking system.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We benchmark your resume against the same parsers used by Workday, Greenhouse, Lever, Taleo and more — and rewrite it until it scores above 80.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Real-time scoring as you edit",
                "Keyword targeting per job description",
                "Format-safe export across all ATS",
                "Suggestions explained, not guessed",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20 blur-2xl" />
            <div className="rounded-3xl glass p-8 shadow-elegant">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ScanLine className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">Resume scan</p>
                </div>
                <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">Passed</span>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="relative h-32 w-32">
                  <svg viewBox="0 0 36 36" className="h-32 w-32 -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" className="text-muted" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" className="text-primary" strokeWidth="3" strokeDasharray={`${(92 / 100) * 94.2} 100`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">92</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">ATS</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  {checks.map((c) => (
                    <div key={c.label} className="flex items-center justify-between rounded-lg border border-border/70 bg-background/40 px-3 py-2 text-sm">
                      <span className="text-muted-foreground">{c.label}</span>
                      <span className="font-medium">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-border/70 bg-background/40 p-4 text-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-medium">AI tip</span>
                </div>
                <p className="mt-1 text-muted-foreground">Add measurable impact to bullet point #3 to push your score above 95.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      tagline: "For getting started",
      features: ["1 AI resume", "3 templates", "PDF export", "Basic ATS score"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$12",
      tagline: "For active job seekers",
      features: [
        "Unlimited AI resumes",
        "All premium templates",
        "Unlimited PDF downloads",
        "Full ATS analysis",
        "AI resume improvements",
      ],
      cta: "Go Pro",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$29",
      tagline: "For career professionals",
      features: [
        "Everything in Pro",
        "AI cover letters",
        "LinkedIn rewrite",
        "Priority support",
        "1:1 resume review",
      ],
      cta: "Get Premium",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Simple plans, <span className="gradient-text">serious results</span></>}
          subtitle="Start free. Upgrade when you're ready to apply at scale."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 transition-all ${
                p.highlight
                  ? "border-primary/40 bg-card shadow-glow scale-[1.02]"
                  : "border-border bg-card hover:-translate-y-1 hover:shadow-elegant"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-3 py-1 text-xs font-medium text-primary-foreground shadow-glow">
                  Most popular
                </span>
              )}
              <p className="text-sm font-medium text-muted-foreground">{p.name}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full ${p.highlight ? "gradient-bg text-primary-foreground shadow-glow hover:opacity-95" : ""}`}
                variant={p.highlight ? "default" : "outline"}
                asChild
              >
                <a href="#builder">{p.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    {
      name: "Maya Chen",
      role: "Senior SWE @ Stripe",
      quote:
        "I rewrote my resume in 4 minutes and got 3 callbacks the same week. The ATS score made a real difference.",
    },
    {
      name: "Daniel Park",
      role: "AI Engineer @ Anthropic",
      quote:
        "Best resume tool I've ever used. The AI rewrites are surprisingly tasteful and recruiter-friendly.",
    },
    {
      name: "Lina Ortiz",
      role: "PM, ex-Google",
      quote:
        "Beautiful, fast, and I can finally trust the formatting won't break in ATS parsers.",
    },
    {
      name: "Akira Tanaka",
      role: "Remote Frontend Dev",
      quote:
        "Hands down the most premium resume product I've tried. Templates feel like they're from a design studio.",
    },
  ];
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by <span className="gradient-text">10,000+ job seekers</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/90">"{r.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg text-sm font-semibold text-primary-foreground">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "Is NextCV AI really ATS-friendly?", a: "Yes. We benchmark against the same parsers used by Workday, Greenhouse and Lever, and we never use design elements that break parsing." },
    { q: "Can I export to PDF?", a: "Yes — instant, pixel-perfect PDF export is included on every plan, including Free." },
    { q: "Does the AI write my entire resume?", a: "It can. Provide your details and our AI writes results-driven bullets, summaries, and skill suggestions you can edit." },
    { q: "Is my data private?", a: "Absolutely. Your data is encrypted and never sold or shared. You can delete your data at any time." },
    { q: "Can I cancel anytime?", a: "Yes — Pro and Premium are month-to-month. Cancel from your dashboard with one click." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading eyebrow="FAQ" title={<>Frequently asked <span className="gradient-text">questions</span></>} />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg shadow-glow">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">NextCV<span className="gradient-text">AI</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The AI resume builder for modern job seekers. ATS-ready resumes in seconds.
            </p>
            <form
              className="mt-6 flex max-w-sm items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input type="email" required placeholder="Your email" className="h-11 rounded-xl" />
              <Button type="submit" className="h-11 gradient-bg text-primary-foreground shadow-glow hover:opacity-95">
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <p className="text-sm font-semibold">Product</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#templates" className="hover:text-foreground">Templates</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#ats" className="hover:text-foreground">ATS Score</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NextCV AI. All rights reserved.</p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-foreground"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground"><Github className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
