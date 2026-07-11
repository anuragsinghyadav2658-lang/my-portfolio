import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register core plugins once to avoid duplicate registrations across components
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Optional: Global ScrollTrigger defaults for Apple-like reveal effects
  ScrollTrigger.defaults({
    markers: process.env.NODE_ENV === "development" ? false : false,
  });
}

export { gsap, ScrollTrigger, useGSAP };
