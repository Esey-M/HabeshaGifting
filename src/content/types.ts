/**
 * Content model for HabeshaGifting.
 *
 * Everything the site renders comes from these shapes. Pages are generated from
 * data, never hand-authored one by one, so the catalogue can grow to thousands
 * of recommendations without new route files.
 */

/**
 * Budget bands, not prices.
 *
 * We deliberately model budget as a coarse band rather than a dollar amount:
 * real Amazon prices move constantly and we will not display invented ones.
 * When live pricing is wired up it becomes an additional field, and the band
 * stays as the browsable facet.
 */
export type BudgetBand = "under-25" | "under-50" | "under-100" | "100-plus";

export interface BudgetMeta {
  id: BudgetBand;
  label: string;
  /** Sort order for filter chips, cheapest first. */
  rank: number;
}

/** A top-level entry point on the homepage, e.g. "Gifts for Her". */
export interface Category {
  slug: string;
  /** Display name without the icon. */
  title: string;
  /** Emoji used as a light visual marker, never as the only signal. */
  icon: string;
  /** One-line description used on cards and as the meta description base. */
  tagline: string;
  /** Longer editorial intro shown at the top of the category page. */
  intro: string;
  /** Heading used on the category page, may differ from the nav title. */
  heading: string;
  /** How the child cards are framed: people, moments, or product families. */
  childLabel: "Recipients" | "Occasions" | "Collections";
  /** Palette seed for generated artwork, so a category looks consistent. */
  art: ArtSeed;
  subcategories: Subcategory[];
  /** Shown in the primary desktop navigation. */
  inNav?: boolean;
}

/** A second-level page: a recipient, an occasion, or a product family. */
export interface Subcategory {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  /** H1 for the listing page, e.g. "Best Gifts for Mom". */
  heading: string;
  /** Editorial standfirst above the product grid. */
  intro: string;
  art: ArtSeed;
}

/** Seed for the generated SVG artwork. Keeps imagery deterministic. */
export interface ArtSeed {
  /** Hue rotation applied to the brand-derived gradient, in degrees. */
  hue: number;
  /** Which motif to draw. */
  motif: Motif;
}

export type Motif = "weave" | "arch" | "vessel" | "rays" | "cross" | "basket";

/**
 * A recommended product.
 *
 * Every product carries its own editorial guide content, so a recommendation
 * and its article are never out of sync and every "Read Full Guide" link
 * resolves to a real page.
 */
export interface Product {
  slug: string;
  title: string;
  /** Small uppercase label on the card, e.g. "Coffee Ceremony". */
  tag: string;
  /** Card description: why this is worth considering, in one or two lines. */
  summary: string;
  /** Free-text "Best for" line, e.g. "Mom · Coffee lover". */
  bestFor: string;
  budget: BudgetBand;
  /**
   * Affiliate destination. Null until a real tagged URL is added — the UI
   * renders a disabled state rather than a dead or fabricated link.
   */
  affiliateUrl: string | null;
  art: ArtSeed;
  /** Which category/subcategory listings this appears in. */
  placements: Placement[];
  /** Facets for search and filtering. */
  tags: string[];
  guide: Guide;
  /** ISO date, used for article schema and "updated" lines. */
  updated: string;
}

export interface Placement {
  category: string;
  subcategory: string;
}

/** The editorial article behind a recommendation. */
export interface Guide {
  /** Article H1, distinct from the bare product name. */
  heading: string;
  /** Meta description and article standfirst. */
  standfirst: string;
  /** "Why we recommend it" — the core editorial argument. */
  why: string[];
  /** "Who it's best for" bullets. */
  whoFor: string[];
  /** "What makes it a good gift" bullets. */
  whyGift: string[];
  /** Honest caveats before buying. */
  considerations: string[];
  pros: string[];
  cons: string[];
  /** Slugs of alternative products. Resolved at render time. */
  alternatives: string[];
}
