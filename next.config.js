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
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env

process.env.SENTRY_DSN = SENTRY_DSN

// next-plugins end

const nextConfig = {
  webpack: (config, { isServer, buildId }) => {
    config.plugins = config.plugins || []

    config.plugins.push(new webpack.IgnorePlugin(/(?:\/tests|__mocks)/))
    // moment locale size is too big
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
    )

    // for sentry
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      }),
    )
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    // When all the Sentry configuration env variables are available/configured
    // The Sentry webpack plugin gets pushed to the webpack plugins to build
    // and upload the source maps to sentry.
    // This is an alternative to manually uploading the source maps
    // Note: This is disabled in development mode.
    if (
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN &&
      NODE_ENV === 'production'
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          urlPrefix: '~/_next',
          release: buildId,
        }),
      )
    }

    return config
  },
}

module.exports = withPlugins(
  [withBundleAnalyzer, withSourceMaps, [withOffline, offlineConfig]],
  nextConfig,
)
