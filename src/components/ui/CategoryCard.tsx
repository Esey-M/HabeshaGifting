import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import type { ArtSeed } from "@/content/types";
import { CARD_ASPECT, CARD_SIZES, cardSrc, cardSrcSet } from "@/lib/images";

interface CategoryCardProps {
  href: string;
  title: string;
  icon: string;
  description: string;
  art: ArtSeed;
  /** Stable id for SVG gradient uniqueness. */
  id: string;
  /** e.g. "9 recipients" or "6 guides". Omitted when there is nothing to say. */
  meta?: string;
  size?: "default" | "large";
  /**
   * Base path for the illustration. Categories without one fall back to the
   * generated SVG, so a partially illustrated catalogue still renders cleanly.
   */
  image?: string;
  /** Skip lazy-loading for above-the-fold cards so the LCP image is not deferred. */
  priority?: boolean;
}

/**
 * The whole card is one link. The visible affordance ("Explore") is decorative
 * so there is a single tab stop and a single accessible name per card.
 */
export function CategoryCard({
  href,
  title,
  icon,
  description,
  art,
  id,
  meta,
  size = "default",
  image,
  priority = false,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(116,5,4,0.22)]"
    >
      <span aria-hidden="true" className="card-ribbon z-10" />
      <div className={`relative overflow-hidden bg-cream ${size === "large" ? "aspect-[16/10]" : "aspect-[3/2]"}`}>
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element -- static export ships
             no image optimizer, so the pre-generated variants are referenced directly. */
          <img
            src={cardSrc(image)}
            srcSet={cardSrcSet(image)}
            sizes={CARD_SIZES}
            width={CARD_ASPECT.width}
            height={CARD_ASPECT.height}
            /* Decorative: the card's own heading already names the destination,
               so alt text here would only repeat the link's accessible name. */
            alt=""
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <Artwork
            seed={art}
            id={id}
            scale={size === "large" ? "feature" : "card"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
        {/* Warm scrim: deepest at the bottom edge, so the art sits into the card. */}
        <span aria-hidden="true" className="card-scrim" />
        <span
          aria-hidden="true"
          className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-paper/90 text-xl shadow-sm backdrop-blur-sm"
        >
          {icon}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {meta && <p className="eyebrow">{meta}</p>}
        <h3
          className={`mt-1.5 font-display font-semibold text-ink transition-colors group-hover:text-brand ${
            size === "large" ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>

        <span
          aria-hidden="true"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
        >
          Explore
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
