import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Required under `output: export` — emitted once at build time. */
export const dynamic = "force-static";

/**
 * A minimal manifest. The site is a reading experience, not an app, so it does
 * not claim standalone display or an app-like start URL — it exists so the
 * install prompt, the Android home-screen icon and the address-bar theming use
 * our own brand rather than a screenshot of the page.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#fbf9f6",
    theme_color: "#740504",
    lang: "en",
    categories: ["shopping", "lifestyle"],
    icons: [
      { src: "/img/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/img/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/img/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
