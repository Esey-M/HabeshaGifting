import Link from "next/link";
import { categories } from "@/content";
import { allGuides } from "@/lib/content";
import { routes, site } from "@/lib/site";
import { Newsletter } from "./Newsletter";

const legalLinks = [
  { href: routes.about, label: "About" },
  { href: routes.contact, label: "Contact" },
  { href: routes.privacy, label: "Privacy Policy" },
  { href: routes.terms, label: "Terms" },
  { href: routes.disclosure, label: "Affiliate Disclosure" },
];

export function Footer() {
  const featuredGuides = allGuides().slice(0, 5);

  return (
    <footer className="mt-24 border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Newsletter />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              Habesha<span className="text-brand">Gifting</span>
              <span className="text-muted">.com</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Gift ideas and honest buying guides for the Habesha community, wherever in the
              world you are shopping from.
            </p>
          </div>

          <nav aria-labelledby="footer-categories">
            <h2 id="footer-categories" className="font-display text-sm font-semibold text-ink">
              Gift categories
            </h2>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={routes.category(c.slug)}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-guides">
            <h2 id="footer-guides" className="font-display text-sm font-semibold text-ink">
              Recent gift guides
            </h2>
            <ul className="mt-4 space-y-2.5">
              {featuredGuides.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={routes.guide(p.slug)}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={routes.guides}
                  className="text-sm font-medium text-brand transition-colors hover:text-brand-800"
                >
                  All gift guides →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-site">
            <h2 id="footer-site" className="font-display text-sm font-semibold text-ink">
              Site
            </h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-line-soft pt-8">
          <p className="text-xs leading-relaxed text-muted">
            <strong className="font-semibold text-ink-soft">Affiliate disclosure:</strong>{" "}
            HabeshaGifting.com participates in affiliate programmes, including the Amazon
            Associates Programme. We may earn a commission on qualifying purchases made
            through links on this site, at no additional cost to you. Prices and availability
            are set by the retailer and are not shown here — always check the current details
            on the retailer&rsquo;s page before buying.{" "}
            <Link href={routes.disclosure} className="font-medium text-brand hover:underline">
              Read the full disclosure
            </Link>
            .
          </p>
          <p className="mt-6 text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
