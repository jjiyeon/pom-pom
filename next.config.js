/** @type {import('next').NextConfig} */
const nextConfig = {
  topLevelAwait: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
