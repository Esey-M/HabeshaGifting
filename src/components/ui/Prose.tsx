import { Breadcrumbs, JsonLd } from "./Breadcrumbs";
import { SectionHeading } from "./SectionHeading";
import { graph, webPageNode } from "@/lib/schema";
import { routes } from "@/lib/site";

/** Shared shell for the static informational pages. */
export function ProsePage({
  title,
  eyebrow,
  standfirst,
  href,
  updated,
  type,
  aboutUs,
  children,
}: {
  title: string;
  eyebrow: string;
  standfirst: string;
  href: string;
  updated?: string;
  /** Schema.org subtype, e.g. "AboutPage" or "ContactPage". */
  type?: string;
  /** True on the page that describes the publisher itself. */
  aboutUs?: boolean;
  children: React.ReactNode;
}) {
  const trail = [
    { href: routes.home, label: "Home" },
    { href, label: title },
  ];

  /**
   * These pages carry no rich result of their own, but they are what an engine
   * reads to decide whether the site is a real publisher: who runs it, how to
   * reach them, and how it is funded. They are described precisely for that
   * reason rather than left as anonymous documents.
   */
  const jsonLd = graph(
    ...webPageNode({
      path: href,
      name: title,
      description: standfirst,
      modified: updated,
      trail,
      type,
      mainEntityIsPublisher: aboutUs,
    }),
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={jsonLd} />
      <Breadcrumbs trail={trail} schema={false} />
      <div className="mt-8">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={standfirst} />
      </div>
      {updated && (
        <p className="mt-5 text-sm text-muted">
          Last updated <time dateTime={updated}>{updated}</time>
        </p>
      )}
      <div className="prose-editorial mt-10 max-w-none">{children}</div>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl font-semibold text-ink">{children}</h2>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}
