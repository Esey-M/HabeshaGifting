import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Artwork } from "@/components/Artwork";
import { Breadcrumbs, JsonLd } from "@/components/ui/Breadcrumbs";
import { AmazonLink, ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/content";
import {
  getBudget,
  getProduct,
  placementsOf,
  relatedProducts,
  resolveAlternatives,
} from "@/lib/content";
import { PRODUCT_HERO_SIZES, productSrcSet } from "@/lib/images";
import { absoluteUrl, routes, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const url = routes.guide(product.slug);
  return {
    title: product.guide.heading,
    description: product.guide.standfirst,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: product.guide.heading,
      description: product.guide.standfirst,
      url: absoluteUrl(url),
      publishedTime: product.updated,
      modifiedTime: product.updated,
    },
  };
}

export default async function GuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const budget = getBudget(product.budget);
  const alternatives = resolveAlternatives(product);
  const related = relatedProducts(product);
  const placements = placementsOf(product);
  const primary = placements[0];

  const trail = [
    { href: routes.home, label: "Home" },
    { href: routes.guides, label: "Gift Guides" },
    { href: routes.guide(product.slug), label: product.title },
  ];

  /**
   * Article schema, not Product schema. We hold no price, availability or
   * rating data, and a Product node without offers is both useless and an
   * invitation to fabricate. This page is editorial, so it is described as
   * editorial.
   */
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: product.guide.heading,
    description: product.guide.standfirst,
    datePublished: product.updated,
    dateModified: product.updated,
    inLanguage: "en",
    about: product.title,
    keywords: product.tags.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(routes.guide(product.slug)) },
    author: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
    publisher: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={articleLd} />
      <Breadcrumbs trail={trail} />

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div className="min-w-0">
          <header>
            <p className="eyebrow">{product.tag}</p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {product.guide.heading}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {product.guide.standfirst}
            </p>
            <p className="mt-5 text-sm text-muted">
              <span className="font-medium text-ink-soft">{product.title}</span> · Last reviewed{" "}
              <time dateTime={product.updated}>
                {new Date(product.updated).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>
          </header>

          <figure className="mt-9 overflow-hidden rounded-card border border-line">
            {product.image ? (
              /* eslint-disable-next-line @next/next/no-img-element -- static export, no optimizer */
              <img
                src={`${product.image}-1200.webp`}
                srcSet={productSrcSet(product.image)}
                sizes={PRODUCT_HERO_SIZES}
                width={1600}
                height={1067}
                alt={`Illustration of the ${product.title.toLowerCase()}`}
                className="aspect-[3/2] w-full bg-cream object-cover"
              />
            ) : (
              <Artwork
                seed={product.art}
                id={`guide-${product.slug}`}
                scale="feature"
                className="aspect-[3/2] w-full object-cover"
              />
            )}
            {/*
              The caption has to match what the image actually is. A generated
              pattern represents the category; a commissioned illustration
              depicts this specific product and must say it is an interpretation
              rather than a photograph, since it sits beside a Buy button.
            */}
            <figcaption className="border-t border-line bg-cream px-5 py-3 text-xs text-muted">
              {product.image
                ? "Illustration of the recommended product — an artist's interpretation, not a photograph. Check the retailer's listing for exact appearance, finish and colour options."
                : "Illustrative artwork. We do not publish retailer product photography, so images on this site represent the category rather than a specific listing."}
            </figcaption>
          </figure>

          <div className="prose-editorial mt-12 max-w-none">
            <Section title="Why we recommend it">
              {product.guide.why.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Section>

            <Section title="Who it's best for">
              <BulletList items={product.guide.whoFor} />
            </Section>

            <Section title="What makes it a good gift">
              <BulletList items={product.guide.whyGift} />
            </Section>

            <Section title="Important considerations">
              <p className="text-ink-soft">
                The things worth checking before you order — this is where gifts like this most
                often go wrong.
              </p>
              <BulletList items={product.guide.considerations} />
            </Section>

            <section className="mt-12 scroll-mt-24" aria-labelledby="pros-cons">
              <h2 id="pros-cons" className="font-display text-2xl font-semibold text-ink">
                Pros and cons
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="rounded-card border border-line bg-paper p-5">
                  <h3 className="font-display text-base font-semibold text-ink">Pros</h3>
                  <ul className="mt-3 space-y-2.5">
                    {product.guide.pros.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-ink-soft">
                        <span aria-hidden="true" className="mt-0.5 font-bold text-brand">
                          +
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-card border border-line bg-cream/60 p-5">
                  <h3 className="font-display text-base font-semibold text-ink">Cons</h3>
                  <ul className="mt-3 space-y-2.5">
                    {product.guide.cons.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-ink-soft">
                        <span aria-hidden="true" className="mt-0.5 font-bold text-muted">
                          −
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {alternatives.length > 0 && (
            <section className="mt-16" aria-labelledby="alternatives-heading">
              <h2 id="alternatives-heading" className="font-display text-2xl font-semibold text-ink">
                Alternatives to consider
              </h2>
              <p className="mt-2 text-ink-soft">
                If this is not quite right, these solve a similar problem differently.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {alternatives.map((alt) => (
                  <ProductCard key={alt.slug} product={alt} />
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 rounded-card border border-brand-200 bg-brand-50 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">
              Ready to buy the {product.title.toLowerCase()}?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              Check current price, availability and seller reviews on the retailer&rsquo;s page —
              we do not reproduce those here because they change constantly.
            </p>
            <div className="mt-6">
              <AmazonLink product={product} size="lg" />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              This is an affiliate link. If you buy through it we may earn a commission at no
              additional cost to you, and it does not affect what we recommend or what we say
              about it.{" "}
              <Link href={routes.disclosure} className="font-medium text-brand hover:underline">
                Our affiliate disclosure
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-card border border-line bg-cream p-5">
            <h2 className="font-display text-base font-semibold text-ink">At a glance</h2>
            <dl className="mt-4 space-y-3.5 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Best for</dt>
                <dd className="mt-0.5 text-ink-soft">{product.bestFor}</dd>
              </div>
              {budget && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Typical budget
                  </dt>
                  <dd className="mt-0.5 text-ink-soft">{budget.label}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Category</dt>
                <dd className="mt-0.5 text-ink-soft">{product.tag}</dd>
              </div>
            </dl>
            <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-muted">
              We do not display prices, ratings or stock levels. Those belong on the
              retailer&rsquo;s page, where they are actually current.
            </p>
            <div className="mt-4">
              <AmazonLink product={product} />
            </div>
          </div>

          {placements.length > 0 && (
            <nav aria-labelledby="found-in" className="mt-6 rounded-card border border-line p-5">
              <h2 id="found-in" className="font-display text-base font-semibold text-ink">
                Found in
              </h2>
              <ul className="mt-3 space-y-2">
                {placements.map(({ category, subcategory }) => (
                  <li key={`${category.slug}-${subcategory.slug}`}>
                    <Link
                      href={routes.subcategory(category.slug, subcategory.slug)}
                      className="text-sm text-ink-soft transition-colors hover:text-brand"
                    >
                      {subcategory.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {primary && (
            <div className="mt-6 rounded-card border border-line p-5">
              <p className="eyebrow">Keep browsing</p>
              <Link
                href={routes.category(primary.category.slug)}
                className="mt-2 inline-flex font-display text-base font-semibold text-ink transition-colors hover:text-brand"
              >
                All {primary.category.title.toLowerCase()} →
              </Link>
            </div>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-line pt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-display text-2xl font-semibold text-ink">
            Related gift guides
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <section className="mt-12 scroll-mt-24" aria-labelledby={id}>
      <h2 id={id} className="font-display text-2xl font-semibold text-ink">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}
