exports.exportPathMap = () => ({
  '/': { page: '/' },
  '/home/i': { page: '/', query: { name: 'index' } },
  '/home/feature': { page: '/', query: { name: 'feature' } },
  '/home/theme': { page: '/', query: { name: 'theme' } },
  '/home/i18n': { page: '/', query: { name: 'i18n' } },
  '/home/example': { page: '/', query: { name: 'example' } },
  '/shop': { page: '/shop' },
})
