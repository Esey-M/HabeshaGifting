import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, JsonLd } from "@/components/ui/Breadcrumbs";
import { FilterableProducts } from "@/components/ui/FilterableProducts";
import { allSubcategoryPaths, budgetsPresent, getSubcategory, productsIn } from "@/lib/content";
import { OG_DEFAULT, ogImageMeta } from "@/lib/og";
import { graph, webPageNode } from "@/lib/schema";
import { absoluteUrl, assetUrl, routes } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allSubcategoryPaths();
}

type Params = Promise<{ category: string; subcategory: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category: categorySlug, subcategory: subSlug } = await params;
  const found = getSubcategory(categorySlug, subSlug);
  if (!found) return {};

  const { subcategory } = found;
  const url = routes.subcategory(categorySlug, subSlug);
  const description = `${subcategory.tagline} Honest gift guides with what to check before you buy.`;

  const image = subcategory.image ? `${subcategory.image}-1200.webp` : OG_DEFAULT;
  const images = ogImageMeta(image, subcategory.heading);

  return {
    title: subcategory.heading,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${subcategory.heading} | HabeshaGifting`,
      description,
      url: absoluteUrl(url),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${subcategory.heading} | HabeshaGifting`,
      description,
      images: [images[0]?.url ?? assetUrl(OG_DEFAULT)],
    },
  };
}

export default async function SubcategoryPage({ params }: { params: Params }) {
  const { category: categorySlug, subcategory: subSlug } = await params;
  const found = getSubcategory(categorySlug, subSlug);
  if (!found) notFound();

  const { category, subcategory } = found;
  const items = productsIn(category.slug, subcategory.slug);
  const bands = budgetsPresent(items);

  const trail = [
    { href: routes.home, label: "Home" },
    { href: routes.gifts, label: "Gifts" },
    { href: routes.category(category.slug), label: category.title },
    { href: routes.subcategory(category.slug, subcategory.slug), label: subcategory.title },
  ];

  const path = routes.subcategory(category.slug, subcategory.slug);

  /**
   * The listing itself is the entity here: an ordered set of recommendations,
   * each pointing at the guide that argues for it. Descriptions are carried on
   * the list items so an answer engine can summarise the page without having to
   * fetch every guide behind it.
   */
  const jsonLd = graph(
    ...webPageNode({
      path,
      name: subcategory.heading,
      description: subcategory.intro,
      image: subcategory.image ? assetUrl(`${subcategory.image}-1200.webp`) : undefined,
      trail,
      type: "CollectionPage",
    }),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(path)}#list`,
      name: subcategory.heading,
      description: subcategory.tagline,
      numberOfItems: items.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: items.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        description: p.summary,
        url: absoluteUrl(routes.guide(p.slug)),
      })),
    },
  );

  // Sibling links keep the internal linking graph dense without a tag soup.
  const siblings = category.subcategories.filter((s) => s.slug !== subcategory.slug).slice(0, 8);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={jsonLd} />
      <Breadcrumbs trail={trail} schema={false} />

      <header className="mt-8 max-w-2xl">
        <p className="eyebrow">
          <span aria-hidden="true">{subcategory.icon}</span> {category.title}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
          {subcategory.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{subcategory.intro}</p>
        {items.length > 0 && (
          <p className="mt-4 text-sm text-muted">
            {items.length} {items.length === 1 ? "recommendation" : "recommendations"}, each with a
            full guide covering who it suits and what to check before ordering.
          </p>
        )}
      </header>

      <section aria-labelledby="recs-heading" className="mt-12">
        <h2 id="recs-heading" className="sr-only">
          Recommendations
        </h2>
        <FilterableProducts products={items} budgets={bands} />
      </section>

      {siblings.length > 0 && (
        <nav aria-labelledby="siblings-heading" className="mt-20 border-t border-line pt-10">
          <h2 id="siblings-heading" className="font-display text-xl font-semibold text-ink">
            More in {category.title}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link
                  href={routes.subcategory(category.slug, s.slug)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft transition-colors hover:border-brand-200 hover:text-brand"
                >
                  <span aria-hidden="true">{s.icon}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
