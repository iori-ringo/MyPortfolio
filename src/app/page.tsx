import type { Metadata } from "next";
import { CtaSection } from "@/components/home/cta-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedWorksSection } from "@/components/home/featured-works-section";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
