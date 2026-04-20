import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { TechStackSection } from "@/components/TechStackSection";
import { FreeFeatures } from "@/components/FreeFeatures";
import { ComparisonTable } from "@/components/ComparisonTable";
import { MathSection } from "@/components/MathSection";
import { PricingSection } from "@/components/PricingSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import posthog from "posthog-js";

export default function App() {
  useEffect(() => {
    let tracked = false;
    const onScroll = () => {
      if (tracked) return;
      const scrolled = window.innerHeight + window.scrollY;
      if (scrolled >= document.documentElement.scrollHeight - 50) {
        tracked = true;
        posthog.capture("scrolled_to_bottom");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-2 right-2 z-50">
        <button
          onClick={() => {
            posthog.capture("test_manual_click");
            console.log("PostHog event fired");
          }}
          className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg hover:opacity-90"
        >
          Test PostHog
        </button>
      </div>
      <HeroSection />
      <VideoSection />
      <TechStackSection />
      <FreeFeatures />
      <ComparisonTable />
      <MathSection />
      <PricingSection />
      <ArchitectureSection />
      <Footer />
    </div>
  );
}
