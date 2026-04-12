export function VideoSection() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <div className="rounded-xl overflow-hidden border border-border shadow-[0_0_40px_var(--glow)]">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/el6x6VmtAH8"
            title="Enterprise Java SaaS Starter Kit Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
