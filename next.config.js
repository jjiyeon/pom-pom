/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  compilerOptions: {
    module: 'NodeNext',
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    config.experiments = { ...config.experiments, topLevelAwait: true }

    return config
  },
}

module.exports = nextConfig
