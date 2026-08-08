import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.anbarexpo.com" }],
        destination: "https://anbarexpo.com/:path*",
        permanent: true,
      },
      {
        source: "/events/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/events",
        destination: "/",
        permanent: false,
      },
      {
        source: "/:legacy(exhibitors|visitors|media|partners|about)",
        destination: "/",
        permanent: false,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
