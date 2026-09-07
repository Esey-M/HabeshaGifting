import type { MetadataRoute } from "next";
import { absoluteUrl, assetUrl, routes } from "@/lib/site";

/** Required under `output: export` — this file is emitted once at build time. */
export const dynamic = "force-static";

/**
 * Crawlers behind AI answer engines, listed explicitly.
 *
 * A bare `User-agent: *` already permits them, but several of these agents are
 * blocked by default by CDNs and by copy-pasted robots files, and an explicit
 * allow group is the documented way to opt in. The site is affiliate-funded
 * editorial: being quoted in an AI answer with attribution is distribution, not
 * leakage, so every one of these is welcome.
 */
const ANSWER_ENGINE_AGENTS = [
  // OpenAI: training, search index, and live user-initiated fetches.
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic.
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google's AI surfaces. Googlebot itself is covered by the wildcard group.
  "Google-Extended",
  "GoogleOther",
  // Microsoft Copilot rides Bingbot, which is also in the wildcard group.
  "Perplexity-User",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "meta-externalagent",
  "meta-externalfetcher",
  "MistralAI-User",
  "cohere-ai",
  "cohere-training-data-crawler",
  "YouBot",
  "Bytespider",
  "TikTokSpider",
  "CCBot",
  "Diffbot",
  "omgili",
  "Timpibot",
  "AI2Bot",
  "Kangaroo Bot",
  "PanguBot",
  "Webzio-Extended",
  "ImagesiftBot",
];

/**
 * The search page renders no unique content — it is a client-side filter over
 * pages that are already indexed individually — so it is kept out of the index
 * to avoid competing with them.
 */
const DISALLOW = [routes.search];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      {
        userAgent: ANSWER_ENGINE_AGENTS,
        allow: "/",
        disallow: DISALLOW,
      },
    ],
    sitemap: assetUrl("/sitemap.xml"),
    host: absoluteUrl("/").replace(/\/$/, ""),
  };
}
