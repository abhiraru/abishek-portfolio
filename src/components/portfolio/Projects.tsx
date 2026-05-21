import { Section } from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  tag: string;
  description: string;
  features?: string[];
  stack: string[];
  github: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Commercial Property Management Platform",
    tag: "Enterprise · SaaS",
    description:
      "Enterprise-grade commercial real estate operations platform built for multi-tenant SaaS workflows and portfolio management.",
    features: [
      "Dynamic tenant-based database switching",
      "REST API-driven backend modules",
      "Payment gateway and HubSpot CRM integrations",
      "Twilio messaging workflows",
      "React.js operational dashboards",
    ],
    stack: ["Laravel", "CodeIgniter", "React.js", "PHP", "MySQL"],
    github: "https://github.com/abhiraru",
    accent: "from-violet-400/30 to-fuchsia-500/10",
  },
  {
    title: "HireSphere Backend",
    tag: "API · AI",
    description:
      "Modular Laravel backend API for an AI-powered recruitment platform with job workflows, candidate profiles, and OpenAI skill matching.",
    features: [
      "Laravel Sanctum authentication",
      "AI-powered skill matching",
      "Resume upload and application management",
      "Paginated & filterable job APIs",
    ],
    stack: ["Laravel 13", "PHP 8", "MySQL", "Sanctum", "OpenAI"],
    github: "https://github.com/abhiraru/HireSphere_Backend",
    accent: "from-primary/30 to-accent/10",
  },
  {
    title: "HireSphere Frontend",
    tag: "Web App",
    description:
      "React frontend for an AI recruitment experience with dashboards, search, filtering and resume management.",
    features: [
      "Candidate and recruiter dashboards",
      "Job search, filtering, pagination",
      "Resume upload and profile management",
      "Reusable responsive UI components",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Query"],
    github: "https://github.com/abhiraru/HireSphere_Frontend",
    accent: "from-cyan-400/30 to-sky-500/10",
  },
  {
    title: "Ninja Bird",
    tag: "Game",
    description:
      "Responsive arcade-style browser game with progressive difficulty and interactive gameplay.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/abhiraru/Ninjabird",
    accent: "from-emerald-400/30 to-teal-500/10",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient-cyan">work</span> & side bets.</>}
      description="A mix of production engineering and personal builds — open source on GitHub."
    >
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p, delay }: { p: Project; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl glass hover:border-primary/50 transition-all"
    >
      <div className={`absolute -top-20 -right-20 size-60 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition`} />
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
            {p.tag}
          </span>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="size-9 grid place-items-center rounded-lg border border-border hover:border-primary hover:text-primary transition"
            aria-label={`${p.title} on GitHub`}
          >
            <Github className="size-4" />
          </a>
        </div>
        <h3 className="font-display text-xl font-semibold flex items-center gap-1.5">
          {p.title}
          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono rounded border border-border bg-surface/60 px-2 py-0.5 text-foreground/80"
            >
              {s}
            </span>
          ))}
        </div>

        {p.features && (
          <>
            <button
              onClick={() => setOpen((v) => !v)}
              className="mt-5 flex items-center gap-1 text-xs font-mono text-primary hover:text-accent transition"
            >
              {open ? "Hide" : "View"} features
              <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mt-3 space-y-1.5 text-sm text-muted-foreground"
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary">›</span>
                      {f}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.article>
  );
}
