import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
import { TerminalCard } from "./TerminalCard";
import { FloatingBadges } from "./FloatingBadges";

export function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[400px] sm:size-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
            Available for new opportunities
            <Sparkles className="size-3 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Laravel <span className="text-gradient-cyan">Full Stack</span>
            <br /> Developer building
            <br /> <span className="text-gradient">scalable SaaS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">Abishek M H</span> — 3+ years
            engineering multi-tenant SaaS platforms, REST APIs, and integrations with
            Laravel, PHP, and React.js. Payment gateways, HubSpot, Twilio, OpenAI — shipped.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-3"
          >
            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground glow-sm hover:glow transition-all"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-surface-elevated transition"
            >
              <Mail className="size-4" /> Contact Me
            </a>
            <a
              href="https://github.com/abhiraru"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:border-primary/50 hover:text-primary transition"
            >
              <Github className="size-4" /> GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex items-center gap-6 text-xs font-mono text-muted-foreground"
          >
            <Stat n="3+" l="Years" />
            <div className="h-6 w-px bg-border" />
            <Stat n="20+" l="Projects" />
            <div className="h-6 w-px bg-border" />
            <Stat n="10+" l="Integrations" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <FloatingBadges />
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-foreground text-lg font-display font-bold">{n}</div>
      <div className="uppercase tracking-wider">{l}</div>
    </div>
  );
}
