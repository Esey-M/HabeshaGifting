"use client";

import { useMemo, useState } from "react";
import type { BudgetBand, BudgetMeta, Product } from "@/content/types";
import { ProductCard } from "./ProductCard";

/**
 * Client-side faceting.
 *
 * The site is statically exported, so there is no server to query. The full
 * product set for a listing is already in the payload, and filtering is pure
 * array work — which is the right trade at this catalogue size and keeps the
 * page interactive with no network round trip.
 */
export function FilterableProducts({
  products,
  budgets,
}: {
  products: Product[];
  budgets: BudgetMeta[];
}) {
  const [budget, setBudget] = useState<BudgetBand | "all">("all");

  const visible = useMemo(
    () => (budget === "all" ? products : products.filter((p) => p.budget === budget)),
    [products, budget],
  );

  if (products.length === 0) {
    return (
      <p className="rounded-card border border-dashed border-line bg-cream/50 p-8 text-center text-sm text-muted">
        We have not published recommendations here yet. New guides go up regularly — try a
        related category in the meantime.
      </p>
    );
  }

  return (
    <>
      {budgets.length > 1 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span id="budget-filter-label" className="mr-1 text-xs font-semibold uppercase tracking-wide text-muted">
            Budget
          </span>
          <div role="group" aria-labelledby="budget-filter-label" className="flex flex-wrap gap-2">
            <FilterChip active={budget === "all"} onClick={() => setBudget("all")}>
              All
            </FilterChip>
            {budgets.map((b) => (
              <FilterChip key={b.id} active={budget === b.id} onClick={() => setBudget(b.id)}>
                {b.label}
              </FilterChip>
            ))}
          </div>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} of {products.length} recommendations.
      </p>

      {visible.length === 0 ? (
        <p className="rounded-card border border-dashed border-line bg-cream/50 p-8 text-center text-sm text-muted">
          Nothing in that budget here yet.{" "}
          <button
            type="button"
            onClick={() => setBudget("all")}
            className="font-semibold text-brand underline"
          >
            Show all
          </button>
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-brand bg-brand text-cream"
          : "border-line bg-paper text-ink-soft hover:border-brand-200 hover:text-brand"
      }`}
    >
      {children}
    </button>
  );
}
