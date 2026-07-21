import { HeroSection } from "@/components/blocks/hero-section";
import { ProjectGrid } from "@/components/blocks/project-grid";
import { ExperienceSection } from "@/components/blocks/experience-section";
import { Footer } from "@/components/layout/footer";
import { SkillsSection } from "@/components/blocks/skills-section";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center">
      <HeroSection />

      {/* TODO: SkillsSection yahan aayega */}

      <ProjectGrid />
      <SkillsSection />
      <ExperienceSection />

      {/* TODO: UpcomingProjects yahan aayega */}

      <Footer />
    </div>
  );
}
