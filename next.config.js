/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: './',
  images: { loader: 'custom' },
}

module.exports = nextConfig
