"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--foreground),0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />

      {/* Animated Mesh Gradient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[10%] -top-[20%] h-[70vw] w-[70vw] rounded-full bg-muted-foreground/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[10%] h-[60vw] w-[60vw] rounded-full bg-foreground/10 blur-[120px]"
      />

      {/* Glassmorphism overlay to keep it extremely subdued */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[50px]" />
    </div>
  );
}
