import { Section } from "./Section";
import { motion } from "framer-motion";
import { GitBranch, Github, Star, GitCommit } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Commits this year", value: "600+" },
  { icon: GitBranch, label: "Repositories", value: "20+" },
  { icon: Star, label: "Languages", value: "5" },
  { icon: Github, label: "Open source", value: "Always" },
];

export function GithubStats() {
  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title={<>Building in the <span className="text-gradient-cyan">open</span>.</>}
      description="A snapshot of what I'm shipping on GitHub."
    >
      <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-surface/40 p-5 hover:border-primary/40 transition"
            >
              <s.icon className="size-5 text-primary mb-3" />
              <div className="font-display text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">git</span> remote -v
            <span className="ml-2">→ github.com/abhiraru</span>
          </p>
          <a
            href="https://github.com/abhiraru"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition"
          >
            <Github className="size-4" /> Visit profile
          </a>
        </div>
      </div>
    </Section>
  );
}
