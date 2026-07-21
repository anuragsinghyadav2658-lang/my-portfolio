import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/constants";

export default function ProjectCaseStudy({
  params,
}: {
  params: { id: string };
}) {
  // URL se id nikal kar apne constants data me se project dhundh rahe hain
  const project = projectsData.find((p) => p.id.toString() === params.id);

  // Agar koi galat ID daale toh 404 page dikhao
  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center pt-24 pb-16 px-4 sm:px-6 md:px-12">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-fit group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mt-2">
            <span className="font-medium text-foreground">{project.category}</span>
            <span className="hidden md:inline">•</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="rounded-md border border-border/50 bg-secondary/20 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted border border-border/50">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 border-b border-border pb-8">
          <Link 
            href={project.liveUrl} 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            View Live Site <ExternalLink className="h-4 w-4" />
          </Link>
          <Link 
            href={project.githubUrl} 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold hover:bg-secondary/50 transition-colors"
          >
            Source Code
          </Link>
        </div>

        {/* Case Study Detailed Content */}
        <div className="flex flex-col gap-10 mt-4 text-muted-foreground leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p>
              This is a detailed case study for {project.title}. Here you will describe the main goal of the project, who the target audience is, and what problem it solves. 
              (Tu isko baad mein apne hisaab se change kar sakta hai).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-foreground">The Challenge</h2>
            <p>
              Explain the technical or design hurdles you faced. For example, scaling the database, handling complex animations without performance drop, or state management issues.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-foreground">The Solution</h2>
            <p>
              Describe how you used <strong>{project.techStack.join(", ")}</strong> to overcome those challenges and deliver a seamless experience.
            </p>
          </section>
        </div>
        
      </div>
    </main>
  );
}
