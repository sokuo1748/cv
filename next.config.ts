import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sokuo-cv',
  assetPrefix: '/sokuo-cv/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;