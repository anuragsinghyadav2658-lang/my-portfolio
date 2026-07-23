"use client";
import { motion } from "framer-motion";

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "MySQL",
  "TypeScript",
  "Tailwind CSS",
  "Docker",
  "Vercel",
  "Google APIs",
];

export function TechMarquee() {
  return (
    <div className="relative flex w-full overflow-hidden border-y border-border bg-background/50 py-4 flex-col justify-center">
      <motion.div
        className="flex w-max space-x-12 px-6"
        // 0% se -50% tak move karenge aur array ko double kar diya hai taki loop seamless lage
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Speed adjust karne ke liye isko change kar sakte ho
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="text-lg font-bold uppercase tracking-wider text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
