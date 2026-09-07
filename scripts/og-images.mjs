#!/usr/bin/env node
/**
 * Social card and brand icon generation.
 *
 * The site is a static export with no image optimizer and no edge runtime, so
 * Open Graph cards cannot be rendered on request. They are generated here and
 * committed, exactly as the site artwork is, which also keeps the CI build free
 * of any font dependency.
 *
 * Guide titles are read from the built HTML in out/ rather than from the
 * TypeScript content model, because this runs on Node 20 where a .ts import is
 * not available. Run a build first:
 *
 *   npm run build && npm run og
 *
 *   --dry   report what would be written without writing it
 */
import sharp from "sharp";
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "out");
const PUBLIC = path.join(ROOT, "public");
const DRY = process.argv.includes("--dry");

const W = 1200;
const H = 630;

/** Straight from globals.css — the card has to look like the site. */
const BRAND = "#740504";
const BRAND_SOFT = "#b03d34";
const PAPER = "#fbf9f6";
const CREAM = "#f5f0e8";
const INK = "#1c1917";
const INK_SOFT = "#44403c";

/**
 * Georgia stands in for Playfair Display, which next/font self-hosts as woff2
 * inside .next and which librsvg cannot load by path. Both are high-contrast
 * serifs at card sizes, and the alternative — no serif at all — reads as a
 * different brand.
 */
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Helvetica, Arial, sans-serif";

/* ------------------------------------------------------------------ text -- */

/** Rough advance width per character, as a fraction of the font size. */
function charWidth(ch) {
  if ("ijlt.,;:'!|".includes(ch)) return 0.30;
  if ("fr()[]-".includes(ch)) return 0.38;
  if ("mwMW—".includes(ch)) return 0.88;
  if (ch === " ") return 0.26;
  if (ch >= "A" && ch <= "Z") return 0.68;
  return 0.51;
}

function measure(text, size) {
  let total = 0;
  for (const ch of text) total += charWidth(ch);
  return total * size;
}

/** Greedy wrap to a pixel width. Returns the lines. */
function wrap(text, size, maxWidth) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate, size) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * Largest size from `sizes` whose wrap fits in `maxLines`, so a short title
 * gets set large and a long one shrinks rather than overflowing the card.
 */
