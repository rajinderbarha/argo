import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Nodemailer uses Node built-ins / dynamic requires and must not be bundled
  // by Turbopack/webpack — load it as a normal Node module at runtime.
  serverExternalPackages: ["nodemailer"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache images well for performance, but allow revalidation so that
        // replacing an image at the same path propagates on the next deploy
        // (no "immutable", which would pin stale images for up to a year).
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
