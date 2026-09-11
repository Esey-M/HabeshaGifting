#!/usr/bin/env node
/**
 * Artwork ingest.
 *
 * Drop illustrations into artwork-inbox/ named after the product or category
 * slug they belong to — `habesha-cross-necklace-earring-set.png` — then run
 * `npm run artwork`. Each file is resized to every width the site serves,
 * written to public/img as WebP, and the `image` field is added to the matching
 * entry in the content model if it is not already there.
 *
 * Everything here is deterministic and idempotent: re-running after replacing a
 * source file simply regenerates that product's variants.
 *
 *   --dry   report what would happen without writing anything
 */
import sharp from "sharp";
import { readdir, mkdir, stat, readFile, writeFile, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INBOX = path.join(ROOT, "artwork-inbox");
const DONE = path.join(INBOX, "processed");
const OUT = path.join(ROOT, "public/img");
const DRY = process.argv.includes("--dry");

const PRODUCT_WIDTHS = [480, 800, 1200, 1600];
const CATEGORY_WIDTHS = [480, 800, 1200];

const CONTENT_FILES = [
  ...(await readdir(path.join(ROOT, "src/content")))
    .filter((file) => /^products\..+\.ts$/.test(file))
    .sort()
    .map((file) => `src/content/${file}`),
  "src/content/categories.ts",
];

/** Locate which content file declares a slug, and whether it already has an image. */
async function findSlug(slug) {
  for (const rel of CONTENT_FILES) {
    const src = await readFile(path.join(ROOT, rel), "utf8");
    const at = src.indexOf(`slug: "${slug}",`);
    if (at === -1) continue;
    const block = src.slice(at, at + 4000);
    const kind = rel.includes("categories") ? "category" : "product";
    return { file: rel, src, at, kind, hasImage: /^\s*image: "/m.test(block.split("\n").slice(0, 30).join("\n")) };
  }
  return null;
}

/** Insert `image:` immediately before the entry's `art:` field. */
function withImageField(src, at, slug, imgPath, indent) {
  const artAt = src.indexOf(`${indent}art: {`, at);
  if (artAt === -1) throw new Error(`no art field found after slug "${slug}"`);
  return src.slice(0, artAt) + `${indent}image: "${imgPath}",\n` + src.slice(artAt);
}

const files = existsSync(INBOX)
  ? (await readdir(INBOX)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
  : [];

if (files.length === 0) {
  console.log("artwork-inbox/ is empty — nothing to ingest.");
  console.log("Drop files named <slug>.png in there, e.g. traditional-clay-jebena-coffee-pot.png");
  process.exit(0);
}

let ok = 0;
const skipped = [];

for (const file of files) {
  const slug = path.basename(file).replace(/\.[^.]+$/, "").trim();
  const found = await findSlug(slug);

  if (!found) {
    skipped.push(`${file} — no product or category has slug "${slug}"`);
    continue;
  }

  const isCategory = found.kind === "category";
  const widths = isCategory ? CATEGORY_WIDTHS : PRODUCT_WIDTHS;
  const dir = isCategory ? "categories" : "products";
  const imgPath = `/img/${dir}/${slug}`;
  const input = path.join(INBOX, file);

  const meta = await sharp(input).metadata();
  const ratio = (meta.width ?? 0) / (meta.height ?? 1);
  if (Math.abs(ratio - 1.5) > 0.04) {
    skipped.push(`${file} — ${meta.width}x${meta.height} is not 3:2, would be cropped`);
    continue;
  }

  console.log(`${DRY ? "[dry] " : ""}${slug} (${found.kind}) -> ${imgPath}-{${widths.join(",")}}.webp`);

  if (!DRY) {
    await mkdir(path.join(OUT, dir), { recursive: true });
    for (const w of widths) {
      await sharp(input)
        .resize(w, Math.round((w * 2) / 3), { fit: "cover" })
        .webp({ quality: 80, effort: 6 })
        .toFile(path.join(OUT, dir, `${slug}-${w}.webp`));
    }
    if (!found.hasImage) {
      const indent = isCategory ? "        " : "    ";
      const next = withImageField(found.src, found.at, slug, imgPath, indent);
      await writeFile(path.join(ROOT, found.file), next);
      console.log(`       + image field added to ${found.file}`);
    } else {
      console.log(`       = image field already present, variants regenerated`);
    }
    await mkdir(DONE, { recursive: true });
    await rename(input, path.join(DONE, file));
  }
  ok++;
}

console.log(`\n${ok} ingested${skipped.length ? `, ${skipped.length} skipped` : ""}`);
for (const s of skipped) console.log(`  SKIP ${s}`);
if (!DRY && ok) console.log("\nNow run: npm run typecheck && npm run build");
