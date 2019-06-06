/* eslint-disable */
const webpack = require('webpack')

const withPlugins = require('next-compose-plugins')
const nextSourceMaps = require('@zeit/next-source-maps')
const withProgressBar = require('next-progressbar')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

require('dotenv').config()

const path = require('path')
const fs = require('fs')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Dotenv = require('dotenv-webpack')
/* eslint-enable */

// const { ANALYZE } = process.env

const nextConfig = {
  webpack: (config, { isServer, buildId }) => {
    config.plugins = config.plugins || []

    config.plugins.push(new webpack.IgnorePlugin(/(?:\/tests|__mocks)/))
    // moment locale size is too big
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/)
    )

    // for sentry
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      })
    )
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    if (fs.existsSync('./.env')) {
      config.plugins.push(
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        })
      )
    }

    // IE 11 polyfills
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./utils/polyfills')
      ) {
        entries['main.js'].unshift('./utils/polyfills')
      }

      return entries
    }

    return config
  },
}

module.exports = withPlugins(
  [withProgressBar, withBundleAnalyzer, nextSourceMaps],
  nextConfig
)
