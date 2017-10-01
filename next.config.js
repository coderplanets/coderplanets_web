module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/home/i': { page: '/', query: { name: 'index' } },
    '/home/feature': { page: '/', query: { name: 'feature' } },
    '/home/theme': { page: '/', query: { name: 'theme' } },
    '/home/i18n': { page: '/', query: { name: 'i18n' } },
    '/home/example': { page: '/', query: { name: 'example' } },
    '/shop': { page: '/shop' },
  }),

  /*
  webpack: (config, { dev }) => {
    // For the development version, we'll use React.
    // Because, it supports react hot loading and so on.
    if (dev) {
      return config
    }

    config.resolve.alias = {
      react: 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat',
    }

    return config
  },
  */
}
