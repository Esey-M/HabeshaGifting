import type { Metadata } from "next";
import Link from "next/link";
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
  const isCultural = category.slug === "ethiopian-eritrean-gifts";

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

      {isCultural && (
        <section aria-labelledby="cultural-guide-heading" className="mt-20 max-w-4xl border-t border-line pt-12">
          <p className="eyebrow">Choosing a meaningful gift</p>
          <h2 id="cultural-guide-heading" className="mt-3 font-display text-3xl font-semibold text-ink">
            How to choose an Ethiopian or Eritrean gift
          </h2>
          <div className="prose-editorial mt-6 space-y-5">
            <p>
              First, decide whether the gift should be used, displayed or kept as a personal
              reminder. A <Link href={routes.guide("traditional-clay-jebena-coffee-pot")}>clay jebena</Link>
              {" "}suits someone who already hosts coffee or wants to start. A {" "}
              <Link href={routes.guide("woven-mesob-inspired-basket")}>woven mesob-inspired basket</Link>
              {" "}is a home gift, but check its dimensions and intended use before buying.
              A personalised print or piece of jewellery needs the recipient&rsquo;s preferred
              name, language and spelling.
            </p>
            <p>
              If you are unsure which tradition or language to reference, choose something
              shared, such as a coffee gift, and ask a family member before ordering custom
              text. A design described as &ldquo;Habesha&rdquo; can be appropriate across both
              communities, but it cannot tell you whether a particular person would prefer
              Amharic, Tigrinya or no writing at all.
            </p>
          </div>

          <h3 className="mt-10 font-display text-2xl font-semibold text-ink">Common gift questions</h3>
          <dl className="mt-5 space-y-7">
            <div>
              <dt className="font-semibold text-ink">What is a useful Habesha housewarming gift?</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">
                A coffee ceremony piece can be useful if the recipient hosts coffee. Check
                whether they need a pot, tray or serving cups first; a duplicate may take up
                precious space. Start with our {" "}
                <Link href={routes.category("coffee-traditional-gifts")} className="text-brand underline-offset-4 hover:underline">coffee and traditional gifts</Link>
                {" "}collections.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">What should I check before buying a jebena as a gift?</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">
                Check the size, whether the pot is for use or display, what heat source it can
                tolerate, and how it will be packed for shipping. The {" "}
                <Link href={routes.guide("traditional-clay-jebena-coffee-pot")} className="text-brand underline-offset-4 hover:underline">clay jebena guide</Link>
                {" "}explains these trade-offs.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Is an Amharic gift right for an Eritrean recipient?</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">
                It depends on the person and the message. Do not assume a shared Habesha identity
                means the recipient wants Amharic text. Ask which language they use and verify
                any custom wording before it is printed or engraved. Browse {" "}
                <Link href={routes.subcategory(category.slug, "eritrean-inspired")} className="text-brand underline-offset-4 hover:underline">Eritrean gift ideas</Link>
                {" "}for alternatives.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">What makes a personalised cultural gift feel personal?</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">
                A name, phrase or date the recipient would choose themselves matters more than
                a generic cultural motif. For script gifts, confirm the exact characters,
                preview the layout and check the return policy before ordering. See the {" "}
                <Link href={routes.guide("amharic-family-name-print")} className="text-brand underline-offset-4 hover:underline">Amharic family name print guide</Link>.
              </dd>
            </div>
          </dl>
        </section>
      )}

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
