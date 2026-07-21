import { HeroSection } from "@/components/blocks/hero-section";
import { ProjectGrid } from "@/components/blocks/project-grid";
import { ExperienceSection } from "@/components/blocks/experience-section";
import { Footer } from "@/components/layout/footer";
import { SkillsSection } from "@/components/blocks/skills-section";
import { UpcomingProjects } from "@/components/blocks/upcoming-projects";
import { TechMarquee } from "@/components/blocks/tech-marquee";
  
export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center">
      <HeroSection />
      <TechMarquee />

      <ProjectGrid />
      <SkillsSection />
      <ExperienceSection />

      <UpcomingProjects />

      <Footer />
    </div>
  );
}
