import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cv',
  assetPrefix: '/cv/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;