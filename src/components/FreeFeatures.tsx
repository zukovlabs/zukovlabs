import { Check } from "lucide-react";

const features = [
  "Stateless JWT auth with access + refresh token rotation",
  "BCrypt password hashing",
  "Basic Customer CRUD",
  "User profile management",
  "Dashboard stats API",
  "Angular Material UI",
  "401 race condition protection (interceptor)",
  "Auth Guard with JWT exp validation",
  "Nginx SPA hosting + security headers",
  "MSSQL healthcheck (no startup race)",
  "Multi-stage Docker builds",
  "One-command deploy: docker compose up",
];

export function FreeFeatures() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        What's included in <span className="text-primary">Free</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Everything you need to get started — no strings attached.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f) => (
          <div
            key={f}
            className="flex items-start gap-3 rounded-lg bg-surface p-4 border border-border/50"
          >
            <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-surface-foreground">{f}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
