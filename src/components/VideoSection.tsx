import { useEffect, useRef } from "react";
import posthog from "posthog-js";

export function VideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const trackedRef = useRef(false);

  useEffect(() => {
    const handleBlur = () => {
      if (trackedRef.current) return;
      if (document.activeElement === iframeRef.current) {
        trackedRef.current = true;
        posthog.capture("video_play");
      }
    };
    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, []);

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <div className="rounded-xl overflow-hidden border border-border shadow-[0_0_40px_var(--glow)]">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            ref={iframeRef}
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