function fit(text, sizes, maxWidth, maxLines) {
  for (const size of sizes) {
    const lines = wrap(text, size, maxWidth);
    if (lines.length <= maxLines) return { size, lines };
  }
  const size = sizes[sizes.length - 1];
  return { size, lines: wrap(text, size, maxWidth).slice(0, maxLines) };
}

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
const escapeXml = (s) => s.replace(/[&<>"]/g, (c) => ESCAPES[c]);

/** Decode the entities Next writes into the built HTML. */
function decodeHtml(s) {
  return s
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

/* ---------------------------------------------------------------- pieces -- */

/** The wordmark's wrapped present, drawn at an arbitrary size and colour. */
function bowMark(x, y, size, stroke) {
  const s = size / 32;
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke="${stroke}"
      stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round">
      <rect x="5.5" y="12.5" width="21" height="4.6" rx="1.2"/>
      <rect x="7.4" y="17.1" width="17.2" height="8.6" rx="1.2"/>
      <path d="M16 12.5v13.2"/>
      <path d="M16 12.5C13.7 8.6 9 8.8 10.2 11.4c1 2 3.9 1.4 5.8 1.1z"/>
      <path d="M16 12.5c2.3-3.9 7-3.7 5.8-1.1-1 2-3.9 1.4-5.8 1.1z"/>
    </g>`;
}

/** The site's footer lockup, bottom-left on every card. */
function wordmark(x, y) {
  return `${bowMark(x, y - 30, 38, BRAND)}
    <text x="${x + 52}" y="${y}" font-family="${SERIF}" font-size="30" fill="${INK}">
      Habesha<tspan fill="${BRAND}">Gifting</tspan><tspan fill="#78716c">.com</tspan>
    </text>`;
}

/** Diagonal gift-wrap ribbons, echoing the site's ground. */
function ribbons(opacity = 0.06) {
  const bars = [];
  for (let i = -H; i < W + H; i += 96) {
    bars.push(`<rect x="${i}" y="-40" width="26" height="${H + 80}" fill="${BRAND}"
      transform="rotate(18 ${i} 0)"/>`);
  }
  return `<g opacity="${opacity}">${bars.join("")}</g>`;
}

/* ----------------------------------------------------------------- cards -- */

function guideCard({ eyebrow, title, hasArt }) {
  const panelW = hasArt ? 700 : W;
  const pad = 68;
  const maxText = panelW - pad * 2;

  const { size, lines } = fit(title, [58, 52, 46, 41, 37], maxText, 4);
  const lineHeight = size * 1.2;
  // Optically centred in the space between the eyebrow and the wordmark.
  const blockTop = 232 + (4 - lines.length) * (lineHeight / 2);

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="${pad}" y="${blockTop + i * lineHeight}" font-family="${SERIF}"
           font-size="${size}" fill="${INK}">${escapeXml(line)}</text>`,
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect x="0" y="0" width="${panelW}" height="${H}" fill="${PAPER}"/>
    <g clip-path="inset(0 ${W - panelW} 0 0)">${ribbons()}</g>
    ${hasArt ? `<rect x="${panelW - 3}" y="0" width="3" height="${H}" fill="${BRAND}" opacity="0.5"/>` : ""}
    <rect x="0" y="0" width="${panelW}" height="12" fill="${BRAND}"/>

    <text x="${pad}" y="152" font-family="${SANS}" font-size="21" font-weight="700"
      letter-spacing="3.4" fill="${BRAND}">${escapeXml(eyebrow.toUpperCase())}</text>
    <rect x="${pad}" y="176" width="64" height="3" fill="${BRAND}" opacity="0.45"/>

    ${titleLines}

    <text x="${pad}" y="${H - 112}" font-family="${SANS}" font-size="20" fill="${INK_SOFT}">
      Who it suits · What to check before you order
    </text>
    ${wordmark(pad, H - 54)}
  </svg>`;
}

function defaultCard() {
  const title = "Thoughtful Gifts for the Habesha in Your Life";
  const { size, lines } = fit(title, [66, 60, 54], W - 160, 3);
  const lineHeight = size * 1.2;
  // Fixed baseline for the first line, so the block always clears the eyebrow.
  const top = 322;

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="600" y="${top + i * lineHeight}" text-anchor="middle" font-family="${SERIF}"
           font-size="${size}" fill="${INK}">${escapeXml(line)}</text>`,
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="${PAPER}"/>
    ${ribbons(0.07)}
    <rect x="0" y="0" width="${W}" height="14" fill="${BRAND}"/>
    <rect x="0" y="${H - 14}" width="${W}" height="14" fill="${BRAND}"/>

    ${bowMark(566, 96, 68, BRAND)}
    <text x="600" y="212" text-anchor="middle" font-family="${SANS}" font-size="21"
      font-weight="700" letter-spacing="3.6" fill="${BRAND}">HABESHAGIFTING.COM</text>
    <rect x="566" y="238" width="68" height="3" fill="${BRAND}" opacity="0.45"/>

    ${titleLines}

    <text x="600" y="${H - 118}" text-anchor="middle" font-family="${SANS}" font-size="23"
      fill="${INK_SOFT}">Gift guides for Ethiopian &amp; Eritrean family and friends</text>
    <text x="600" y="${H - 78}" text-anchor="middle" font-family="${SANS}" font-size="19"
      fill="#78716c">Coffee ceremony · Cultural gifts · Personalised · Every occasion</text>
  </svg>`;
}

/** App icon. `pad` leaves the safe area a maskable icon is cropped into. */
function iconSvg(size, pad = 0) {
  const inner = size - pad * 2;
  const radius = pad > 0 ? 0 : size * 0.22;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <rect width="${size}" height="${size}" rx="${radius}" fill="${BRAND}"/>
    ${bowMark(pad, pad, inner, CREAM).replace('stroke-width="2.1"', 'stroke-width="1.9"')}
  </svg>`;
}

/* ------------------------------------------------------------------ main -- */

async function png(svg, out, resize) {
  if (DRY) {
    console.log(`  would write ${path.relative(ROOT, out)}`);
    return;
  }
  await mkdir(path.dirname(out), { recursive: true });
  let pipeline = sharp(Buffer.from(svg));
  if (resize) pipeline = pipeline.resize(resize.width, resize.height);
  await pipeline.png({ compressionLevel: 9 }).toFile(out);
}

/** Read the fields a card needs out of one built guide page. */
async function readGuide(slug) {
  const file = path.join(OUT, "gift-guides", slug, "index.html");
  if (!existsSync(file)) return null;
  const html = await readFile(file, "utf8");

  const title = html.match(/<h1[^>]*>([^<]*)<\/h1>/)?.[1];
  const eyebrow = html.match(/<p class="eyebrow">([^<]*)<\/p>/)?.[1];
  const art = html.match(/src="(\/img\/products\/[^"]*-1200\.webp)"/)?.[1];
  if (!title) return null;

  return {
    slug,
    title: decodeHtml(title),
    eyebrow: decodeHtml(eyebrow ?? "Gift Guide"),
    art: art ? path.join(PUBLIC, art) : null,
  };
}

async function main() {
  if (!existsSync(OUT)) {
    console.error("out/ not found — run `npm run build` first.");
    process.exit(1);
  }

  console.log("Brand icons");
  await png(iconSvg(512), path.join(PUBLIC, "img/brand/logo-512.png"));
  await png(iconSvg(512), path.join(PUBLIC, "img/brand/icon-512.png"));
  await png(iconSvg(512), path.join(PUBLIC, "img/brand/icon-192.png"), { width: 192, height: 192 });
  await png(iconSvg(512, 96), path.join(PUBLIC, "img/brand/icon-maskable-512.png"));
  // Apple has no maskable concept: it needs an opaque square with its own
  // padding. It lives in src/app because that is the file convention Next reads
  // to emit the <link rel="apple-touch-icon"> tag.
  await png(iconSvg(512, 44), path.join(ROOT, "src/app/apple-icon.png"), {
    width: 180,
    height: 180,
  });

  console.log("Default card");
  await png(defaultCard(), path.join(PUBLIC, "img/og/default.png"));

  const slugs = (await readdir(path.join(OUT, "gift-guides"), { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  console.log(`Guide cards (${slugs.length})`);
  let withArt = 0;

  for (const slug of slugs) {
    const guide = await readGuide(slug);
    if (!guide) {
      console.warn(`  skipped ${slug} — no <h1> in the built page`);
      continue;
    }

    const hasArt = Boolean(guide.art && existsSync(guide.art));
    if (hasArt) withArt += 1;

    const svg = Buffer.from(guideCard({ ...guide, hasArt }));
    const out = path.join(PUBLIC, "img/og/guide", `${slug}.png`);

    if (DRY) {
      console.log(`  would write ${path.relative(ROOT, out)}${hasArt ? " (with art)" : ""}`);
      continue;
    }

    await mkdir(path.dirname(out), { recursive: true });

    const base = sharp({
      create: { width: W, height: H, channels: 4, background: PAPER },
    });

    const layers = [];
    if (hasArt) {
      layers.push({
        input: await sharp(guide.art)
          .resize(W - 700, H, { fit: "cover", position: "centre" })
          .toBuffer(),
        left: 700,
        top: 0,
      });
    }
    layers.push({ input: svg, left: 0, top: 0 });

    await base.composite(layers).png({ compressionLevel: 9 }).toFile(out);
  }

  console.log(`Done — ${slugs.length} guide cards, ${withArt} with product artwork.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
