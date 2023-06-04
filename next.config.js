/** @type {import('next').NextConfig} */
const nextConfig = {
  topLevelAwait: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    config.experiments = { ...config.experiments, topLevelAwait: true }

    return config
  },
}

module.exports = nextConfig
