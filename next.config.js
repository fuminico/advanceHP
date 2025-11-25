/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/advanceHP',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
