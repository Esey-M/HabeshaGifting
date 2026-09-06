import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";

/** Required under `output: export` — this file is emitted once at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The search page renders no unique content of its own.
      disallow: [routes.search],
    },
    sitemap: absoluteUrl("/sitemap.xml").replace(/\/$/, ""),
    host: absoluteUrl("/").replace(/\/$/, ""),
  };
}
