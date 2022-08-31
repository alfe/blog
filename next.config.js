/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn-ak.f.st-hatena.com'],
  },
}

module.exports = nextConfig
