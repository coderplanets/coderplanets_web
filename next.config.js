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
    console.log('config dev: ', dev)

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

    return config
  },
}
