const dev =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'ci'

const cacheableResponse = require('cacheable-response')

const app = require('./app')
const CONFIG = require('../config/config.json')

const renderAndCache = ({ req, res, path }) => {
  // do not cache in dev mode
  if (dev) {
    const pagePath = path || req.path
    return app.render(req, res, pagePath, {
      ...req.query,
      ...req.params,
    })
  }

  return cacheableResponse({
    ttl: CONFIG.SSR_CACHE_TIME,
    get: async ({ req, res, path }) => {
      const pagePath = path || req.path
      const data = await app.renderToHTML(req, res, pagePath, {
        ...req.query,
        ...req.params,
      })

      // Add here custom logic for when you do not want to cache the page, for
      // example when the page returns a 404 status code:
      if (res.statusCode === 404) {
        res.end(data)
        return
      }

      return { data }
    },
    send: ({ data, res }) => res.send(data),
  })({ req, res, path })
}

// redirect all the www request to non-www addr
const redirectToNakedUrl = (req, res, next) => {
  const w3 = 'www.'
  const { protocol: ptl, hostname: host, originalUrl } = req

  if (host.indexOf(w3) === 0) {
    const nakedUrl = `${ptl}://${host.slice(w3.length)}:80${originalUrl}`
    return res.redirect(301, nakedUrl)
  }

  next()
}

module.exports = {
  renderAndCache,
  redirectToNakedUrl,
}
