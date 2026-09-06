import type { Metadata } from "next";
import { Breadcrumbs, JsonLd } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allGuides } from "@/lib/content";
import { absoluteUrl, routes } from "@/lib/site";

const description =
  "Every gift guide on HabeshaGifting — what each gift suits, what to check before you order, and where it falls short.";

export const metadata: Metadata = {
  title: "All Gift Guides",
  description,
  alternates: { canonical: routes.guides },
  openGraph: { title: "All Gift Guides | HabeshaGifting", description, url: routes.guides },
};

export default function GuidesIndexPage() {
  const guides = allGuides();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Gift Guides",
    description,
    url: absoluteUrl(routes.guides),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: guides.length,
      itemListElement: guides.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.guide.heading,
        url: absoluteUrl(routes.guide(p.slug)),
      })),
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        trail={[
          { href: routes.home, label: "Home" },
          { href: routes.guides, label: "Gift Guides" },
        ]}
      />

      <div className="mt-8">
        <SectionHeading
          as="h1"
          eyebrow={`${guides.length} guides`}
          title="All Gift Guides"
          description={description}
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
