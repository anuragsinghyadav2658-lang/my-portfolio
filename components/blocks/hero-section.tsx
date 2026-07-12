"use client";

import { useRef } from "react";
import SplitType from "split-type";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "framer-motion";
import { HeroBackground } from "./hero-background";

export function HeroSection() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const text = new SplitType(textRef.current, { types: "chars,words" });
      gsap.set(text.chars, { y: 100, opacity: 0 });

      const tl = gsap.timeline();

      tl.to(text.chars, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.02,
        ease: "expo.out",
        delay: 0.2,
        force3D: true, // Hardware acceleration on karega
      });

      return () => {
        text.revert();
      };
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <HeroBackground />
      
      <div className="z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Yahan se text-balance aur will-change-transform hata diya gaya hai */}
        <h1
          ref={textRef}
          className="text-4xl font-bold tracking-tighter [clip-path:polygon(0_0,100%_0,100%_120%,0_120%)] sm:text-6xl md:text-8xl lg:text-9xl"
        >
          Crafting Digital Excellence.
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base font-medium text-muted-foreground sm:text-lg md:text-xl"
        >
          Elite Full Stack Developer & UI Designer. Building high-performance, 
          pixel-perfect web experiences that scale.
        </motion.p>
      </div>
    </section>
  );
}
