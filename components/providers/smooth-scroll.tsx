"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Reset scroll position to top when changing routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // The lower the number, the smoother (and heavier) the feel
        duration: 1.2, 
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
