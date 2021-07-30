const webpack = require('webpack')

// next-plugins
const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')()
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const offlineConfig = require('./config/next_offline')

// Use the SentryWebpack plugin to upload the source maps during build step
// const SentryWebpackPlugin = require('@sentry/webpack-plugin')

// const {
//   NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
//   SENTRY_ORG,
//   SENTRY_PROJECT,
//   SENTRY_AUTH_TOKEN,
//   NODE_ENV,
// } = process.env

// process.env.SENTRY_DSN = SENTRY_DSN

// next-plugins end

const nextConfig = {
  webpack: (config, { isServer, buildId }) => {
    config.plugins = config.plugins || []

    config.plugins.push(new webpack.IgnorePlugin(/(?:\/tests|__mocks)/))
    // moment locale size is too big
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
    )

    return config
  },
}

module.exports = withPlugins(
  [withBundleAnalyzer, withSourceMaps, [withOffline, offlineConfig]],
  nextConfig,
)
