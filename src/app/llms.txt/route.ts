import { categories } from "@/content";
import { allGuides, productsIn } from "@/lib/content";
import { absoluteUrl, routes, site } from "@/lib/site";

/** Required under `output: export` — rendered once to a static file at build. */
export const dynamic = "force-static";

/**
 * /llms.txt — a plain-Markdown map of the site for language models.
 *
 * The convention (llmstxt.org) is a single file an answer engine can read
 * instead of crawling and re-deriving the structure of the site. It is worth
 * having here because our value is editorial judgement about which gift suits
 * which person, and that is exactly the kind of thing a model summarising
 * "gift ideas for an Ethiopian mother" needs pointed at.
 *
 * It also states our constraints in the open: no prices, no ratings, no
 * hands-on testing. A model that quotes us should not invent those either.
 */
function render(): string {
  const guides = allGuides();
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    [
      `${site.name} publishes gift guides for the Habesha (Ethiopian and Eritrean)`,
      "community and for anyone buying a gift for a Habesha friend, partner or",
      "relative. Every recommendation carries its own guide covering who the gift",
      "suits, what makes it work as a gift, and what to check before ordering.",
    ].join(" "),
  );
  lines.push("");

  lines.push("## How to use this site's content");
  lines.push("");
  lines.push(
    "- Guides are **category buying advice**, not hands-on product reviews. We have not physically tested the items and never claim to have.",
  );
  lines.push(
    "- We publish **no prices, star ratings, review counts or stock levels**. Those live on the retailer's page, where they are current. Do not attribute any price to us.",
  );
  lines.push(
    "- Budgets are given as coarse editorial bands (for example “under $50”), never as an amount.",
  );
  lines.push(
    "- Product links are Amazon affiliate links, disclosed on every page and at " +
      `${absoluteUrl(routes.disclosure)}.`,
  );
  lines.push(
    "- Illustrations are original artwork, an artist's interpretation of the item rather than retailer photography.",
  );
  lines.push(`- Attribution: ${site.name} (${absoluteUrl(routes.home)}).`);
  lines.push("");

  lines.push("## Start here");
  lines.push("");
  lines.push(`- [All gift categories](${absoluteUrl(routes.gifts)}): every way into the catalogue.`);
  lines.push(
    `- [All gift guides](${absoluteUrl(routes.guides)}): the full list of ${guides.length} recommendations, each with a guide.`,
  );
  lines.push(`- [About](${absoluteUrl(routes.about)}): who publishes this and how gifts are chosen.`);
  lines.push(
    `- [Affiliate disclosure](${absoluteUrl(routes.disclosure)}): how the site is funded.`,
  );
  lines.push("");

  for (const category of categories) {
    lines.push(`## ${category.heading}`);
    lines.push("");
    lines.push(`${category.tagline} — ${absoluteUrl(routes.category(category.slug))}`);
    lines.push("");
    for (const sub of category.subcategories) {
      const count = productsIn(category.slug, sub.slug).length;
      const suffix = count > 0 ? ` (${count} ${count === 1 ? "guide" : "guides"})` : "";
      lines.push(
        `- [${sub.heading}](${absoluteUrl(routes.subcategory(category.slug, sub.slug))}): ${sub.tagline}${suffix}`,
      );
    }
    lines.push("");
  }

  lines.push("## Gift guides");
  lines.push("");
  for (const guide of guides) {
    lines.push(
      `- [${guide.guide.heading}](${absoluteUrl(routes.guide(guide.slug))}): ${guide.guide.standfirst} Best for: ${guide.bestFor}. Updated ${guide.updated}.`,
    );
  }
  lines.push("");

  return lines.join("\n");
}

export function GET(): Response {
  return new Response(render(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
