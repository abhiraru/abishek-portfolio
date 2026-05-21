import { Section } from "./Section";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    company: "Loremine Technologies",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    points: [
      "Contributing to an enterprise-grade commercial property management platform for multi-tenant real estate operations.",
      "Implemented dynamic tenant-based database switching and multi-tenant SaaS architecture.",
      "Developed backend modules and RESTful APIs using Laravel and CodeIgniter.",
      "Integrated payment gateways, HubSpot CRM, and Twilio messaging services.",
      "Collaborated with UK-based international teams using Agile, Jira, and Bitbucket.",
    ],
  },
  {
    company: "Infinite Open Source Solutions",
    role: "Software Engineer",
    period: "Jun 2023 — Jan 2025",
    points: [
      "Developed and maintained MLM and e-commerce platforms using Laravel and MySQL.",
      "Built scalable backend systems, RESTful APIs, and business logic for enterprise workflows.",
      "Integrated payment gateways and third-party APIs for transaction and communication flows.",
      "Customized and extended OpenCart-based solutions for client requirements.",
      "Optimized databases and backend performance across high-traffic applications.",
    ],
  },
  {
    company: "Auriss Technologies",
    role: "Software Engineer",
    period: "Jul 2022 — Dec 2022",
    points: [
      "Developed a sales prediction system using Python, Flask, and machine learning techniques.",
      "Designed data processing workflows and regression models for forecasting accuracy.",
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
        <div className="absolute left-2 sm:left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
        <div className="space-y-6 sm:space-y-8">
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-10 sm:pl-14 md:pl-20"
            >
              <div className="absolute left-0 sm:left-0 md:left-2 top-1 size-7 sm:size-8 rounded-xl glass-strong grid place-items-center glow-sm">
                <Briefcase className="size-3 sm:size-4 text-primary" />
              </div>
              <div className="glass rounded-2xl p-4 sm:p-6 hover:border-primary/40 transition">
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-baseline justify-between gap-1 sm:gap-2 mb-1">
                  <h3 className="font-display text-base sm:text-lg font-semibold">
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
