/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  output: 'export',
  // Configuration for GitHub Pages
  basePath: '/verde-vista',
  assetPrefix: '/verde-vista/',
}

module.exports = nextConfig 