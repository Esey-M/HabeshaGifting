import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, JsonLd } from "@/components/ui/Breadcrumbs";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allCategoryPaths, countIn, getCategory } from "@/lib/content";
import { OG_DEFAULT, ogImageMeta } from "@/lib/og";
import { graph, webPageNode } from "@/lib/schema";
import { absoluteUrl, assetUrl, routes } from "@/lib/site";

/** Static export: the full set of category routes is known at build time. */
export const dynamicParams = false;

export function generateStaticParams() {
  return allCategoryPaths();
}

type Params = Promise<{ category: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const url = routes.category(category.slug);
  const image = category.image ? `${category.image}-1200.webp` : OG_DEFAULT;
  const images = ogImageMeta(image, category.heading);

  return {
    title: category.heading,
    description: category.tagline,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${category.heading} | HabeshaGifting`,
      description: category.tagline,
      url: absoluteUrl(url),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.heading} | HabeshaGifting`,
      description: category.tagline,
      images: [images[0]?.url ?? assetUrl(OG_DEFAULT)],
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const trail = [
    { href: routes.home, label: "Home" },
    { href: routes.gifts, label: "Gifts" },
    { href: routes.category(category.slug), label: category.title },
  ];

  const path = routes.category(category.slug);

  const jsonLd = graph(
    ...webPageNode({
      path,
      name: category.heading,
      description: category.intro,
      image: category.image ? assetUrl(`${category.image}-1200.webp`) : undefined,
      trail,
      type: "CollectionPage",
    }),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(path)}#list`,
      name: category.heading,
      description: category.tagline,
      numberOfItems: category.subcategories.length,
      itemListElement: category.subcategories.map((sub, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: sub.heading,
        description: sub.tagline,
        url: absoluteUrl(routes.subcategory(category.slug, sub.slug)),
      })),
    },
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={jsonLd} />
      <Breadcrumbs trail={trail} schema={false} />

      <header className="mt-8 max-w-2xl">
        <p className="eyebrow">
          <span aria-hidden="true">{category.icon}</span> {category.childLabel}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
          {category.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{category.intro}</p>
      </header>

      <section aria-labelledby="children-heading" className="mt-14">
        <h2 id="children-heading" className="sr-only">
          Browse by {category.childLabel.toLowerCase()}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.subcategories.map((sub, i) => {
            const count = countIn(category.slug, sub.slug);
            return (
              <CategoryCard
                key={sub.slug}
                id={`sub-${category.slug}-${sub.slug}`}
                href={routes.subcategory(category.slug, sub.slug)}
                title={sub.title}
                icon={sub.icon}
                description={sub.tagline}
                art={sub.art}
                image={sub.image}
                priority={i < 3}
                meta={count > 0 ? `${count} ${count === 1 ? "guide" : "guides"}` : "Guides coming soon"}
              />
            );
          })}
        </div>
      </section>

      <section className="gift-panel mt-20 overflow-hidden rounded-card border border-line bg-cream p-8 sm:p-10">
        <SectionHeading
          eyebrow="Not sure where to start?"
          title="Browse every guide instead"
          description="If you would rather scan all our recommendations at once, the full guide index lists everything we have written, newest first."
        />
        <a
          href={routes.guides}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-800"
        >
          All gift guides <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
