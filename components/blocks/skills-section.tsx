"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Framer Motion", "GSAP", "MongoDB",
  "PostgreSQL", "Prisma", "Figma", "Web3"
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-7xl px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:py-32">
      <div className="mb-8 md:mb-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Skills & Expertise
        </h2>
        <div className="h-[1px] w-full bg-border" />
      </div>
      
      <div className="flex flex-wrap gap-3 md:gap-4">
        {skills.map((skill, index) => (
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
    </section>
  );
}
