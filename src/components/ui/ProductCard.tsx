import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import type { Product } from "@/content/types";
import { getBudget } from "@/lib/content";
import { CARD_ASPECT, CARD_SIZES, cardSrc, productSrcSet } from "@/lib/images";
import { routes } from "@/lib/site";

/**
 * The recommendation card.
 *
 * Two deliberately distinct actions: "Read Full Guide" is the primary,
 * on-site path; "Buy on Amazon" is secondary and always announces that it
 * leaves the site. We never dress the affiliate link up as an add-to-cart, and
 * where no affiliate URL exists yet we say so rather than linking nowhere.
 */
export function ProductCard({ product }: { product: Product }) {
  const budget = getBudget(product.budget);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-all duration-300 hover:border-brand-200 hover:shadow-[0_12px_32px_-14px_rgba(116,5,4,0.2)]">
      <span aria-hidden="true" className="card-ribbon z-10" />
      <Link
        href={routes.guide(product.slug)}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[3/2] overflow-hidden bg-cream"
      >
        {product.image ? (
          /* eslint-disable-next-line @next/next/no-img-element -- static export, no optimizer */
          <img
            src={cardSrc(product.image)}
            srcSet={productSrcSet(product.image)}
            sizes={CARD_SIZES}
            width={CARD_ASPECT.width}
            height={CARD_ASPECT.height}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <Artwork
            seed={product.art}
            id={`pc-${product.slug}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
        {/* Warm scrim: deepest at the bottom edge, so the art sits into the card. */}
        <span aria-hidden="true" className="card-scrim" />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{product.tag}</p>

        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
          <Link
            href={routes.guide(product.slug)}
            className="transition-colors hover:text-brand focus-visible:text-brand"
          >
            {product.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.summary}</p>

        <dl className="mt-4 mb-5 space-y-1.5 text-xs">
          <div className="flex gap-1.5">
            <dt className="font-semibold uppercase tracking-wide text-muted">Best for</dt>
            <dd className="text-ink-soft">{product.bestFor}</dd>
          </div>
          {budget && (
            <div className="flex gap-1.5">
              <dt className="font-semibold uppercase tracking-wide text-muted">Budget</dt>
              <dd className="text-ink-soft">
                {budget.label}
                <span className="text-muted"> · typical range, not a live price</span>
              </dd>
            </div>
          )}
        </dl>

        {/* Two equal columns rather than a wrapping row, so the pair stays side
            by side at every card width instead of stacking on longer titles. */}
        <div className="mt-auto grid grid-cols-2 gap-2 border-t border-line-soft pt-4">
          <AmazonLink product={product} />
          <Link
            href={routes.guide(product.slug)}
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-line bg-cream px-3 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand"
          >
            Read Guide
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/**
 * The outbound affiliate action.
 *
 * Filled in the brand colour and placed first, so it reads as the primary
 * action. `rel="sponsored nofollow noopener"` is required for paid links, and
 * the visually hidden text keeps the destination explicit for screen readers
 * rather than relying on the arrow glyph alone — a filled button must not blur
 * the fact that it leaves the site.
 */
export function AmazonLink({
  product,
  size = "sm",
}: {
  product: Product;
  size?: "sm" | "lg";
}) {
  const classes =
    size === "lg"
      ? "px-6 py-3 text-base"
      : "px-3 py-2.5 text-sm";

  if (!product.affiliateUrl) {
    return (
      <span
        className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-dashed border-line text-muted ${classes}`}
        title="We have not linked a retailer for this recommendation yet."
      >
        Link coming soon
      </span>
    );
  }

  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-brand font-semibold text-cream transition-colors hover:bg-brand-800 ${classes}`}
    >
      Buy on Amazon
      <span className="sr-only">(opens Amazon in a new tab — affiliate link)</span>
      <svg
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M7 13 13 7M8 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
