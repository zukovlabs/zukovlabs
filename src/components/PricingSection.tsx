import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import posthog from "posthog-js";

const PRO_URL = "https://zukovlabs.lemonsqueezy.com/checkout/buy/0dbe2f00-c90f-414b-b2d1-4e589f487058";

const highlights = [
  "Full source code access",
  "Stripe payments included",
  "Magic link auth",
  "88 test cases",
  "Lifetime updates",
  "One-time purchase",
];

export function PricingSection() {
  return (
<section className="px-6 py-20 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        One purchase. <span className="text-primary">Ship forever.</span>
      </h2>
      <p className="text-muted-foreground mb-6">
        Not a subscription. Buy once, build unlimited projects.
      </p>
      <div className="mb-8">
        <div className="text-5xl font-bold text-primary mb-2">€149</div>
        <p className="text-sm text-muted-foreground">one-time payment · lifetime updates · commercial use</p>
      </div>
      <div className="rounded-xl border border-primary/30 bg-surface p-8 shadow-[0_0_60px_var(--glow)]">
        <div className="grid grid-cols-2 gap-3 mb-8 text-left">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-sm text-surface-foreground">
              <Check className="h-4 w-4 text-primary shrink-0" />
              {h}
            </div>
          ))}
        </div>
        <a href={PRO_URL} target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture("click_pro_bottom")}>
          <Button variant="glow" size="lg" className="text-base px-10 py-6 font-semibold w-full sm:w-auto cursor-pointer">
            Get PRO Version
          </Button>
        </a>
      </div>
    </section>
  );
}
