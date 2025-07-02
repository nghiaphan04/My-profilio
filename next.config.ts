import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media2.giphy.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'media4.giphy.com',
        pathname: '/media/**',
      },
      
    ],
  },
};

export default nextConfig;
