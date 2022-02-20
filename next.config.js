// const webpack = require('webpack')

// next-plugins
const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')()
const withPWA = require('next-pwa')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// next-plugins end

// if move pwa config to witPlugins, it will not work
const nextConfig = withPWA({
  // swcMinify: true,
  productionBrowserSourceMaps: false,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    register: true,
    // scope: '/cp',
    sw: 'sw.js',
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  // experimental: {
  //   outputStandalone: true,
  // },
})

module.exports = withPlugins([withBundleAnalyzer, withSourceMaps], nextConfig)
