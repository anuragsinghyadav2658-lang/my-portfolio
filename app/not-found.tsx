"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        {/* Giant 404 Text */}
        <h1 className="text-8xl font-bold tracking-tighter text-foreground sm:text-[12rem]">
          404
        </h1>
        
        <div className="space-y-4 mt-[-2rem]">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
            Page not found.
          </h2>
          <p className="max-w-[400px] text-muted-foreground">
            Oops! Looks like you've wandered into the unknown. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        {/* Elite Hover Button */}
        <Link 
          href="/"
          className="group relative mt-6 inline-flex h-12 w-48 items-center justify-center overflow-hidden rounded-full bg-foreground font-medium text-background transition-transform active:scale-95"
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            Return Home
          </span>
          <span className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            {/* Pure SVG Home Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Return Home
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
