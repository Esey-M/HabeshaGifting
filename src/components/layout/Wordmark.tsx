import Link from "next/link";
import { routes } from "@/lib/site";

/** The wordmark: a coffee-bean mark plus the name, no imported logo file. */
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href={routes.home}
      className="group inline-flex items-center gap-2.5 rounded-lg"
      aria-label="HabeshaGifting — home"
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-cream transition-transform group-hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <ellipse cx="12" cy="12" rx="7" ry="9" transform="rotate(35 12 12)" />
          <path d="M8 16c3-3 5-5 8-8" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          Habesha<span className="text-brand">Gifting</span>
        </span>
        {!compact && (
          <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted">
            Gift guides &amp; ideas
          </span>
        )}
      </span>
    </Link>
  );
}
