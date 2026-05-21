import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
            <span className="size-1 rounded-full bg-primary" />
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
