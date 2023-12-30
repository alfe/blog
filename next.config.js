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
        hostname:'opengraph.githubassets.com',
      },
      {
        protocol: 'http',
        port: '3000',
        hostname:'localhost',
      },
    ],
  },
}

module.exports = nextConfig
