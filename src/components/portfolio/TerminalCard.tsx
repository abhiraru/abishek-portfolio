import { motion } from "framer-motion";

const lines = [
  { c: "text-muted-foreground", t: "// developer.profile.ts" },
  { c: "text-primary", t: "const", x: " abishek = {" },
  { c: "", t: "  role: ", v: "'Laravel Full Stack Developer'," },
  { c: "", t: "  stack: ", v: "['Laravel', 'PHP', 'React', 'MySQL']," },
  { c: "", t: "  focus: ", v: "'Multi-tenant SaaS & REST APIs'," },
  { c: "", t: "  experience: ", v: "'3+ years'," },
  { c: "", t: "  shipping: ", v: "true," },
  { c: "text-primary", t: "};" },
];

export function TerminalCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-xl opacity-70" />
      <div className="relative glass-strong rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-surface/40">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-red-500/80" />
            <span className="size-3 rounded-full bg-yellow-500/80" />
            <span className="size-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-xs font-mono text-muted-foreground">~/portfolio — zsh</span>
        </div>
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="whitespace-pre"
            >
              <span className={l.c}>{l.t}</span>
              {l.x && <span>{l.x}</span>}
              {l.v && <span className="text-accent">{l.v}</span>}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-3 text-muted-foreground"
          >
            <span className="text-primary">$</span> npm run build
            <span className="ml-2 inline-block w-2 h-4 bg-primary align-middle animate-glow-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
