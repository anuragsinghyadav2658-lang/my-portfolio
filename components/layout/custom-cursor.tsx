"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for smooth trailing lag (Apple-style)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only initialize on desktop devices to prevent mobile touch glitches
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor when hovering over interactive elements
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") || 
        target.closest("button");
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      // 1. Removed 'mix-blend-difference'
      // 2. Added 'bg-white/70 backdrop-blur-sm' for a premium glass look
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm md:block shadow-lg"
      // 3. Added willChange: "transform" to force GPU Hardware Acceleration
      style={{ x: smoothX, y: smoothY, willChange: "transform" }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        opacity: 1,
      }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
    />
  );
}