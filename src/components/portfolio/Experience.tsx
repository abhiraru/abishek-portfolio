import { Section } from "./Section";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    company: "Loremine Technologies",
    role: "Software Engineer",
    period: "2025 — Present",
    points: [
      "Building an enterprise commercial property management platform for multi-tenant real estate operations.",
      "Developed backend modules and RESTful APIs in Laravel and CodeIgniter.",
      "Integrated payment gateways, HubSpot CRM and Twilio messaging.",
      "Collaborated with UK-based teams in Agile using Jira and Bitbucket.",
      "Built React.js dashboard interfaces and optimized backend performance.",
    ],
  },
  {
    company: "Infinite Open Source Solutions",
    role: "Software Engineer",
    period: "2023 — 2025",
    points: [
      "Developed MLM and e-commerce platforms with Laravel and MySQL.",
      "Built scalable backend systems and REST APIs.",
      "Integrated payment gateways and 3rd-party APIs.",
      "Customized OpenCart business solutions.",
      "Database optimization and backend workflow design.",
    ],
  },
  {
    company: "Auriss Technologies",
    role: "Software Engineer",
    period: "2022",
    points: [
      "Built a sales prediction system using Python and machine learning.",
      "Designed data processing workflows and regression-based forecasting.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>From <span className="text-gradient-cyan">commit</span> to <span className="text-gradient-cyan">production</span>.</>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
        <div className="space-y-8">
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-14 md:pl-20"
            >
              <div className="absolute left-0 md:left-2 top-1 size-8 rounded-xl glass-strong grid place-items-center glow-sm">
                <Briefcase className="size-4 text-primary" />
              </div>
              <div className="glass rounded-2xl p-6 hover:border-primary/40 transition">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg font-semibold">
                    {j.role} <span className="text-primary">· {j.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">{j.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {j.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
