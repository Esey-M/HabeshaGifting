/**
 * Responsive card artwork.
 *
 * The site is statically exported with no image optimizer, so the variants are
 * generated at build-prep time and referenced directly. Each `image` base in
 * the content model has three widths on disk.
 */

export const CARD_WIDTHS = [480, 800, 1200] as const;

/** Default src — the middle width, so non-srcset clients get something sane. */
export function cardSrc(base: string): string {
  return `${base}-800.webp`;
}

export function cardSrcSet(base: string): string {
  return CARD_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
}

/**
 * Cards sit in a max-w-6xl grid: one column on mobile, two from `sm`, three
 * from `lg` where each column settles at roughly 352px.
 */
export const CARD_SIZES = "(min-width: 1024px) 352px, (min-width: 640px) 50vw, calc(100vw - 2rem)";

/** Intrinsic ratio of every generated variant, used to reserve layout space. */
export const CARD_ASPECT = { width: 1200, height: 800 } as const;
