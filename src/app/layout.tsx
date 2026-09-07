import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/Breadcrumbs";
import { siteGraph } from "@/lib/schema";
import { OG_DEFAULT, ogImageMeta } from "@/lib/og";
import { assetUrl } from "@/lib/site";
import { absoluteUrl, site, verification } from "@/lib/site";
import "./globals.css";

/**
 * Playfair Display for headlines: high-contrast and celebratory, which suits a
 * gifting site, with conventional letterforms — Fraunces was here first, but
 * its WONK axis gives a hooked "f" that reads as a mistake in words like
 * "Gifts". Inter keeps body copy neutral and highly legible at small sizes.
 * Both are self-hosted by next/font at build time, so there is no runtime
 * request to Google.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  /**
   * Set once here and inherited by every route. Individual pages override only
   * `images` when they have artwork of their own; without this default a share
   * of any page rendered as a blank card.
   */
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: absoluteUrl("/"),
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ogImageMeta(OG_DEFAULT, `${site.name} — ${site.tagline}`),
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [assetUrl(OG_DEFAULT)],
  },
  /**
   * Ownership tokens for the webmaster consoles. Next omits any key whose value
   * is empty, so an unconfigured console adds nothing to the markup.
   */
  verification: siteVerification(),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  referrer: "strict-origin-when-cross-origin",
  category: "shopping",
  keywords: [...site.topics],
  authors: [{ name: site.name, url: absoluteUrl("/") }],
  creator: site.name,
  publisher: site.name,
  manifest: "/manifest.webmanifest",
  /**
   * Formats we do not publish. Left on, phone numbers and dates in editorial
   * copy get auto-linked by Safari, which mangles guide text.
   */
  formatDetection: { telephone: false, address: false, email: false },
};

/**
 * Only tokens that have actually been filled in reach the markup. An empty
 * `content=""` meta tag is not neutral: both consoles read it as a failed
 * verification attempt.
 */
function siteVerification(): Metadata["verification"] {
  const other: Record<string, string> = {};
  if (verification.bing) other["msvalidate.01"] = verification.bing;
  if (verification.pinterest) other["p:domain_verify"] = verification.pinterest;

  return {
    ...(verification.google ? { google: verification.google } : {}),
    ...(verification.yandex ? { yandex: verification.yandex } : {}),
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}

export const viewport: Viewport = {
  themeColor: "#740504",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/*
          The publisher and site entities, emitted once for every route. Page
          level blocks reference these by `@id` rather than repeating them, so
          the whole site resolves to a single organisation in a knowledge graph.
        */}
        <JsonLd data={siteGraph} />
        <a
          href="#main"
          className="sr-only rounded-lg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
