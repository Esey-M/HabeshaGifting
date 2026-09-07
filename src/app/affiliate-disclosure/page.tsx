import type { Metadata } from "next";
import { Bullets, H2, ProsePage } from "@/components/ui/Prose";
import { routes } from "@/lib/site";

const description =
  "How HabeshaGifting uses affiliate links, what we earn from them, and what that does and does not affect.";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description,
  alternates: { canonical: routes.disclosure },
  openGraph: { title: "Affiliate Disclosure | HabeshaGifting", description, url: routes.disclosure },
};

export default function DisclosurePage() {
  return (
    <ProsePage
      type="WebPage"
      title="Affiliate Disclosure"
      eyebrow="Disclosure"
      standfirst="HabeshaGifting earns commission from qualifying purchases made through links on this site."
      href={routes.disclosure}
      updated="2026-09-06"
    >
      <H2>The short version</H2>
      <p>
        Some links on this site are affiliate links. If you click one and buy something, we may
        receive a commission from the retailer. You pay the same price either way — the
        commission comes out of the retailer&rsquo;s margin, not your total.
      </p>

      <H2>Amazon Associates</H2>
      <p>
        HabeshaGifting.com is a participant in the Amazon Services LLC Associates Programme, an
        affiliate advertising programme designed to provide a means for sites to earn
        advertising fees by advertising and linking to Amazon.com. Amazon and the Amazon logo
        are trademarks of Amazon.com, Inc. or its affiliates.
      </p>

      <H2>How we mark affiliate links</H2>
      <Bullets
        items={[
          "Outbound buttons say \"Buy on Amazon\" and open in a new tab, so it is always clear you are leaving this site.",
          "Every affiliate link carries rel=\"sponsored nofollow\" markup, as search engines require for paid links.",
          "Guides that contain affiliate links carry a disclosure directly beside the buying section, not only in the footer.",
          "Where we have not yet added a retailer link, we say so rather than linking somewhere unrelated.",
        ]}
      />

      <H2>What commission does not affect</H2>
      <p>
        Commission rates do not determine what we recommend, what order recommendations appear
        in, or what we say about a product&rsquo;s downsides. Every guide on this site includes
        a cons list and a considerations section written to actually be useful, including in
        cases where the honest advice is not to buy.
      </p>
      <p>
        We are not paid by any manufacturer or seller for placement, and we do not accept
        payment for a review or a recommendation.
      </p>

      <H2>Prices and availability</H2>
      <p>
        We do not display prices, ratings or availability anywhere on this site. Those are set
        by the retailer and change frequently; the budget bands we show are our own editorial
        estimate of what a category typically costs, not a quoted price. Always check the
        current details on the retailer&rsquo;s page before purchasing.
      </p>

      <H2>Questions</H2>
      <p>
        If anything about how we disclose this is unclear, please get in touch through the
        contact page.
      </p>
    </ProsePage>
  );
}
