import Link from "next/link";
import { categories } from "@/content";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 sm:py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        We could not find that page
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        The link may be out of date, or we may have moved a guide. Here is the way back in.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          href={routes.gifts}
          className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-800"
        >
          Browse all gifts
        </Link>
        <Link
          href={routes.guides}
          className="rounded-lg border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand"
        >
          All gift guides
        </Link>
        <Link
          href={routes.search}
          className="rounded-lg border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand"
        >
          Search
        </Link>
      </div>

      <nav aria-label="Categories" className="mt-14 border-t border-line pt-8">
        <ul className="flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={routes.category(c.slug)}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-ink-soft transition-colors hover:border-brand-200 hover:text-brand"
              >
                <span aria-hidden="true">{c.icon}</span>
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
