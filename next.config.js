/* eslint-disable */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
/* eslint-enable */

const { ANALYZE } = process.env

// export example
// https://github.com/zeit/next.js/blob/canary/examples/with-static-export/next.config.js

module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      // '/ruby': { page: '/', query: { name: 'ruby' } },
      '/intro/i': { page: '/intro', query: { name: 'index' } },
      '/intro/feature': { page: '/intro', query: { name: 'feature' } },
      '/intro/theme': { page: '/intro', query: { name: 'theme' } },
      '/intro/i18n': { page: '/intro', query: { name: 'i18n' } },
      '/intro/example': { page: '/intro', query: { name: 'example' } },
      '/intro/cmdpanel': { page: '/intro', query: { name: 'cmdpanel' } },
      '/intro/graphql': { page: '/intro', query: { name: 'graphql' } },
    }
  },

  webpack: (config, { dev }) => {
    // For the development version, we'll use React.
    // Because, it supports react hot loading and so on.
    if (dev) {
      return config
    }

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      )
      return config
    }

    /* not compatible with react 16x
    config.resolve.alias = {
      react: 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat',
    }
    */

    return config
  },
}
