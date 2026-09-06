import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, H2, ProsePage } from "@/components/ui/Prose";
import { routes } from "@/lib/site";

const description =
  "Why HabeshaGifting exists, how we choose what to recommend, and how we make money.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: routes.about },
  openGraph: { title: "About | HabeshaGifting", description, url: routes.about },
};

export default function AboutPage() {
  return (
    <ProsePage
      title="About HabeshaGifting"
      eyebrow="About"
      standfirst="A gift discovery site for the Habesha community — built because searching for these gifts online is genuinely frustrating."
      href={routes.about}
    >
      <p>
        If you have ever tried to buy a jebena from another country, or find name jewellery in
        Ge&rsquo;ez script without knowing whether the seller will spell it correctly, you
        already know the problem. The listings exist, scattered across marketplaces, described
        vaguely, and photographed generously. What is missing is anyone telling you which
        version to buy and what goes wrong.
      </p>
      <p>
        HabeshaGifting is our attempt at that missing layer: a place to browse by the person or
        the occasion, and then read something genuinely useful before you spend money.
      </p>

      <H2>What we mean by &ldquo;Habesha&rdquo;</H2>
      <p>
        We use Habesha as an umbrella covering Ethiopian and Eritrean communities and the wider
        diaspora. That is a convenience, not a claim that the two are the same. Where a gift is
        specifically Ethiopian or specifically Eritrean we say so, and we maintain separate
        sections for each alongside the traditions both communities share.
      </p>

      <H2>How we choose what to recommend</H2>
      <Bullets
        items={[
          "We start from the gifting problem, not from a product. Every guide begins with a recipient or an occasion and works outward.",
          "We only write about categories where there is a real decision to make. If any version of a thing is fine, we say that rather than manufacturing a recommendation.",
          "Every guide has a considerations section listing what goes wrong — sizing, spelling, shipping damage, mislabelled materials. If we cannot name the failure modes, we do not know the category well enough to publish.",
          "Cons are written to be genuinely useful. A cons list that reads as marketing is a wasted section.",
        ]}
      />

      <H2>What we deliberately do not publish</H2>
      <p>
        We do not display prices, star ratings, review counts or stock availability. Those
        change constantly, we cannot keep them accurate on a static site, and a stale price is
        worse than no price. We show a budget band we stand behind and send you to the retailer
        for anything live.
      </p>
      <p>
        We also do not publish retailer product photography. The artwork on this site is
        generated illustration representing the category, and every guide says so.
      </p>

      <H2>How we make money</H2>
      <p>
        Through affiliate links, including the Amazon Associates Programme. If you buy through
        a link here we may earn a commission, at no additional cost to you. This does not
        influence what we recommend or what we say about it — the cons lists are the proof of
        that, and they stay honest.{" "}
        <Link href={routes.disclosure} className="font-medium text-brand hover:underline">
          Full affiliate disclosure
        </Link>
        .
      </p>

      <H2>Corrections</H2>
      <p>
        If we have a cultural detail wrong, a transliteration wrong, or a recommendation that
        does not hold up, we want to know.{" "}
        <Link href={routes.contact} className="font-medium text-brand hover:underline">
          Tell us
        </Link>{" "}
        and we will fix it.
      </p>
    </ProsePage>
  );
}
