import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cv',
  assetPrefix: '/cv/',
  images: {
    unoptimized: true,
  },
  env: {
  NEXT_PUBLIC_BASE_PATH: '/cv',
},
};

export default nextConfig;