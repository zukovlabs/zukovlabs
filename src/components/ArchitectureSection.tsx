export function ArchitectureSection() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Architecture
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-0 font-mono text-sm">
        <ArchNode label="Browser" sub="Client" />
        <Arrow />
        <ArchNode label="Nginx" sub=":8081" highlight />
        <Arrow />
        <div className="flex flex-col items-center gap-2">
          <ArchNode label="Angular SPA" sub="+ /api proxy" />
        </div>
        <Arrow />
        <ArchNode label="Spring Boot" sub=":8080" highlight />
        <Arrow />
        <ArchNode label="MSSQL" sub=":1433" />
      </div>
    </section>
  );
}

function ArchNode({ label, sub, highlight }: { label: string; sub: string; highlight?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border px-5 py-4 min-w-[120px] ${
        highlight
          ? "border-primary/50 bg-primary/10 text-primary"
          : "border-border bg-surface text-surface-foreground"
      }`}
    >
      <span className="font-semibold text-sm">{label}</span>
      <span className="text-xs text-muted-foreground">{sub}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center px-2 py-3 md:py-0">
      <span className="hidden md:block text-muted-foreground/60">→</span>
      <span className="block md:hidden text-muted-foreground/60">↓</span>
    </div>
  );
}
