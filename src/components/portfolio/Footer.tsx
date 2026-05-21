import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center font-mono font-bold text-primary-foreground text-sm">
            A
          </div>
          <div className="text-sm">
            <div className="font-semibold">Abishek M H</div>
            <div className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} · Built with React + Tailwind
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconLink href="https://github.com/abhiraru" label="GitHub"><Github className="size-4" /></IconLink>
          <IconLink href="https://linkedin.com/in/abishek-m-h-283201200" label="LinkedIn"><Linkedin className="size-4" /></IconLink>
          <IconLink href="mailto:abishekabiharidad@gmail.com" label="Email"><Mail className="size-4" /></IconLink>
        </div>
      </div>
    </footer>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="size-10 grid place-items-center rounded-xl border border-border hover:border-primary hover:text-primary transition"
    >
      {children}
    </a>
  );
}
