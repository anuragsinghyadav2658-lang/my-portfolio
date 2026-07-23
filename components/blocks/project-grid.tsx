"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/animations/magnetic";
import { projectsData } from "../../lib/constants";

export function ProjectGrid() {
  return (
    <section id="work" className="w-full max-w-7xl px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:py-32">
      <div className="mb-8 md:mb-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Selected Work
        </h2>
        <div className="h-[1px] w-full bg-border" />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-x-16">
        {projectsData.map((project, i) => (
          <Magnetic key={project.id} intensity={0.04}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i % 2 === 0 ? 0 : 0.2,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <div className="group relative flex w-full flex-col gap-4 md:gap-5">
                {/* Image Section */}
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted block cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-background/0 transition-colors duration-500 md:group-hover:bg-background/10" />

                  <div className="absolute right-4 top-4 md:right-6 md:top-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-xl backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 opacity-100 md:scale-75 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 md:group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 md:group-hover:-rotate-45" />
                  </div>
                </Link>

                {/* Details Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight transition-colors md:group-hover:text-muted-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {project.category}
                      </p>
                    </div>

                    {/* GitHub Link Only */}
                    <div className="flex items-center gap-2">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.5 4.1 4.1 0 0 0 .1-3.4s-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6 2.7 4.8 3.1 4.8 3.1a4.1 4.1 0 0 0 .1 3.4A5.2 5.2 0 0 0 3 10.5c0 5.22 3 6.42 6 6.76-.8.7-1.1 2-1.1 3.24v4"></path>
                          <path d="M3 19s2 1 4 1"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}
