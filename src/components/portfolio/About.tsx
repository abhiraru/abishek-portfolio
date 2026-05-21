import { Section } from "./Section";
import { motion } from "framer-motion";
import { Code2, Database, Layers, Rocket, Plug, Globe } from "lucide-react";

const competencies = [
  { icon: Code2, label: "Laravel Development" },
  { icon: Plug, label: "REST APIs" },
  { icon: Layers, label: "Multi-tenant SaaS" },
  { icon: Globe, label: "3rd-party Integrations" },
  { icon: Rocket, label: "Full Stack Delivery" },
  { icon: Database, label: "React.js Frontends" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineering <span className="text-gradient-cyan">production-grade</span> backends.</>}
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
        <div className="glass rounded-2xl p-8 relative noise overflow-hidden">
          <p className="text-foreground/90 leading-relaxed">
            Laravel Full Stack Developer with 3+ years of experience building scalable
            enterprise applications, multi-tenant SaaS platforms, REST APIs, and
            e-commerce solutions. I currently develop and maintain a large-scale
            commercial property management system using{" "}
            <span className="text-primary">Laravel, CodeIgniter, React.js and MySQL</span>.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I'm skilled in backend architecture, third-party API integrations, database
            optimization and collaborating with international teams using Agile workflows
            and modern development tools.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Agile", "Multi-tenant", "Performance", "API-first", "Clean code"].map((t) => (
              <span
                key={t}
                className="text-xs font-mono rounded-full border border-border bg-surface px-3 py-1 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {competencies.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 hover:border-primary/40 transition group"
            >
              <c.icon className="size-5 text-primary mb-2 group-hover:scale-110 transition" />
              <div className="text-sm font-medium">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
