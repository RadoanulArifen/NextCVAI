import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#templates", label: "Templates" },
  { href: "#ats", label: "ATS Score" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-3 shadow-elegant md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">NextCV<span className="gradient-text">AI</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm" className="gradient-bg text-primary-foreground shadow-glow hover:opacity-95" asChild>
            <a href="#builder">Get Started</a>
          </Button>
        </div>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl glass p-4 shadow-elegant md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-foreground/80">
                {l.label}
              </a>
            ))}
            <Button className="gradient-bg text-primary-foreground" asChild>
              <a href="#builder" onClick={() => setOpen(false)}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}