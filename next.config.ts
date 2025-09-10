import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.math-ai.dev',
        port: '',
        pathname: '/**',
      },
    ],

  },
};

export default nextConfig;
