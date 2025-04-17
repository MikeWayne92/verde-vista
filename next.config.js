/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  output: 'export',
  // Adjust these values based on your GitHub username and repository name
  basePath: '/verde-vista',
  assetPrefix: '/verde-vista/',
}

module.exports = nextConfig 