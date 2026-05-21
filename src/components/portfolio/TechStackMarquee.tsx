import { Section } from "./Section";

const stack = [
  "Laravel", "PHP 8", "React", "TypeScript", "MySQL", "PostgreSQL",
  "Tailwind", "Sanctum", "Docker", "REST", "OpenAI", "HubSpot",
  "Twilio", "Stripe", "Jira", "Bitbucket", "CodeIgniter", "Vite",
];

export function TechStackMarquee() {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title={<>The tools I <span className="text-gradient-cyan">reach for</span> daily.</>}
    >
      <div className="relative overflow-hidden glass rounded-2xl py-6">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-3 animate-scroll-x w-max">
          {[...stack, ...stack].map((s, i) => (
            <div
              key={i}
              className="shrink-0 rounded-xl border border-border bg-surface/60 px-5 py-3 font-mono text-sm hover:border-primary/50 hover:text-primary transition"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
