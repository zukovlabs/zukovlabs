import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { TechStackSection } from "@/components/TechStackSection";
import { FreeFeatures } from "@/components/FreeFeatures";
import { ComparisonTable } from "@/components/ComparisonTable";
import { MathSection } from "@/components/MathSection";
import { PricingSection } from "@/components/PricingSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Footer } from "@/components/Footer";

export default function App() {
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
    </div>
  );
}
