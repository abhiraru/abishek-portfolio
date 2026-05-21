import { motion } from "framer-motion";

const badges = [
  { label: "Laravel", c: "from-rose-500/30 to-red-500/20", pos: "-top-4 -left-6", d: 0 },
  { label: "React", c: "from-cyan-400/30 to-sky-500/20", pos: "top-8 -right-6", d: 0.5 },
  { label: "MySQL", c: "from-blue-500/30 to-indigo-500/20", pos: "bottom-8 -left-10", d: 1 },
  { label: "OpenAI", c: "from-emerald-400/30 to-teal-500/20", pos: "-bottom-4 right-4", d: 1.5 },
];

export function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {badges.map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + b.d * 0.1, duration: 0.5 }}
          className={`absolute ${b.pos} animate-float`}
          style={{ animationDelay: `${b.d}s` }}
        >
          <div className={`glass rounded-xl px-3 py-2 text-xs font-mono font-medium bg-gradient-to-br ${b.c}`}>
            {b.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
