import type { Metadata } from "next";
import { Bullets, H2, ProsePage } from "@/components/ui/Prose";
import { routes, site } from "@/lib/site";

const description = "What data HabeshaGifting collects, what it does not, and your choices.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: routes.privacy },
  openGraph: { title: "Privacy Policy | HabeshaGifting", description, url: routes.privacy },
};

export default function PrivacyPage() {
  return (
    <ProsePage
      title="Privacy Policy"
      eyebrow="Privacy"
      standfirst="This site is deliberately simple, and so is what it knows about you."
      href={routes.privacy}
      updated="2026-09-06"
    >
      <p>
        This policy explains how HabeshaGifting.com handles information. It is written to be
        read rather than to be technically unassailable — if anything here is unclear, ask us
        and we will clarify it.
      </p>

      <H2>What this site collects directly</H2>
      <p>
        HabeshaGifting is a static website. It has no user accounts, no database and no server
        that processes your information. We do not ask for personal data to browse, and the
        pages you read are not logged by us.
      </p>
      <Bullets
        items={[
          "No accounts, logins or profiles.",
          "No advertising trackers or third-party analytics scripts are embedded in these pages.",
          "Search runs entirely in your browser — what you type is never sent anywhere.",
        ]}
      />

      <H2>What our host may collect</H2>
      <p>
        The site is served by GitHub Pages. Like any web host, GitHub receives standard request
        information — your IP address, browser user agent and the pages requested — in order to
        serve the site and protect it from abuse. This is handled under GitHub&rsquo;s own
        privacy practices, which we do not control.
      </p>
      <p>
        Fonts are self-hosted and served from this domain, so loading a page does not make a
        request to a font provider.
      </p>

      <H2>Affiliate links and third-party sites</H2>
      <p>
        When you follow an affiliate link to Amazon or another retailer, you leave this site
        and enter theirs. That retailer will typically set cookies to attribute the referral,
        and from that point their privacy policy governs — not this one. We receive only
        aggregate commission reporting, which does not identify individuals to us.
      </p>

      <H2>Cookies</H2>
      <p>
        This site sets no cookies of its own. Retailers you click through to will set their
        own; you can manage those in your browser settings.
      </p>

      <H2>Children</H2>
      <p>
        This site is intended for adults buying gifts and is not directed at children under 13.
      </p>

      <H2>Your rights</H2>
      <p>
        Because we do not collect or store personal data, there is generally nothing for us to
        access, correct or delete. If you have emailed us, that correspondence sits in our
        mailbox and you can ask us to delete it at any time by writing to hello@{site.domain}.
      </p>

      <H2>Changes</H2>
      <p>
        If this policy changes — for example if we later add a form or a service that
        handles your data — we will update the date at the top of this page and describe
        what changed.
      </p>
    </ProsePage>
  );
}
