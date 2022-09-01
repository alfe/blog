/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn-ak.f.st-hatena.com',
      'cdn-ak2.f.st-hatena.com',
      'lh3.googleusercontent.com',
      'blog.alfebelow.com',
      'localhost',
    ],
  },
}

module.exports = nextConfig
