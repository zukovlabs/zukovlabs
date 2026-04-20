import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { TechStackSection } from "@/components/TechStackSection";
import { FreeFeatures } from "@/components/FreeFeatures";
import { ComparisonTable } from "@/components/ComparisonTable";
import { MathSection } from "@/components/MathSection";
import { PricingSection } from "@/components/PricingSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function App() {
  useEffect(() => {
    let tracked = false;
    const onScroll = () => {
      if (tracked) return;
      const scrolled = window.innerHeight + window.scrollY;
      if (scrolled >= document.documentElement.scrollHeight - 50) {
        tracked = true;
        track("scrolled_to_bottom");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <VideoSection />
      <TechStackSection />
      <FreeFeatures />
      <ComparisonTable />
      <MathSection />
      <PricingSection />
      <ArchitectureSection />
      <Footer />
      <Analytics />
    </div>
  );
}
