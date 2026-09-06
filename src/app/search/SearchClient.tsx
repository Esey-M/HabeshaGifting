"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { exampleQueries, search } from "@/lib/search";

/**
 * Search UI.
 *
 * Deliberately not reading `useSearchParams`: on a statically exported site
 * that forces a Suspense boundary and a client-side hydration dance for no
 * benefit here. The field is the state.
 */
export function SearchClient() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => search(query), [query]);
  const hasQuery = query.trim().length >= 2;

  return (
    <div className="mt-10">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="site-search" className="block text-sm font-medium text-ink-soft">
          What are you looking for?
        </label>
        <div className="relative mt-2">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </span>
          <input
            id="site-search"
            type="search"
            value={query}
            autoFocus
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="gift for mom, jebena, wedding…"
            className="w-full rounded-lg border border-line bg-paper py-3.5 pl-12 pr-4 text-base text-ink placeholder:text-muted focus:border-brand focus:outline-none"
          />
        </div>
      </form>

      {!hasQuery && (
        <div className="mt-8">
          <p className="text-sm font-medium text-ink-soft">Try one of these</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {exampleQueries.map((q) => (
              <li key={q}>
                <button
                  type="button"
                  onClick={() => setQuery(q)}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft transition-colors hover:border-brand-200 hover:text-brand"
                >
                  {q}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div aria-live="polite" className="mt-10">
        {hasQuery && (
          <p className="text-sm text-muted">
            {results.length === 0
              ? `No matches for "${query.trim()}".`
              : `${results.length} ${results.length === 1 ? "result" : "results"} for "${query.trim()}"`}
          </p>
        )}

        {hasQuery && results.length === 0 && (
          <p className="mt-4 max-w-lg text-sm text-ink-soft">
            Try a broader term — a recipient (&ldquo;mom&rdquo;, &ldquo;brother&rdquo;), an
            occasion (&ldquo;wedding&rdquo;) or a kind of gift (&ldquo;coffee&rdquo;,
            &ldquo;jewellery&rdquo;).
          </p>
        )}

        {results.length > 0 && (
          <ul className="mt-6 divide-y divide-line-soft border-y border-line-soft">
            {results.map((doc) => (
              <li key={doc.href}>
                <Link href={doc.href} className="group flex flex-col gap-1 py-4 transition-colors">
                  <span className="flex items-center gap-2.5">
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                      {doc.kind}
                    </span>
                    <span className="font-display text-lg font-semibold text-ink group-hover:text-brand">
                      {doc.title}
                    </span>
                  </span>
                  <span className="text-sm text-ink-soft">{doc.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
