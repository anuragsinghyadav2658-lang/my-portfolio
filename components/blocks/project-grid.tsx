"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/animations/magnetic";

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
    <section className="w-full max-w-7xl px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:py-32">
      <div className="mb-8 md:mb-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Selected Work</h2>
        <div className="h-[1px] w-full bg-border" />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-x-16">
        {projects.map((project, i) => (
          <Magnetic key={project.id} intensity={0.04}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i % 2 === 0 ? 0 : 0.2, ease: "easeOut" }}
              className="w-full"
            >
              <Link href={`/work/${project.id}`} className="group relative flex w-full flex-col gap-4 md:gap-5 cursor-pointer">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
                                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    // Changed duration to 500 for a snappier, yet smooth effect
                    className="object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-500 md:group-hover:bg-background/10" />
                  
                  {/* Made the button slide up slightly and rotate on hover for a magnetic feel */}
                  <div className="absolute right-4 top-4 md:right-6 md:top-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-xl backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 opacity-100 md:scale-75 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 md:group-hover:rotate-45">
                    {/* Reverse rotation on the icon to keep it straight while the parent rotates */}
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 md:group-hover:-rotate-45" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight transition-colors md:group-hover:text-muted-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}
