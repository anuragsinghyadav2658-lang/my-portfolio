"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/animations/magnetic";

// Mock data using Unsplash placeholders
const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "UI/UX & Frontend",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack Next.js",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI Chat Interface",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Web3 Protocol",
    category: "Smart Contracts",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec516?q=80&w=2000&auto=format&fit=crop",
  },
];

export function ProjectGrid() {
  return (
    <section className="w-full max-w-7xl px-6 py-24 md:px-12 lg:py-32">
      <div className="mb-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Selected Work</h2>
        <div className="h-[1px] w-full bg-border" />
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-x-16">
        {projects.map((project, i) => (
          <Magnetic key={project.id} intensity={0.04}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i % 2 === 0 ? 0 : 0.2, ease: "easeOut" }}
              className="w-full"
            >
              <Link href={`/work/${project.id}`} className="group relative flex w-full flex-col gap-5 cursor-pointer">
                {/* Image Container with strict aspect ratio to prevent CLS */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/10" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute right-6 top-6 flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-xl backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Meta Data */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-muted-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}
