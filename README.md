# HabeshaGifting.com

An editorial gift discovery site for the global Habesha community. Static Next.js,
deployed to GitHub Pages behind a custom domain.

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # static export to ./out
npm run typecheck    # tsc --noEmit
npm run lint         # eslint src
npx serve out        # preview the exported site exactly as Pages serves it
```

## How the content model works

No page is written by hand. Every route is generated from typed data:

```
src/content/types.ts            Category · Subcategory · Product · Guide
src/content/categories.ts       6 categories → 46 subcategories
src/content/products.*.ts       23 products, each carrying its own guide
src/lib/content.ts              query layer (placements, related, budgets)
```

### Adding a product

Append a `Product` to one of the `src/content/products.*.ts` files. Its
`placements` decide which listing pages it appears on; its `guide` becomes
`/gift-guides/<slug>/`. Nothing else needs editing — the listing pages, guide
page, sitemap, search index and internal links all pick it up on the next build.

### Adding a category or subcategory

Append to `src/content/categories.ts`. New routes generate automatically.

## Editorial rules encoded in the code

These are deliberate constraints, not omissions:

- **No prices, ratings, review counts or availability.** They go stale and we
  cannot keep them accurate on a static site. `budget` is a coarse editorial
  band. Guides use `Article` schema, never `Product` with fabricated `offers`.
- **Affiliate links are marked.** `rel="sponsored nofollow noopener"`, a visible
  "Buy on Amazon" label, and screen-reader text saying it opens a new tab. Where
  `affiliateUrl` is `null` the UI says so rather than linking nowhere.
- **No retailer product photography.** Card and hero imagery is generated inline
  SVG (`src/components/Artwork.tsx`), captioned as illustrative. Swap in real
  photography per product later without touching layout.

## Static hosting constraints

The site is exported to plain HTML (`output: "export"`), so there is no server:

- No API routes, route handlers, server actions or ISR.
- No `next/image` optimizer — `images.unoptimized` is set.
- No custom HTTP headers; GitHub Pages will not serve them.
- Search is a client-side weighted index over the same content modules
  (`src/lib/search.ts`).
- `trailingSlash: true` so `/gifts/gifts-for-her/` resolves to a directory index.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which typechecks, lints,
builds and publishes `./out` to GitHub Pages.

One-time setup in the repo:

1. **Settings → Pages → Source: GitHub Actions.**
2. Point the domain's DNS at GitHub Pages (`A` records to GitHub's four Pages
   IPs, or a `CNAME` for `www`).
3. `public/CNAME` already contains `habeshagifting.com` — change it there if the
   domain changes, not in the Pages UI, or the next deploy will overwrite it.
4. Enable **Enforce HTTPS** once the certificate is issued.

`public/.nojekyll` is required so GitHub does not strip the `_next` directory.
