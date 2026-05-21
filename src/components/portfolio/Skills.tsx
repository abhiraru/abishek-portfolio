import { Section } from "./Section";
import { motion } from "framer-motion";

const groups = [
  { title: "Languages", items: ["PHP", "Python", "JavaScript", "Java", "SQL"] },
  { title: "Frontend", items: ["React.js", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend & Frameworks", items: ["Laravel", "CodeIgniter", "OpenCart", "Flask"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { title: "Tools & Tech", items: ["Git", "Bitbucket", "Jira", "Docker", "REST APIs", "Laravel Sanctum", "OpenAI API", "Payment Gateways", "HubSpot API", "Twilio API"] },
  { title: "Practices", items: ["Agile", "Multi-tenant Architecture", "API Integration", "Auth & Authorization", "Performance Optimization"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A complete <span className="text-gradient-cyan">full-stack</span> toolkit.</>}
      description="Languages, frameworks and integrations I use to ship production software."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
            className="glass rounded-2xl p-4 sm:p-6 hover:border-primary/40 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold">{g.title}</h3>
              <span className="text-xs font-mono text-muted-foreground">{String(gi + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="text-xs font-mono rounded-md border border-border bg-surface px-2.5 py-1 text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
