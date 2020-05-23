const dev =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'ci'

const cacheableResponse = require('cacheable-response')
const uuidv4 = require('uuid/v4')

const app = require('./app')
const CONFIG = require('../config/config.json')

const renderAndCache = cacheableResponse({
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
})

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

// for sentry
const sessionCookie = (req, res, next) => {
  const htmlPage =
    !req.path.match(/^\/(_next|static)/) &&
    !req.path.match(/\.(js|map)$/) &&
    req.accepts('text/html', 'text/css', 'image/png') === 'text/html'

  if (!htmlPage) {
    next()
    return
  }

  if (!req.cookies.sid || req.cookies.sid.length === 0) {
    req.cookies.sid = uuidv4()
    res.cookie('sid', req.cookies.sid)
  }

  next()
}

const sourcemapsForSentryOnly = token => (req, res, next) => {
  // In production we only want to serve source maps for sentry
  if (!dev && !!token && req.headers['x-sentry-token'] !== token) {
    res
      .status(401)
      .send('Authentication access token is required to access the source map.')
    return
  }
  next()
}

module.exports = {
  renderAndCache,
  redirectToNakedUrl,
  sessionCookie,
  sourcemapsForSentryOnly,
}
