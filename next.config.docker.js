const webpack = require('webpack')

const path = require('path')
const fs = require('fs')
const Dotenv = require('dotenv-webpack')
require('dotenv').config()

// next-plugins
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const withOffline = require('next-offline')

const offlineConfig = require('./config/next_offline')
// next-plugins end

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

    return config
  },
}

module.exports = withPlugins(
  [withCSS, withSourceMaps, [withOffline, offlineConfig]],
  nextConfig
)
