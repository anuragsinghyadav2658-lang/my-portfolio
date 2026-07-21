"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Stripe (Example)",
    timeframe: "2023 — Present",
    description: "Led the frontend architecture for the merchant dashboard. Improved Core Web Vitals by 40% and mentored a team of 5 engineers.",
  },
  {
    id: 2,
    role: "UI/UX Designer & Engineer",
    company: "Vercel (Example)",
    timeframe: "2021 — 2023",
    description: "Designed and implemented the core design system used across all enterprise products. Bridged the gap between design and engineering.",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Agency",
    timeframe: "2018 — 2021",
    description: "Developed award-winning Awwwards websites for high-profile clients using WebGL, GSAP, and Next.js.",
  },
];

export function ExperienceSection() {
  return (
    <section id="about" className="w-full max-w-7xl px-6 py-24 md:px-12 lg:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        
        {/* Left Column: Sticky About Text */}
        <div className="lg:col-span-5 lg:pr-8">
          <div className="sticky top-32 flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">About & Experience</h2>
            <p className="text-lg font-medium text-muted-foreground leading-relaxed">
              I am a hybrid designer and developer with over a decade of experience. 
              I specialize in creating pixel-perfect, accessible, and high-performance 
              web applications that blur the line between software and art.
            </p>
          </div>
        </div>

        {/* Right Column: Experience Timeline */}
        <div className="flex flex-col gap-12 lg:col-span-7 lg:pl-8 lg:border-l lg:border-border">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col gap-2 group"
            >
              <header className="flex flex-col justify-between md:flex-row md:items-baseline md:gap-4">
                <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-muted-foreground">
                  {exp.role}
                </h3>
                <time className="text-sm font-medium text-muted-foreground/80 shrink-0 mt-1 md:mt-0">
                  {exp.timeframe}
                </time>
              </header>
              <div className="text-lg font-medium text-foreground">
                {exp.company}
              </div>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
