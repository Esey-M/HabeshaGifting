#!/usr/bin/env node
/**
 * IndexNow submission.
 *
 * IndexNow is the one way to push URLs at Bing (and therefore Copilot), Yandex
 * and Seznam without an account or an API key issued by anyone — ownership is
 * proved by hosting a key file at the site root, which `public/<key>.txt` does.
 * Google does not participate; Search Console is still the route there.
 *
 * Every URL in the sitemap is submitted, which is what the protocol expects for
 * a small site: it is a "these changed" ping, not a crawl budget request.
 *
 *   npm run indexnow          submit every URL in the live sitemap
 *   npm run indexnow -- --dry print what would be submitted
 *
 * Run it after a deploy has landed. The key file has to be reachable at the
 * live URL before the submission is accepted.
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const HOST = "habeshagifting.com";
const KEY = "8a2b5b3d7df1570912c0a98582bde686";
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const DRY = process.argv.includes("--dry");

/** Prefer the built sitemap; fall back to the live one if there is no build. */
async function sitemapUrls() {
  const local = path.join(process.cwd(), "out/sitemap.xml");
  const xml = existsSync(local)
    ? await readFile(local, "utf8")
    : await (await fetch(`https://${HOST}/sitemap.xml`)).text();

  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const urlList = await sitemapUrls();
  if (urlList.length === 0) {
    console.error("No URLs found in the sitemap.");
    process.exit(1);
  }

  console.log(`${urlList.length} URLs from the sitemap.`);

  // The key file must answer with the key before anything is submitted;
  // without it every URL is silently rejected as unverified.
  const keyUrl = `https://${HOST}/${KEY}.txt`;
  const probe = await fetch(keyUrl).catch(() => null);
  const served = probe?.ok ? (await probe.text()).trim() : null;

  if (served !== KEY) {
    console.error(`Key file not live yet at ${keyUrl} — deploy first, then rerun.`);
    if (!DRY) process.exit(1);
  } else {
    console.log(`Key file verified at ${keyUrl}`);
  }

  if (DRY) {
    for (const url of urlList) console.log(`  ${url}`);
    console.log("\n--dry: nothing submitted.");
    return;
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: keyUrl,
      urlList,
    }),
  });

  // 200 accepted, 202 accepted but the key is still being validated.
  if (response.ok) {
    console.log(`Submitted ${urlList.length} URLs — HTTP ${response.status}.`);
  } else {
    console.error(`Rejected — HTTP ${response.status} ${response.statusText}`);
    console.error(await response.text());
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
