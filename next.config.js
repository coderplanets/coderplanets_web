/* eslint-disable */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Dotenv = require('dotenv-webpack')
/* eslint-enable */
const { ANALYZE } = process.env
// export example
// https://github.com/zeit/next.js/blob/canary/examples/with-static-export/next.config.js

module.exports = {
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      // '/ruby': { page: '/', query: { name: 'ruby' } },
      '/js/posts': { page: '/', query: { main: 'js', sub: 'posts' } },
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

    /*
    config.module.rules.push({
      test: /\.md$/,
      loader: 'raw-loader',
    })
    */
    /*
    config.module.rules.push(
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        use: 'url-loader',
      }
    )
    */

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

    config.plugins.push(
      new Dotenv({
        path: './.env',
      })
    )

    return config
  },
}
