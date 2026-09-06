"use client";

import { useState } from "react";

/**
 * Newsletter signup.
 *
 * The site is statically hosted with no backend, so there is nowhere to POST.
 * Rather than fake a subscription, the form validates locally and tells the
 * reader plainly that signups are not open yet. Wiring this to a hosted form
 * provider later is a one-function change.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "invalid" | "pending">("idle");

  return (
    <div className="rounded-card border border-line bg-cream p-6 sm:p-8">
      <p className="eyebrow">Gift ideas, occasionally</p>
      <h2 className="mt-2 font-display text-xl font-semibold text-ink">
        New guides in your inbox
      </h2>
      <p className="mt-2 max-w-md text-sm text-ink-soft">
        Seasonal gift guides and new recommendations. No more than once a month, and never
        a list of things we have not actually looked into.
      </p>

      <form
        className="mt-5 flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          setState(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "pending" : "invalid");
        }}
        noValidate
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setState("idle");
          }}
          aria-invalid={state === "invalid"}
          aria-describedby="newsletter-status"
          className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none sm:max-w-xs"
        />
        <button
          type="submit"
          className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-brand-800"
        >
          Notify me
        </button>
      </form>

      <p id="newsletter-status" role="status" className="mt-3 text-sm">
        {state === "invalid" && (
          <span className="text-brand-600">Please enter a valid email address.</span>
        )}
        {state === "pending" && (
          <span className="text-ink-soft">
            Thanks — the newsletter is not open yet, so nothing has been stored. Check back
            soon and we will have signups live.
          </span>
        )}
        {state === "idle" && <span className="sr-only">Enter your email to be notified.</span>}
      </p>
    </div>
  );
}
