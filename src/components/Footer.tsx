import { Github, Twitter } from "lucide-react";
import posthog from "posthog-js";

const GITHUB_URL = "https://github.com/zukovlabs/enterprise-java-saas-starter-kit";
const DEVTO_URL = "https://dev.to/zukovlabs/angular-21-spring-boot-34-in-docker-the-plumbing-nobody-shows-you-5a7l";
const TWITTER_URL = "https://x.com/RomansZukovs";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-sm font-mono uppercase tracking-wider text-foreground">Support & Questions</h2>
          <p className="text-sm text-muted-foreground">
            Have a question? Reach out at{" "}
            <a href="mailto:support@zukovlabs.com" className="text-foreground hover:text-primary transition-colors">
              support@zukovlabs.com
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-6">
        <span className="text-sm text-muted-foreground">
          Built by{" "}
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            ZukovLabs
          </a>
        </span>
        <div className="flex items-center gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href={DEVTO_URL} target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture("click_devto")} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono" aria-label="Dev.to article">
            DEV.to
          </a>
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture("click_twitter")} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter/X">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
