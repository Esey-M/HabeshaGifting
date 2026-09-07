import Link from "next/link";
import { routes } from "@/lib/site";

/** The wordmark: a wrapped-present mark plus the name, no imported logo file. */
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
        <svg
          viewBox="0 0 24 24"
          className="h-[1.15rem] w-[1.15rem]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* A wrapped present: lid, box, ribbon and bow. */}
          <rect x="3.2" y="8.4" width="17.6" height="4" rx="1" />
          <rect x="4.8" y="12.4" width="14.4" height="8.4" rx="1" />
          <path d="M12 8.4v12.4" />
          <path d="M12 8.4C10.1 5.1 6.2 5.2 7.2 7.4c.8 1.7 3.2 1.2 4.8 1z" />
          <path d="M12 8.4c1.9-3.3 5.8-3.2 4.8-1-.8 1.7-3.2 1.2-4.8 1z" />
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
