import type { Metadata } from "next";
import { Breadcrumbs, JsonLd } from "@/components/ui/Breadcrumbs";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/content";
import { productsInCategory } from "@/lib/content";
import { graph, webPageNode } from "@/lib/schema";
import { absoluteUrl, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Gift Categories",
  description:
    "Browse every gift category on HabeshaGifting — by recipient, by occasion, cultural gifts, coffee ceremony sets and personalised pieces.",
  alternates: { canonical: routes.gifts },
  openGraph: {
    title: "All Gift Categories | HabeshaGifting",
    description:
      "Browse every gift category on HabeshaGifting — by recipient, by occasion, cultural gifts, coffee ceremony sets and personalised pieces.",
    url: routes.gifts,
  },
};

const trail = [
  { href: routes.home, label: "Home" },
  { href: routes.gifts, label: "Gifts" },
];

export default function GiftsIndexPage() {
  const jsonLd = graph(
    ...webPageNode({
      path: routes.gifts,
      name: "All Gift Categories",
      description: metadata.description as string,
      trail,
      type: "CollectionPage",
    }),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(routes.gifts)}#list`,
      name: "All Gift Categories",
      numberOfItems: categories.length,
      itemListElement: categories.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.heading,
        description: c.tagline,
        url: absoluteUrl(routes.category(c.slug)),
      })),
    },
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={jsonLd} />
      <Breadcrumbs trail={trail} schema={false} />

      <div className="mt-8">
        <SectionHeading
          as="h1"
          eyebrow="Every way in"
          title="All Gift Categories"
          description="Six main categories, each opening onto recipients, occasions or collections. Pick whichever way of thinking about the gift comes most naturally."
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <CategoryCard
            key={category.slug}
            id={`gi-${category.slug}`}
            href={routes.category(category.slug)}
            title={category.title}
            icon={category.icon}
            description={category.tagline}
            art={category.art}
            image={category.image}
            priority={i < 3}
            meta={`${category.subcategories.length} ${category.childLabel.toLowerCase()} · ${productsInCategory(category.slug).length} ideas`}
          />
        ))}
      </div>
    </div>
  );
}
