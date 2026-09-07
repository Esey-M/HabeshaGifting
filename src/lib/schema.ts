/**
 * Structured data building blocks.
 *
 * Every page emits the same Organization and WebSite nodes under stable `@id`s
 * and then references them rather than restating them. Search engines and
 * answer engines can then merge the whole site into one publisher entity
 * instead of treating each page as an anonymous document.
 *
 * Nothing here invents a fact. There is no `aggregateRating`, no `offers` and
 * no `sameAs` for social accounts that do not exist — a knowledge graph built
 * on guesses is worse than a small honest one.
 */

import { absoluteUrl, assetUrl, ids, routes, site } from "@/lib/site";

type Node = Record<string, unknown>;

/** The publisher. Referenced from every article, listing and page node. */
export const organizationNode: Node = {
  "@type": "Organization",
  "@id": ids.organization,
  name: site.name,
  alternateName: site.domain,
  url: absoluteUrl(routes.home),
  description: site.description,
  email: site.email,
  foundingDate: site.founded,
  knowsAbout: [...site.topics],
  logo: {
    "@type": "ImageObject",
    "@id": ids.logo,
    url: assetUrl("/img/brand/logo-512.png"),
    contentUrl: assetUrl("/img/brand/logo-512.png"),
    width: 512,
    height: 512,
    caption: site.name,
  },
  image: { "@id": ids.logo },
  publishingPrinciples: absoluteUrl(routes.disclosure),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "editorial",
    email: site.email,
    url: absoluteUrl(routes.contact),
    availableLanguage: ["English"],
  },
};

/** The site itself, including the search action that powers a sitelinks box. */
export const webSiteNode: Node = {
  "@type": "WebSite",
  "@id": ids.website,
  url: absoluteUrl(routes.home),
  name: site.name,
  alternateName: `${site.name} — ${site.tagline}`,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": ids.organization },
  copyrightHolder: { "@id": ids.organization },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}${routes.search}?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export interface WebPageInput {
  path: string;
  name: string;
  description: string;
  /** Absolute URL of the page's lead image, when it has one. */
  image?: string;
  /** ISO date, for pages whose content has a known revision date. */
  modified?: string;
  /** Visible breadcrumb trail, mirrored into a BreadcrumbList node. */
  trail?: { href: string; label: string }[];
  /** More specific subtype, e.g. "CollectionPage" or "AboutPage". */
  type?: string;
  /**
   * Set on the pages that are *about* the publisher — the about page above all.
   * It is the link that tells a knowledge graph which page describes the
   * organisation, rather than merely being published by it.
   */
  mainEntityIsPublisher?: boolean;
}

/**
 * A WebPage node wired to the site graph. `isPartOf` is what lets an engine
 * attribute the page to the site, and `breadcrumb` is what lets it show the
 * hierarchy in place of a bare URL.
 */
export function webPageNode(input: WebPageInput): Node[] {
  const url = absoluteUrl(input.path);
  const breadcrumbId = `${url}#breadcrumb`;

  const page: Node = {
    "@type": input.type ?? "WebPage",
    "@id": ids.page(input.path),
    url,
    name: input.name,
    description: input.description,
    inLanguage: "en",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
    /**
     * Declared explicitly because the site is free to read and entirely
     * affiliate-funded. Answer engines use this to decide whether a page can be
     * quoted rather than paywall-gated.
     */
    isAccessibleForFree: true,
  };

  if (input.image) {
    page.primaryImageOfPage = { "@type": "ImageObject", url: input.image };
  }
  if (input.modified) {
    page.dateModified = input.modified;
  }
  if (input.mainEntityIsPublisher) {
    page.mainEntity = { "@id": ids.organization };
  }

  const nodes: Node[] = [page];

  if (input.trail && input.trail.length > 0) {
    page.breadcrumb = { "@id": breadcrumbId };
    nodes.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: input.trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.label,
        item: absoluteUrl(crumb.href),
      })),
    });
  }

  return nodes;
}

/**
 * The site-wide entity graph, emitted once from the root layout so it appears
 * on every page without each page restating it.
 */
export const siteGraph: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, webSiteNode],
};

/**
 * Wrap page-specific nodes in a graph. The Organization and WebSite nodes are
 * deliberately absent: the layout already emitted them under the same `@id`s,
 * and consumers merge nodes by `@id` across every block on the page.
 */
export function graph(...nodes: Node[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
