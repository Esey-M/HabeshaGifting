# SEO and answer-engine setup

Everything on this page is either already live or a one-line change. Nothing
here needs a rebuild of the content model.

## The URLs you need

| What | URL |
| --- | --- |
| Sitemap | `https://habeshagifting.com/sitemap.xml` |
| Robots | `https://habeshagifting.com/robots.txt` |
| LLM site map | `https://habeshagifting.com/llms.txt` |
| Web manifest | `https://habeshagifting.com/manifest.webmanifest` |
| IndexNow key | `https://habeshagifting.com/8a2b5b3d7df1570912c0a98582bde686.txt` |

The sitemap is generated from the content model at build time, so it can never
list a page that does not exist. Adding a product adds its guide URL
automatically — there is nothing to resubmit by hand.

## Google Search Console

1. <https://search.google.com/search-console> → **Add property**.
2. Choose **Domain** if you can (it covers `www`, `http` and every
   subdomain in one go) and add the TXT record it gives you at Namecheap,
   alongside the existing A records. Otherwise choose **URL prefix** with
   `https://habeshagifting.com/`.
3. For the URL-prefix route, the **HTML tag** method is the least fragile on
   GitHub Pages: copy the `content="…"` value only, paste it into
   `verification.google` in `src/lib/site.ts`, then commit and push. The tag is
   emitted into every page, so verification passes as soon as the deploy lands.
4. Once verified: **Sitemaps** → submit `sitemap.xml`.
5. Then **URL Inspection** on `https://habeshagifting.com/` → **Request
   indexing**. Do the same for two or three of the strongest guides. Google
   discovers the rest from the sitemap and the internal links.

Nothing else in Search Console needs configuring. Ignore the "Enhancements"
warnings about missing price and rating — those come from the deliberate choice
not to publish product data we cannot keep current.

## Bing Webmaster Tools

1. <https://www.bing.com/webmasters> → **Add a site**.
2. The fastest route is **Import from Google Search Console** — it copies the
   property and the sitemap and skips verification entirely. Do the Google step
   first and this takes about thirty seconds.
3. Manual instead: paste the `msvalidate.01` value into `verification.bing` in
   `src/lib/site.ts`, push, then click Verify.
4. Submit `https://habeshagifting.com/sitemap.xml` under **Sitemaps**.

Verifying Bing also covers Copilot, DuckDuckGo and Ecosia, which all take
Bing's index.

## IndexNow — no account required

IndexNow pushes changed URLs straight at Bing, Yandex and Seznam. Ownership is
proved by the key file in `public/`, so there is nothing to log into.

```
npm run build
npm run indexnow            # submits every URL in the sitemap
npm run indexnow -- --dry   # prints what it would submit
```

Run it after a deploy has landed — the script checks the key file is live first
and refuses to submit if it is not. Google does not participate in IndexNow;
Search Console is the only route there.

## What is already in place

**Crawling and discovery.** `robots.txt` allows everything except `/search/`,
which is a client-side filter over pages that are already indexed on their own.
The sitemap carries a real `lastmod` per page — taken from the content, not the
build clock — and declares each page's illustration for Google Images.

**Answer engines (GEO).** `robots.txt` names thirty-odd AI crawlers in an
explicit allow group: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot,
Google-Extended, Applebot-Extended and the rest. The wildcard rule already
permitted them; the explicit group exists because these agents are blocked by
default in a lot of infrastructure, and being quoted with attribution is
distribution for a site like this one.

`/llms.txt` is a plain-Markdown map of the whole site, and it states our
constraints in the open: no prices, no ratings, no hands-on testing, budgets as
bands. A model summarising us should not invent those either.

Each guide carries a jump-link contents list, so an engine can see what each
passage covers and quote the relevant section rather than the opening paragraph.

**Structured data.** One `Organization` and one `WebSite` node are emitted from
the root layout under stable `@id`s, and every page references them instead of
restating them — so the whole site resolves to a single publisher entity rather
than seventy-five anonymous documents. Guides add `Article` (never `Product`:
we hold no price, stock or rating data, and a `Product` node without `offers` is
an invitation to fabricate them). Listings add `ItemList`; the about page is
marked as the page describing the publisher.

**Social cards.** Every page has a 1200×630 Open Graph image. They are generated
by `npm run og` and committed, because a static export has no image optimizer
and no edge runtime to render them on request. Guide cards carry the article
headline and, where a product illustration exists, the illustration itself.

Regenerate after adding products:

```
npm run build && npm run og
```

It reads titles out of the built HTML in `out/`, so the build has to come first.

## Deliberately not done

- **No `FAQPage` schema.** It would mean inventing questions nobody asked.
  Google has also restricted FAQ rich results to health and government sites, so
  there is no upside to weigh against the risk of a manual action.
- **No `Product` schema, `aggregateRating` or `review` markup.** Every one of
  them needs data we do not hold. Marking up invented ratings is the single
  fastest way to lose an Amazon Associates account.
- **No social `sameAs` links.** There are no accounts yet. When there are, add
  them to `organizationNode` in `src/lib/schema.ts` and they will appear on
  every page at once.
