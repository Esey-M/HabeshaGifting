"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { categories } from "@/content";
import { routes } from "@/lib/site";
import { Wordmark } from "./Wordmark";

/**
 * The primary nav is deliberately short: Gifts, plus the two recipient
 * categories people arrive looking for.
 *
 * Everything else — Gifts by Occasion, Ethiopian & Eritrean, Coffee &
 * Traditional, Personalized, and the guides index — is reached through the
 * /gifts hub one click away, and is still linked site-wide from the footer,
 * which carries the full category titles as anchor text on every page. Nothing
 * is orphaned by trimming this list, and the sitemap and llms.txt are built
 * from `categories` directly rather than from `inNav`.
 *
 * `inNav` is the single switch: set it in content/categories.ts, not here.
 */
const navItems = [
  { href: routes.gifts, label: "Gifts" },
  ...categories
    .filter((c) => c.inNav)
    .map((c) => ({ href: routes.category(c.slug), label: shortLabel(c.title) })),
];

/** Nav labels are shortened; the full title still appears as the page H1. */
function shortLabel(title: string) {
  return title
    .replace("Gifts by ", "")
    .replace("Gifts for ", "For ")
    .replace(" Gifts", "");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Route changes must close the drawer; the drawer is not remounted.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent the page scrolling behind the open drawer.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === routes.gifts ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      {/* Ribbon across the top edge — the site's one constant gifting cue. */}
      <div aria-hidden="true" className="ribbon-bar" />
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:h-[4.5rem]">
        <Wordmark />

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand"
                      : "text-ink-soft hover:bg-cream hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          <Link
            href={routes.search}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-cream hover:text-brand"
            aria-label="Search gifts and guides"
          >
            <SearchIcon />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-cream hover:text-brand lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer. Rendered always so the id target is stable for aria-controls. */}
      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    isActive(item.href) ? "bg-brand-50 text-brand" : "text-ink-soft hover:bg-cream"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
