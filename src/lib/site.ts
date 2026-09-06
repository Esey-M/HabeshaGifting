/** Single source of truth for site-wide constants and URL construction. */

export const site = {
  name: "HabeshaGifting",
  domain: "habeshagifting.com",
  url: "https://habeshagifting.com",
  tagline: "Thoughtful gifts for the Habesha in your life",
  description:
    "Gift ideas and honest buying guides for Habesha family and friends — coffee ceremony sets, cultural gifts, personalised pieces and gifts for every occasion.",
  locale: "en_US",
} as const;

/** Absolute URL for canonical tags, Open Graph and structured data. */
export function absoluteUrl(path: string): string {
  if (path === "/") return `${site.url}/`;
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${trimmed.endsWith("/") ? trimmed : `${trimmed}/`}`;
}

export const routes = {
  home: "/",
  gifts: "/gifts/",
  category: (category: string) => `/gifts/${category}/`,
  subcategory: (category: string, subcategory: string) => `/gifts/${category}/${subcategory}/`,
  guides: "/gift-guides/",
  guide: (slug: string) => `/gift-guides/${slug}/`,
  search: "/search/",
  about: "/about/",
  contact: "/contact/",
  privacy: "/privacy/",
  terms: "/terms/",
  disclosure: "/affiliate-disclosure/",
} as const;
