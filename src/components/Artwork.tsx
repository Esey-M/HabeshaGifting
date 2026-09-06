import type { ArtSeed, Motif } from "@/content/types";

/**
 * Generated artwork.
 *
 * We deliberately do not ship stock photography or product images we do not
 * have rights to, and we will not present a generic photo as if it were the
 * recommended product. Instead every card draws a deterministic SVG from its
 * `ArtSeed`, so imagery is consistent, weightless, and honest about being
 * illustrative. Real product photography can replace this per-item later
 * without touching any layout.
 */

interface ArtworkProps {
  seed: ArtSeed;
  /** Stable unique string (usually a slug) — SVG gradient ids must not collide. */
  id: string;
  className?: string;
  /** Larger motif strokes for hero-scale surfaces. */
  scale?: "card" | "feature";
}

export function Artwork({ seed, id, className, scale = "card" }: ArtworkProps) {
  const gradientId = `art-grad-${id}`;
  const patternId = `art-weave-${id}`;
  const { hue } = seed;
  const strokeWidth = scale === "feature" ? 2.4 : 1.6;

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 34% 93%)`} />
          <stop offset="55%" stopColor={`hsl(${hue} 26% 86%)`} />
          <stop offset="100%" stopColor={`hsl(${hue} 30% 76%)`} />
        </linearGradient>
        <pattern id={patternId} width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M0 16 L16 0 M-4 4 L4 -4 M12 20 L20 12"
            stroke={`hsl(${hue} 30% 62%)`}
            strokeWidth="0.75"
            fill="none"
            opacity="0.35"
          />
        </pattern>
      </defs>

      <rect width="400" height="300" fill={`url(#${gradientId})`} />
      <rect width="400" height="300" fill={`url(#${patternId})`} opacity="0.5" />

      <g
        stroke={`hsl(${hue} 42% 34%)`}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.62"
      >
        <Motifs motif={seed.motif} />
      </g>

      {/* Tibeb-inspired band: a restrained nod to woven borders, not a costume. */}
      <g opacity="0.5">
        <rect y="278" width="400" height="22" fill={`hsl(${hue} 38% 30%)`} opacity="0.12" />
        <path
          d="M0 289 L10 281 L20 289 L30 281 L40 289 L50 281 L60 289 L70 281 L80 289 L90 281 L100 289 L110 281 L120 289 L130 281 L140 289 L150 281 L160 289 L170 281 L180 289 L190 281 L200 289 L210 281 L220 289 L230 281 L240 289 L250 281 L260 289 L270 281 L280 289 L290 281 L300 289 L310 281 L320 289 L330 281 L340 289 L350 281 L360 289 L370 281 L380 289 L390 281 L400 289"
          stroke={`hsl(${hue} 45% 32%)`}
          strokeWidth="1.2"
          fill="none"
        />
      </g>
    </svg>
  );
}

/** Motif geometry. Each is a light abstraction, never a literal illustration. */
function Motifs({ motif }: { motif: Motif }) {
  switch (motif) {
    case "vessel":
      // Jebena silhouette: round belly, long neck, spout.
      return (
        <>
          <path d="M200 236c-32 0-54-22-54-50 0-26 20-44 40-52" />
          <path d="M200 236c32 0 54-22 54-50 0-26-20-44-40-52" />
          <path d="M186 134l6-52h16l6 52" />
          <path d="M192 82c0-8 6-14 8-18 2 4 8 10 8 18" />
          <path d="M246 168c14 6 22 14 24 22" />
          <ellipse cx="200" cy="236" rx="40" ry="7" />
        </>
      );
    case "arch":
      // Nested arches, in the register of Axumite and rock-hewn openings.
      return (
        <>
          <path d="M120 240V150a80 80 0 0 1 160 0v90" />
          <path d="M148 240v-88a52 52 0 0 1 104 0v88" />
          <path d="M176 240v-84a24 24 0 0 1 48 0v84" />
          <path d="M96 240h208" />
        </>
      );
    case "cross":
      // Interlaced geometry echoing the woven Ethiopian cross form.
      return (
        <>
          <path d="M200 68v168M116 152h168" />
          <rect x="170" y="122" width="60" height="60" transform="rotate(45 200 152)" />
          <path d="M200 92c-16 12-16 36 0 48 16-12 16-36 0-48Z" />
          <path d="M200 212c16-12 16-36 0-48-16 12-16 36 0 48Z" />
          <path d="M140 152c12-16 36-16 48 0-12 16-36 16-48 0Z" />
          <path d="M260 152c-12-16-36-16-48 0 12 16 36 16 48 0Z" />
        </>
      );
    case "rays":
      // Radiating lines: celebration, and the fan used over roasting coffee.
      return (
        <>
          <path d="M200 240V96M200 240l-72-104M200 240l72-104M200 240l-108-72M200 240l108-72" />
          <circle cx="200" cy="240" r="12" />
          <path d="M92 240h216" />
        </>
      );
    case "basket":
      // Coiled straw, as on a mesob or agelgil.
      return (
        <>
          <path d="M112 240a88 60 0 0 1 176 0" />
          <path d="M132 240a68 46 0 0 1 136 0" />
          <path d="M152 240a48 32 0 0 1 96 0" />
          <path d="M172 240a28 18 0 0 1 56 0" />
          <path d="M100 240h200" />
          <path d="M200 240V124M200 124l-30 22M200 124l30 22" />
        </>
      );
    case "weave":
    default:
      // Warp and weft, the base of every tibeb border.
      return (
        <>
          <path d="M110 110h180v120H110z" />
          <path d="M110 150h180M110 190h180M150 110v120M190 110v120M230 110v120M250 110v120" />
          <path d="M110 110l40 40M150 110l40 40M190 110l40 40M230 110l40 40" opacity="0.6" />
        </>
      );
  }
}
