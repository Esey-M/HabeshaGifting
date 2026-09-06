import type { MetadataRoute } from "next";
import { categories, products } from "@/content";
import { absoluteUrl, routes } from "@/lib/site";

/** Required under `output: export` — this file is emitted once at build time. */
export const dynamic = "force-static";

/**
 * Emitted as a static sitemap.xml at build time, which is what GitHub Pages
 * needs. Every URL here is a page that is actually generated — the same
 * content module drives both.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl(routes.home), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(routes.gifts), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(routes.guides), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(routes.about), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: absoluteUrl(routes.contact), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl(routes.disclosure), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl(routes.privacy), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl(routes.terms), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: absoluteUrl(routes.category(c.slug)),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const subcategoryPages: MetadataRoute.Sitemap = categories.flatMap((c) =>
    c.subcategories.map((s) => ({
      url: absoluteUrl(routes.subcategory(c.slug, s.slug)),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  const guidePages: MetadataRoute.Sitemap = products.map((p) => ({
    url: absoluteUrl(routes.guide(p.slug)),
    lastModified: new Date(p.updated),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...guidePages];
}
