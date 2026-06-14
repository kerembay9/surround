import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure marketing page, no server — emit a fully static site to `out/`,
  // hostable on any static host (GitHub Pages, Netlify, Vercel, S3).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
