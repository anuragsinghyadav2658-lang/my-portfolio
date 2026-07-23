"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend & Core",
    skills: ["Java", "Spring Boot", "MySQL", "JDBC", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: ["Docker", "Git & GitHub", "Vercel", "Render", "TiDB Cloud"],
  },
  {
    title: "Integrations",
    skills: ["Google APIs", "Resend"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-7xl px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:py-32"
    >
      <div className="mb-8 md:mb-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Skills
        </h2>
        <div className="h-[1px] w-full bg-border" />
      </div>

      <div className="flex flex-col gap-10 md:gap-14">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="flex flex-col gap-5">
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center justify-center rounded-full border border-border/50 bg-secondary/20 px-5 py-3 text-sm font-medium text-secondary-foreground backdrop-blur-sm transition-colors hover:bg-secondary/40 md:text-base cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
