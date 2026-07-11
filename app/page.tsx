import { HeroSection } from "@/components/blocks/hero-section";
import { ProjectGrid } from "@/components/blocks/project-grid";
import { ExperienceSection } from "@/components/blocks/experience-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center">
      <HeroSection />
      <ProjectGrid />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
