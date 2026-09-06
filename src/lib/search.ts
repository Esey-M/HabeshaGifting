import { categories, products } from "@/content";
import { routes } from "./site";

/**
 * Search index.
 *
 * Built at module load from the same content the pages render, so it can never
 * point at a page that does not exist. Scoring is a simple weighted term match
 * — adequate and instant for a catalogue of this size, and it ships as static
 * JS with no backend, which is the constraint we are building under.
 */
export interface SearchDoc {
  title: string;
  href: string;
  kind: "Guide" | "Category" | "Collection";
  description: string;
  /** Lowercased haystack, precomputed once. */
  haystack: string;
  /** Words weighted above body text. */
  keywords: string;
}

export const searchIndex: SearchDoc[] = [
  ...categories.map((c) => ({
    title: c.title,
    href: routes.category(c.slug),
    kind: "Category" as const,
    description: c.tagline,
    keywords: `${c.title} ${c.heading}`.toLowerCase(),
    haystack: `${c.title} ${c.heading} ${c.tagline} ${c.intro}`.toLowerCase(),
  })),
  ...categories.flatMap((c) =>
    c.subcategories.map((s) => ({
      title: s.heading,
      href: routes.subcategory(c.slug, s.slug),
      kind: "Collection" as const,
      description: s.tagline,
      keywords: `${s.title} ${s.heading} ${c.title}`.toLowerCase(),
      haystack: `${s.title} ${s.heading} ${s.tagline} ${s.intro} ${c.title}`.toLowerCase(),
    })),
  ),
  ...products.map((p) => ({
    title: p.title,
    href: routes.guide(p.slug),
    kind: "Guide" as const,
    description: p.summary,
    keywords: `${p.title} ${p.tag} ${p.tags.join(" ")}`.toLowerCase(),
    haystack:
      `${p.title} ${p.tag} ${p.summary} ${p.bestFor} ${p.tags.join(" ")} ${p.guide.heading} ${p.guide.standfirst}`.toLowerCase(),
  })),
];

/** Budget phrasings map onto the band vocabulary the content actually uses. */
const budgetAliases: Record<string, string> = {
  cheap: "under-25 budget",
  budget: "under-25 budget",
  "under 25": "under-25",
  "under 50": "under-50",
  "under 100": "under-100",
  affordable: "budget under-25",
};

export function search(query: string, limit = 24): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const expanded = Object.entries(budgetAliases).reduce(
    (acc, [alias, expansion]) => (acc.includes(alias) ? `${acc} ${expansion}` : acc),
    q,
  );

  const terms = expanded.split(/\s+/).filter((t) => t.length > 1);
  if (terms.length === 0) return [];

  return searchIndex
    .map((doc) => {
      let score = 0;
      for (const term of terms) {
        if (doc.title.toLowerCase().includes(term)) score += 8;
        if (doc.keywords.includes(term)) score += 4;
        if (doc.haystack.includes(term)) score += 1;
      }
      // Reward matching every term over matching one term many times.
      const coverage = terms.filter((t) => doc.haystack.includes(t)).length / terms.length;
      return { doc, score: score * (0.4 + 0.6 * coverage) };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .slice(0, limit)
    .map((entry) => entry.doc);
}

/** Suggested queries shown before the reader types anything. */
export const exampleQueries = [
  "gift for mom",
  "Habesha wedding gift",
  "Ethiopian gift",
  "Eritrean gift",
  "coffee gift",
  "jebena",
  "personalised jewellery",
  "gift under $50",
];
