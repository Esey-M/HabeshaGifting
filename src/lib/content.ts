import { budgets, categories, products } from "@/content";
import type { BudgetBand, Category, Product, Subcategory } from "@/content/types";

/** Every route in the site resolves through one of these lookups. */

const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));

const productBySlug = new Map(products.map((p) => [p.slug, p]));

export function getCategory(slug: string): Category | undefined {
  return categoryBySlug.get(slug);
}

export function getSubcategory(
  categorySlug: string,
  subcategorySlug: string,
): { category: Category; subcategory: Subcategory } | undefined {
  const category = categoryBySlug.get(categorySlug);
  const subcategory = category?.subcategories.find((s) => s.slug === subcategorySlug);
  if (!category || !subcategory) return undefined;
  return { category, subcategory };
}

export function getProduct(slug: string): Product | undefined {
  return productBySlug.get(slug);
}

export function getBudget(id: BudgetBand) {
  return budgets.find((b) => b.id === id);
}

/** Products placed in a given subcategory listing. */
export function productsIn(categorySlug: string, subcategorySlug: string): Product[] {
  return products.filter((p) =>
    p.placements.some((pl) => pl.category === categorySlug && pl.subcategory === subcategorySlug),
  );
}

/** Products appearing anywhere under a category, deduplicated. */
export function productsInCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.placements.some((pl) => pl.category === categorySlug));
}

/** How many recommendations sit behind a subcategory card. */
export function countIn(categorySlug: string, subcategorySlug: string): number {
  return productsIn(categorySlug, subcategorySlug).length;
}

export function resolveAlternatives(product: Product): Product[] {
  return product.guide.alternatives
    .map((slug) => productBySlug.get(slug))
    .filter((p): p is Product => Boolean(p) && p !== product);
}

/**
 * Related products by shared placement, then shared tags, excluding the
 * product itself and anything already listed as an alternative.
 */
export function relatedProducts(product: Product, limit = 3): Product[] {
  const exclude = new Set([product.slug, ...product.guide.alternatives]);
  const scored = products
    .filter((p) => !exclude.has(p.slug))
    .map((p) => {
      const sharedPlacements = p.placements.filter((pl) =>
        product.placements.some(
          (own) => own.category === pl.category && own.subcategory === pl.subcategory,
        ),
      ).length;
      const sharedTags = p.tags.filter((t) => product.tags.includes(t)).length;
      return { product: p, score: sharedPlacements * 3 + sharedTags };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.product.title.localeCompare(b.product.title));

  return scored.slice(0, limit).map((entry) => entry.product);
}

/** Subcategories a product appears in, for cross-linking from a guide. */
export function placementsOf(product: Product) {
  return product.placements
    .map((pl) => {
      const category = categoryBySlug.get(pl.category);
      const subcategory = category?.subcategories.find((s) => s.slug === pl.subcategory);
      if (!category || !subcategory) return null;
      return { category, subcategory };
    })
    .filter((entry): entry is { category: Category; subcategory: Subcategory } => entry !== null);
}

/** Ordered budget bands actually present in a set of products. */
export function budgetsPresent(list: Product[]) {
  const present = new Set(list.map((p) => p.budget));
  return budgets.filter((b) => present.has(b.id));
}

/** Every guide, newest first — used by the guides index and the sitemap. */
export function allGuides(): Product[] {
  return [...products].sort((a, b) => b.updated.localeCompare(a.updated));
}

export function allCategoryPaths() {
  return categories.map((c) => ({ category: c.slug }));
}

export function allSubcategoryPaths() {
  return categories.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug })),
  );
}
