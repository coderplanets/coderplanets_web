// const webpack = require('webpack')

// next-plugins
// const withPlugins = require('next-compose-plugins')
// const withPWA = require('next-pwa')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// next-plugins end

// if move pwa config to witPlugins, it will not work
const nextConfig = {
  swcMinify: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  // experimental: { appDir: true },

  // pwa: {
  //   dest: 'public',
  //   disable: process.env.NODE_ENV !== 'production',
  //   register: true,
  //   // scope: '/cp',
  //   sw: 'sw.js',
  // },
  // experimental: {
  //   outputStandalone: true,
  // },
}

module.exports = withBundleAnalyzer(nextConfig)
