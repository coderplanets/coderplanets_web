/* eslint-disable */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
/* eslint-enable */

const { ANALYZE } = process.env

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/home/i': { page: '/', query: { name: 'index' } },
    '/home/feature': { page: '/', query: { name: 'feature' } },
    '/home/theme': { page: '/', query: { name: 'theme' } },
    '/home/i18n': { page: '/', query: { name: 'i18n' } },
    '/home/example': { page: '/', query: { name: 'example' } },
    '/home/cmdpanel': { page: '/', query: { name: 'cmdpanel' } },
    '/home/graphql': { page: '/', query: { name: 'graphql' } },
    '/shop': { page: '/shop' },
  }),

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

    config.resolve.alias = {
      react: 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat',
    }

    return config
  },
}
