import { Button } from "@/components/ui/button";

const PRO_URL = "https://zukovlabs.lemonsqueezy.com/checkout/buy/0dbe2f00-c90f-414b-b2d1-4e589f487058";
const GITHUB_URL = "https://github.com/zukovlabs/enterprise-java-saas-starter-kit";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_70%)] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-mono text-muted-foreground mb-8">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Open Source · Java 21 · Spring Boot 3.4.1
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Ship your Java SaaS
          <br />
          <span className="text-primary">in days, not months</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Production-ready fullstack boilerplate — Java 21 + Spring Boot 3.4.1 + Angular 21 + MSSQL + Docker Compose. Clone, configure, and ship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={PRO_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="glow" size="lg" className="text-base px-8 py-6 font-semibold cursor-pointer">
              Get PRO Version
            </Button>
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline_glow" size="lg" className="text-base px-8 py-6 font-semibold cursor-pointer">
              View Free on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
