/* eslint-disable */
require('dotenv').config()
const path = require('path')
const fs = require('fs')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Dotenv = require('dotenv-webpack')
const withCSS = require('@zeit/next-css')

/* eslint-enable */

const { ANALYZE } = process.env

module.exports = withCSS({
  // https://github.com/zeit/next.js/blob/canary/examples/with-static-export/next.config.js
  // exportPathMap: () => {},

  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || []

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      )
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
})
