"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "./hero-background";

export function HeroSection() {
  // Splitting by words instead of characters drastically reduces DOM nodes
  const title = "Crafting Digital Excellence.";
  const words = title.split(" ");

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 md:px-12">
      <HeroBackground />
      
      <div className="z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* overflow-hidden is significantly cheaper for the GPU than clip-path */}
        <h1 className="flex flex-wrap justify-center gap-x-[0.25em] text-4xl font-bold tracking-tighter sm:text-6xl md:text-8xl lg:text-9xl overflow-hidden py-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for Apple-like expo.out
                delay: 0.1 + i * 0.1,
              }}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base font-medium text-muted-foreground sm:text-lg md:text-xl will-change-transform md:will-change-auto"
        >
          Elite Full Stack Developer & UI Designer. Building high-performance, 
          pixel-perfect web experiences that scale.
        </motion.p>
      </div>
    </section>
  );
}
