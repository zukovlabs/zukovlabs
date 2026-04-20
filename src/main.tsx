import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import "./styles.css";
import App from "./App";

posthog.init("phc_BJphvDtHWgUUMg8ytuBmR2K3WxsCJDmMSHk9Yu5k259h", {
  api_host: "https://eu.i.posthog.com",
  capture_pageview: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>
);
