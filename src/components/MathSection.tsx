import { Clock } from "lucide-react";

const items = [
  { label: "Payments", desc: "Stripe integration", hours: "~40 hours" },
  { label: "Auth & Comms", desc: "Magic Link, Email Service", hours: "~40 hours" },
  { label: "Security & Core", desc: "Rate limiting, RBAC, ownership", hours: "~40 hours" },
  { label: "Frontend UX", desc: "Charts, pagination, Signal Cache", hours: "~40 hours" },
  { label: "Quality Assurance", desc: "88 test cases", hours: "~40 hours" },
];

export function MathSection() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The math is <span className="text-primary">simple</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        200+ hours of development — or one license purchase.
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-surface border border-border/50 px-6 py-4"
          >
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <div>
                <span className="font-semibold text-foreground">{item.label}</span>
                <span className="text-muted-foreground ml-2 text-sm">— {item.desc}</span>
              </div>
            </div>
            <span className="font-mono text-sm text-muted-foreground">{item.hours}</span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-lg bg-primary/10 border border-primary/30 px-6 py-4">
          <span className="font-bold text-lg text-foreground">Total</span>
          <span className="font-mono font-bold text-lg text-primary">200+ hours saved</span>
        </div>
      </div>
    </section>
  );
}
