import type { Metadata } from "next";
import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { JsonLd } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/content";
import { allGuides, productsInCategory } from "@/lib/content";
import { absoluteUrl, routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = allGuides().slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: absoluteUrl("/"),
        name: site.name,
        description: site.description,
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${site.url}/search/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: absoluteUrl("/"),
        description: site.description,
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-40 lg:block"
        >
          <Artwork seed={{ hue: 20, motif: "weave" }} id="hero" scale="feature" className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow">Gift guides for the Habesha community</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Thoughtful Gifts for the Habesha in Your Life
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Discover meaningful gift ideas for Habesha family, friends and every special
              occasion.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#find-the-perfect-gift"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-brand-800"
              >
                Explore Gift Ideas
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={routes.guides}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-6 py-3.5 text-base font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand"
              >
                Read the guides
              </Link>
            </div>

            <p className="mt-8 max-w-md text-sm text-muted">
              Independent recommendations with honest trade-offs. We explain what to check
              before you buy — not just what to click.
            </p>
          </div>
        </div>
      </section>

      {/* Find the Perfect Gift */}
      <section
        id="find-the-perfect-gift"
        aria-labelledby="find-heading"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24"
      >
        <SectionHeading
          eyebrow="Start here"
          title="Find the Perfect Gift"
          description="Six ways in. Start with the person, the occasion, or the kind of gift you have in mind — every path leads to real recommendations and the reasoning behind them."
        />
        <h2 id="find-heading" className="sr-only">
          Find the perfect gift
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.slug}
              id={`cat-${category.slug}`}
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
      </section>

      {/* Featured guides */}
      <section
        aria-labelledby="featured-heading"
        className="border-y border-line bg-cream/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Latest"
              title="Recently published guides"
              description="Each guide covers who a gift suits, what to check before ordering, and where it falls short."
            />
            <Link
              href={routes.guides}
              className="text-sm font-semibold text-brand transition-colors hover:text-brand-800"
            >
              All gift guides →
            </Link>
          </div>
          <h2 id="featured-heading" className="sr-only">
            Recently published guides
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="How this site works"
          title="Recommendations you can check our reasoning on"
          description="We are an independent editorial site, not a shop. Here is exactly what that means."
        />
        <h2 id="how-heading" className="sr-only">
          How this site works
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "We explain the trade-offs",
              body: "Every guide has a considerations section and a genuine list of cons. If a gift is easy to get wrong — sizing, spelling, shipping — we say so up front.",
            },
            {
              title: "No invented prices or ratings",
              body: "We show a budget band we stand behind, never a scraped price or a star rating. Live prices and availability belong on the retailer's page, so that is where we send you.",
            },
            {
              title: "Affiliate links, clearly marked",
              body: "We may earn a commission when you buy through our links, at no extra cost to you. Buttons that leave the site always say where they go.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-card border border-line bg-paper p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
