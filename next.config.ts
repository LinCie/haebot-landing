import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          `${process.env.BACKEND_URL}/:path*` ||
          "https://api.haebot.com/:path*",
      },
    ];
  },
};

export default nextConfig;
