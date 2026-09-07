/**
 * Gifting decor.
 *
 * Flat editorial illustration in the site palette — wrapped boxes, ribbons and
 * bows — so the pages read as a gifting site rather than a generic blog. Every
 * piece here is purely decorative: it is aria-hidden, carries no text, and can
 * be removed without changing what any page means.
 */

/** Stacked presents used as the homepage hero illustration. */
export function GiftStack({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 380"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="gift-stack-glow" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#fdf5f4" />
          <stop offset="100%" stopColor="#f3cbc7" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <circle cx="214" cy="196" r="164" fill="url(#gift-stack-glow)" />

      <g stroke="#5c0403" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        {/* Medium box, right */}
        <g>
          <rect x="248" y="212" width="118" height="110" rx="4" fill="#ece5d9" />
          <rect x="238" y="190" width="138" height="26" rx="4" fill="#ddd0b8" />
          <path d="M307 190v132" stroke="#a8781f" strokeWidth="9" />
          <path d="M307 190v132" strokeWidth="1.4" opacity="0.35" />
          <path d="M307 190c-11-19-33-17-28-4 3.9 10.2 19 7.3 28 4z" fill="#c08a2e" />
          <path d="M307 190c11-19 33-17 28-4-3.9 10.2-19 7.3-28 4z" fill="#c08a2e" />
          <circle cx="307" cy="190" r="4.5" fill="#a8781f" />
        </g>

        {/* Large box, centre */}
        <g>
          <rect x="58" y="176" width="176" height="146" rx="5" fill="#f3cbc7" />
          <rect x="46" y="150" width="200" height="30" rx="5" fill="#e7a29c" />
          {/* Tibeb band: geometric diamonds, the site's recurring motif */}
          <g stroke="#8f1f18" strokeWidth="1.8" fill="none" opacity="0.6">
            <path d="M74 262l11 11-11 11-11-11z" />
            <path d="M104 262l11 11-11 11-11-11z" />
            <path d="M188 262l11 11-11 11-11-11z" />
            <path d="M218 262l11 11-11 11-11-11z" />
          </g>
          <path d="M146 150v172" stroke="#740504" strokeWidth="14" />
          <path d="M146 150v172" strokeWidth="1.4" opacity="0.3" />
          <path d="M146 150c-14-24-42-22-36-5 5 13.5 24 9.5 36 5z" fill="#8f1f18" />
          <path d="M146 150c14-24 42-22 36-5-5 13.5-24 9.5-36 5z" fill="#8f1f18" />
          <circle cx="146" cy="150" r="6" fill="#5c0403" />
        </g>

        {/* Small box, top */}
        <g>
          <rect x="96" y="76" width="102" height="74" rx="4" fill="#b03d34" />
          <rect x="86" y="56" width="122" height="22" rx="4" fill="#8f1f18" />
          <path d="M147 56v94" stroke="#f5f0e8" strokeWidth="8" />
          <path d="M147 56c-10-17-30-15-25.5-3.6 3.5 9 17 6.4 25.5 3.6z" fill="#f5f0e8" />
          <path d="M147 56c10-17 30-15 25.5-3.6-3.5 9-17 6.4-25.5 3.6z" fill="#f5f0e8" />
          <circle cx="147" cy="56" r="4" fill="#f5f0e8" />
        </g>

        {/* Ground line */}
        <path d="M30 322h360" strokeWidth="2" opacity="0.28" />
      </g>

      {/* Sparkle and confetti */}
      <g fill="#b03d34" opacity="0.8">
        <path d="M356 96c2.4 10.6 5.4 13.6 16 16-10.6 2.4-13.6 5.4-16 16-2.4-10.6-5.4-13.6-16-16 10.6-2.4 13.6-5.4 16-16z" />
        <path d="M52 108c1.6 7 3.6 9 10.6 10.6-7 1.6-9 3.6-10.6 10.6-1.6-7-3.6-9-10.6-10.6 7-1.6 9-3.6 10.6-10.6z" />
        <circle cx="384" cy="176" r="4" />
        <circle cx="34" cy="200" r="3.4" />
        <circle cx="256" cy="72" r="3.4" />
        <circle cx="238" cy="126" r="2.6" />
      </g>
    </svg>
  );
}

/** Small bow used inline beside section eyebrows and in the footer. */
export function BowMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 22"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 9c-6-8-15-6-13 0 1.9 5.6 9 3.6 13 0z" />
      <path d="M16 9c6-8 15-6 13 0-1.9 5.6-9 3.6-13 0z" />
      <path d="M13 11.5c-2 5-3.4 7-6 9.4M19 11.5c2 5 3.4 7 6 9.4" />
      <circle cx="16" cy="9" r="2" />
    </svg>
  );
}

/** Full-width ribbon rule with a bow at its centre, used between sections. */
export function RibbonDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-brand-300 ${className ?? ""}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-200" />
      <BowMark className="h-5 w-7 text-brand-400" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-200" />
    </div>
  );
}
