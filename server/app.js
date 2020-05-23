const dev =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'ci'

const next = require('next')

const app = next({ dev, quiet: false })

module.exports = app
