import type { Metadata } from "next";
import Link from "next/link";
import { H2, ProsePage } from "@/components/ui/Prose";
import { routes, site } from "@/lib/site";

const description = "The terms under which you use HabeshaGifting.com.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description,
  alternates: { canonical: routes.terms },
  openGraph: { title: "Terms of Use | HabeshaGifting", description, url: routes.terms },
};

export default function TermsPage() {
  return (
    <ProsePage
      title="Terms of Use"
      eyebrow="Terms"
      standfirst="What you can expect from this site, and what we cannot promise."
      href={routes.terms}
      updated="2026-09-06"
    >
      <H2>Using this site</H2>
      <p>
        HabeshaGifting.com is an editorial website offering gift suggestions and buying advice.
        You are welcome to read, link to and share it. By using the site you accept these terms.
      </p>

      <H2>Our content is advice, not a guarantee</H2>
      <p>
        Recommendations here reflect our research and editorial judgement. Products change,
        sellers change, and quality varies between batches of the same item. We cannot
        guarantee that a specific listing will match what we describe, and we are not the
        seller in any transaction.
      </p>
      <p>
        We do not publish prices, ratings or availability, and any budget band shown is an
        editorial estimate rather than a quoted price. Always check the current details on the
        retailer&rsquo;s own page before buying.
      </p>

      <H2>Purchases are with the retailer</H2>
      <p>
        When you follow a link and buy something, your contract is entirely with that retailer.
        Payment, delivery, damage in transit, returns, refunds and warranty are all matters
        between you and them. We are not a party to the sale and cannot resolve order problems
        on your behalf.
      </p>

      <H2>Affiliate relationships</H2>
      <p>
        We earn commission on qualifying purchases made through links here. This is set out in
        full in our{" "}
        <Link href={routes.disclosure} className="font-medium text-brand hover:underline">
          affiliate disclosure
        </Link>
        .
      </p>

      <H2>Intellectual property</H2>
      <p>
        The written guides, artwork and design on this site belong to {site.name}. Please do
        not republish substantial portions without permission; quoting with a link back is
        fine and appreciated.
      </p>

      <H2>External links</H2>
      <p>
        We link to third-party sites we consider relevant. We do not control them and are not
        responsible for their content, their practices or their availability.
      </p>

      <H2>Limitation of liability</H2>
      <p>
        The site is provided as is. To the extent permitted by law, we are not liable for loss
        arising from reliance on the information here or from any purchase made through a link.
        Nothing in these terms limits liability that cannot lawfully be limited.
      </p>

      <H2>Changes</H2>
      <p>
        We may update these terms. The date at the top of this page reflects the most recent
        revision.
      </p>
    </ProsePage>
  );
}
