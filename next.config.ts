
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
       {
        protocol: 'https',
        hostname: 'storage2.me-qr.com',
      }
    ],
  },
};

export default nextConfig;
