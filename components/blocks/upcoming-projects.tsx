"use client";

import { motion } from "framer-motion";
import { Timer, ArrowRight } from "lucide-react";

const upcoming = [
  {
    title: "AI Image Generator SaaS",
    description: "A full-stack application utilizing stable diffusion APIs with a credit-based subscription model.",
    status: "In Progress",
    progress: 65,
  },
  {
    title: "Minimalist Framer Component Library",
    description: "An open-source library of highly customizable, copy-paste Framer Motion components.",
    status: "Planning",
    progress: 20,
  }
];

export function UpcomingProjects() {
  return (
    <section className="w-full max-w-7xl px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:py-32">
      <div className="mb-8 md:mb-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          What's Brewing?
        </h2>
        <div className="h-[1px] w-full bg-border" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {upcoming.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-secondary/10 p-6 md:p-8 transition-colors hover:bg-secondary/20"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 rounded-full bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground border border-border/50">
                  <Timer className="h-3 w-3" />
                  {project.status}
                </div>
                {project.status === "In Progress" && (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                )}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span>Development</span>
                <span>{project.progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-background">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-foreground rounded-full" 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
