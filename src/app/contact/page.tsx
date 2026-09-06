import type { Metadata } from "next";
import Link from "next/link";
import { H2, ProsePage } from "@/components/ui/Prose";
import { routes, site } from "@/lib/site";

const description =
  "Get in touch with HabeshaGifting about a correction, a suggestion or a partnership.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: routes.contact },
  openGraph: { title: "Contact | HabeshaGifting", description, url: routes.contact },
};

export default function ContactPage() {
  return (
    <ProsePage
      title="Contact"
      eyebrow="Get in touch"
      standfirst="Corrections, suggestions and questions are all welcome."
      href={routes.contact}
    >
      <p>
        The best way to reach us is by email at{" "}
        <a
          href={`mailto:hello@${site.domain}`}
          className="font-medium text-brand hover:underline"
        >
          hello@{site.domain}
        </a>
        .
      </p>

      <H2>Corrections</H2>
      <p>
        If we have got a cultural detail, a transliteration or a recommendation wrong, please
        tell us — include the page and what is wrong with it, and we will correct it and note
        the change. Getting Amharic and Tigrinya details right matters more to us than being
        first to publish.
      </p>

      <H2>Suggestions</H2>
      <p>
        If there is a gift category you keep struggling to buy for, that is exactly the kind of
        thing we want to write about. Tell us what you were trying to find and what made it
        difficult.
      </p>

      <H2>Sellers and makers</H2>
      <p>
        We are happy to hear from independent Habesha makers and sellers. To be clear about
        what we can offer: we do not accept payment for reviews, recommendations or placement,
        and being in touch does not lead to coverage. What it can do is make sure we know your
        work exists when we are researching a category.
      </p>

      <H2>Response times</H2>
      <p>
        This is a small operation, so replies can take a little while. Corrections get looked
        at first.{" "}
        <Link href={routes.about} className="font-medium text-brand hover:underline">
          More about how we work
        </Link>
        .
      </p>
    </ProsePage>
  );
}
