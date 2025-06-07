/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    largePageDataBytes: 512 * 100000,
  },
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'cdn-ak.f.st-hatena.com',
      },
      {
        protocol: 'https',
        hostname:'cdn-ak2.f.st-hatena.com',
      },
      {
        protocol: 'https',
        hostname:'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname:'m.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname:'blog.alfebelow.com',
      },
      {
        protocol: 'https',
        hostname:'alfebelow.com',
      },
      {
        protocol: 'https',
        hostname:'opengraph.githubassets.com',
      },
      {
        protocol: 'http',
        port: '3000',
        hostname:'localhost',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
