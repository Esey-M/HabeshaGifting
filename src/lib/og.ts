/**
 * Open Graph and Twitter card artwork.
 *
 * The site is a static export with no image optimizer and no edge runtime, so
 * card images cannot be rendered on demand. They are generated ahead of time by
 * `npm run og` and committed, exactly as the site artwork is. This module only
 * decides which file a page points at.
 */

import { assetUrl } from "@/lib/site";

/** Facebook, LinkedIn, X and Slack all crop to this. */
export const OG_SIZE = { width: 1200, height: 630 } as const;

/** Used by any page without artwork of its own. */
export const OG_DEFAULT = "/img/og/default.png";

/** Card image for a guide, keyed by slug. */
export function ogGuide(slug: string): string {
  return `/img/og/guide/${slug}.png`;
}

/** Card image for a category or subcategory listing. */
export function ogListing(slug: string): string {
  return `/img/og/listing/${slug}.png`;
}

/**
 * Metadata shape for `openGraph.images`. Absolute URLs are used deliberately:
 * several scrapers, X among them, refuse to resolve a relative card image.
 */
export function ogImageMeta(path: string, alt: string) {
  return [
    {
      url: assetUrl(path),
      width: OG_SIZE.width,
      height: OG_SIZE.height,
      alt,
      type: "image/png",
    },
  ];
}
