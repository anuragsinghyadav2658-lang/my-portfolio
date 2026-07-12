"use client";

import { motion, Variants } from "framer-motion";
import { HeroBackground } from "./hero-background";

export function HeroSection() {
  const text = "Crafting Digital Excellence.";

  // TypeScript ko khush rakhne ke liye 'Variants' type add kiya hai
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };

  const child: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden">
      <HeroBackground />
      
      <div className="z-10 flex w-full max-w-5xl flex-col items-center text-center">
        
        {/* Asli Pro Jugaad: Lag-free hardware accelerated native split */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center text-4xl font-bold tracking-tighter sm:text-6xl md:text-8xl lg:text-9xl"
        >
          {text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex overflow-hidden pb-2 mr-3 md:mr-6 last:mr-0">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={child}
                  className="inline-block will-change-transform"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base font-medium text-muted-foreground sm:text-lg md:text-xl will-change-transform"
        >
          Elite Full Stack Developer & UI Designer. Building high-performance, 
          pixel-perfect web experiences that scale.
        </motion.p>
      </div>
    </section>
  );
}
