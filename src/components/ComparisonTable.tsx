import { Check, Minus } from "lucide-react";

interface Row {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
}

const rows: Row[] = [
  { feature: "Java 21 + Spring Boot 3.4.1", free: true, pro: true },
  { feature: "Angular 21 Standalone Components", free: true, pro: true },
  { feature: "MSSQL 2022 + Flyway Migrations", free: true, pro: true },
  { feature: "Multi-stage Docker Builds", free: true, pro: true },
  { feature: "JWT Auth (Access + Refresh Tokens)", free: "Basic", pro: true },
  { feature: "Refresh Token Rotation", free: true, pro: true },
  { feature: "BCrypt Password Hashing", free: true, pro: true },
  { feature: "User Profile Management", free: true, pro: true },
  { feature: "Basic Customer CRUD", free: true, pro: true },
  { feature: "Dashboard Stats API", free: true, pro: true },
  { feature: "Angular Material UI", free: true, pro: true },
  { feature: "401 Race Condition Protection", free: true, pro: true },
  { feature: "Auth Guard (JWT exp validation)", free: true, pro: true },
  { feature: "Stripe Checkout + Webhook Handling", free: false, pro: true },
  { feature: "Stripe Billing Portal", free: false, pro: true },
  { feature: "Magic Link (Passwordless Auth)", free: false, pro: true },
  { feature: "Post-Payment Auto-Login via Magic Link", free: false, pro: true },
  { feature: "Email Service (Thymeleaf HTML templates)", free: false, pro: true },
  { feature: "IP Rate Limiting (brute-force protection)", free: false, pro: true },
  { feature: "Server-Side Pagination", free: false, pro: true },
  { feature: "Strict RBAC (ADMIN / MANAGER / USER)", free: false, pro: true },
  { feature: "Entity Ownership Enforcement (403)", free: false, pro: true },
  { feature: "Signal Cache (no duplicate HTTP calls)", free: false, pro: true },
  { feature: "Dashboard Charts (Chart.js)", free: false, pro: true },
  { feature: "13 Test Files / 88 Test Cases", free: false, pro: true },
  { feature: "Mockito Strict Stubs + ArgumentCaptor", free: false, pro: true },
  { feature: "Vitest Frontend Test Suite", free: false, pro: true },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-primary" />;
  if (value === false) return <Minus className="h-4 w-4 text-muted-foreground/40" />;
  return <span className="text-xs font-mono text-muted-foreground">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Free vs <span className="text-primary">PRO</span>
      </h2>
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left px-6 py-4 font-semibold text-foreground">Feature</th>
                <th className="text-center px-6 py-4 font-semibold text-foreground w-28">Free</th>
                <th className="text-center px-6 py-4 font-semibold text-primary w-28">PRO</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.feature}
                  className={i % 2 === 0 ? "bg-card/50" : "bg-surface/30"}
                >
                  <td className="px-6 py-3 text-surface-foreground">{r.feature}</td>
                  <td className="px-6 py-3 text-center">
                    <span className="inline-flex justify-center">
                      <CellIcon value={r.free} />
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="inline-flex justify-center">
                      <CellIcon value={r.pro} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
