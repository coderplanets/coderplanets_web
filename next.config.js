/* eslint-disable */
const webpack = require('webpack')

require('dotenv').config()
const path = require('path')
const fs = require('fs')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Dotenv = require('dotenv-webpack')

/* eslint-enable */

const { ANALYZE } = process.env

module.exports = {
  // https://github.com/zeit/next.js/blob/canary/examples/with-static-export/next.config.js
  // exportPathMap: () => {},

  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || []

    config.plugins.push(new webpack.IgnorePlugin(/(?:\/tests|__mocks)/))
    // moment locale size is too big
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/)
    )

    // see https://github.com/RubyLouvre/anu/issues/640
    /*
       config.resolve.alias = {
       react: 'anujs',
       'react-dom': 'anujs',
       'prop-types': 'anujs/lib/ReactPropTypes',
       'create-react-class': 'anujs/lib/createClass',
       }
     */

    // .babelrc
    /*
       "react-dom/server": "./node_modules/anujs/dist/React/server",
       "react": "./node_modules/anujs",
       "prop-types": "./node_modules/anujs/lib/ReactPropTypes"
     */

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
