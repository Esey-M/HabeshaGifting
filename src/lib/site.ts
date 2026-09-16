/** Single source of truth for site-wide constants and URL construction. */

export const site = {
  name: "HabeshaGifting",
  domain: "habeshagifting.com",
  url: "https://habeshagifting.com",
  tagline: "Ethiopian & Eritrean Gift Ideas",
  description:
    "Ethiopian and Eritrean gift ideas for Habesha family and friends. Explore coffee ceremony gifts, cultural keepsakes and honest guides to choosing well.",
  locale: "en_US",
  email: "hello@habeshagifting.com",
  /** First publication of the site, used for Organization schema. */
  founded: "2026",
  /**
   * Subject areas the site actually covers. Emitted as `knowsAbout` so answer
   * engines can place the site in a topic, rather than inferring it from copy.
   */
  topics: [
    "Habesha gift ideas",
    "Ethiopian gifts",
    "Eritrean gifts",
    "Ethiopian coffee ceremony sets",
    "Personalised gifts",
    "Gifts by recipient and occasion",
  ],
} as const;

/**
 * Search-engine ownership tokens.
 *
 * Both consoles accept an HTML meta tag, and Next emits these into <head> for
 * every page. Paste the `content` value only — not the whole tag — then commit
 * and push; verification passes once the deploy lands. Empty strings are
 * omitted from the markup, so an unconfigured console costs nothing.
 */
export const verification = {
  /** Search Console → Add property → URL prefix → HTML tag. */
  google: "",
  /** Bing Webmaster Tools → Add site → Verify → Meta tag (`msvalidate.01`). */
  bing: "",
  /** Yandex Webmaster, if you ever add it. */
  yandex: "",
  /** Pinterest claim tag — worth having for a gifting site. */
  pinterest: "",
} as const;

/** Absolute URL for canonical tags, Open Graph and structured data. */
export function absoluteUrl(path: string): string {
  if (path === "/") return `${site.url}/`;
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${trimmed.endsWith("/") ? trimmed : `${trimmed}/`}`;
}

/**
 * Absolute URL for a file rather than a page — no trailing slash is appended,
 * which would break an image or a text file.
 */
export function assetUrl(path: string): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Stable @id values, so every JSON-LD node on the site points at one entity. */
export const ids = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  logo: `${site.url}/#logo`,
  page: (path: string) => `${absoluteUrl(path)}#webpage`,
} as const;

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
