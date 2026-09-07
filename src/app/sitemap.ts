import type { MetadataRoute } from "next";
import { categories, products } from "@/content";
import { productsIn, productsInCategory } from "@/lib/content";
import { PRODUCT_WIDTHS } from "@/lib/images";
import { absoluteUrl, assetUrl, routes } from "@/lib/site";

/** Required under `output: export` — this file is emitted once at build time. */
export const dynamic = "force-static";

/** Widest committed variant, which is the one worth offering to Google Images. */
const WIDEST_PRODUCT = PRODUCT_WIDTHS[PRODUCT_WIDTHS.length - 1];

/**
 * Most recent revision across a set of products, so a listing page reports a
 * real `lastmod` rather than the build clock. A sitemap that claims every page
 * changed on every deploy trains crawlers to ignore the field.
 */
function latestUpdate(list: { updated: string }[], fallback: string): string {
  return list.reduce((newest, p) => (p.updated > newest ? p.updated : newest), fallback);
}

/**
 * Emitted as a static sitemap.xml at build time, which is what GitHub Pages
 * needs. Every URL here is a page that is actually generated — the same
 * content module drives both.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const catalogueUpdated = latestUpdate(products, "2026-01-01");
  const siteFloor = new Date(catalogueUpdated);

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl(routes.home), lastModified: siteFloor, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(routes.gifts), lastModified: siteFloor, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(routes.guides), lastModified: siteFloor, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(routes.about), lastModified: siteFloor, changeFrequency: "yearly", priority: 0.4 },
    { url: absoluteUrl(routes.contact), lastModified: siteFloor, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl(routes.disclosure), lastModified: siteFloor, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl(routes.privacy), lastModified: siteFloor, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl(routes.terms), lastModified: siteFloor, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: absoluteUrl(routes.category(c.slug)),
    lastModified: new Date(latestUpdate(productsInCategory(c.slug), catalogueUpdated)),
    changeFrequency: "weekly",
    priority: 0.8,
    ...(c.image ? { images: [assetUrl(`${c.image}-1200.webp`)] } : {}),
  }));

  const subcategoryPages: MetadataRoute.Sitemap = categories.flatMap((c) =>
    c.subcategories.map((s) => ({
      url: absoluteUrl(routes.subcategory(c.slug, s.slug)),
      lastModified: new Date(latestUpdate(productsIn(c.slug, s.slug), catalogueUpdated)),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      ...(s.image ? { images: [assetUrl(`${s.image}-1200.webp`)] } : {}),
    })),
  );

  /**
   * Guides are the pages that earn traffic, so they sit above the listings that
   * merely link to them, and each declares its illustration for Google Images.
   */
  const guidePages: MetadataRoute.Sitemap = products.map((p) => ({
    url: absoluteUrl(routes.guide(p.slug)),
    lastModified: new Date(p.updated),
    changeFrequency: "monthly",
    priority: 0.8,
    ...(p.image ? { images: [assetUrl(`${p.image}-${WIDEST_PRODUCT}.webp`)] } : {}),
  }));

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...guidePages];
}
