import type { NextConfig } from "next";

/**
 * The site is deployed as fully static files to GitHub Pages behind a custom
 * domain, so there is no Node server at runtime. Everything must be
 * prerenderable at build time: no route handlers, no server actions, no ISR,
 * and no image optimizer.
 */
const config: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  // GitHub Pages serves directories, so /gifts/gifts-for-her/ needs to resolve
  // to an index.html rather than a bare extensionless file.
  trailingSlash: true,
  // No optimizer exists on static hosting. Site artwork is inline SVG, so this
  // only affects any raster image added later.
  images: { unoptimized: true },
  eslint: { dirs: ["src"] },
};

export default config;
