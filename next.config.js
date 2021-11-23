// const webpack = require('webpack')

// next-plugins
const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')()
// const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// const offlineConfig = require('./config/next_offline')

// next-plugins end

const nextConfig = {}

module.exports = withPlugins(
  // [withBundleAnalyzer, withSourceMaps, [withOffline, offlineConfig]],
  [withBundleAnalyzer, withSourceMaps],
  nextConfig,
)
