import { CtaSection } from "@/components/sections/cta-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedWorksSection } from "@/components/sections/featured-works-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HighlightsSection } from "@/components/sections/highlights-section";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HighlightsSection />
      <FeaturedWorksSection />
      <ExperienceSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
