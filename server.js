const dev =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'ci'

const next = require('next')
const express = require('express')
const cacheableResponse = require('cacheable-response')

const cookieParser = require('cookie-parser')
const uuidv4 = require('uuid/v4')
const responseTime = require('response-time')

const helmet = require('helmet')
const mobxReact = require('mobx-react')
const R = require('ramda')

// inspect graphql model
const { express: voyagerMiddleware } = require('graphql-voyager/middleware')

// i18n staff
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')

const CONFIG = require('./config/config.json')

const app = next({ dev, quiet: false })
const handle = app.getRequestHandler()
const SERVE_PORT = process.env.SERVE_PORT || 3000
const HOME_PAGE = '/home/posts'

// SSR for mobx
// TODO:  remove it ?
mobxReact.useStaticRendering(true)

const renderAndCache = cacheableResponse({
  ttl: CONFIG.SSR_CACHE_TIME,
  get: async ({ req, res, pagePath, queryParams }) => {
    const reqPath = pagePath || req.path
    const reqQuery = queryParams || req.query
    const data = await app.renderToHTML(req, res, reqPath, reqQuery)

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

// eslint-disable-next-line prettier/prettier
;(async () => {
  await app.prepare()
  const server = express()

  // const server = express()
  /* eslint-disable-next-line */
  // const { Sentry } = require('./src/services/sentry')({ release: app.buildId })

  // server.use(Sentry.Handlers.requestHandler())
  server.use(cookieParser())
  // server.use(responseTime())
  // server.use(sessionCookie)
  // server.get(/\.map$/, sourcemapsForSentryOnly(process.env.SENTRY_TOKEN))

  // redirect all the www request to non-www addr
  server.use(reDirectToNakedUrl)
  server.use(express.static('public'))
  server.use(helmet())
  server.use(
    '/model-graphs',
    voyagerMiddleware({ endpointUrl: CONFIG.GRAPHQL_ENDPOINT })
  )

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  server.get('/_next/:page?', (req, res) => handle(req, res))

  server.get('/', (req, res) => res.redirect(HOME_PAGE))

  server.get('/editor', (req, res) =>
    app.render(req, res, '/editor', req.query)
  )

  server.get('/oauth/', (req, res) => renderAndCache({ req, res }))
  server.get('/sentry/', (req, res) => renderAndCache({ req, res }))

  server.get('/meetups/', (req, res) => renderAndCache({ req, res }))
  server.get('/meetups/*', (req, res) => renderAndCache({ req, res }))

  server.get('/have-a-drink/', (req, res) => renderAndCache({ req, res }))
  server.get('/have-a-drink/*', (req, res) => renderAndCache({ req, res }))

  server.get('/cool-guide/', (req, res) => renderAndCache({ req, res }))
  server.get('/cool-guide/*', (req, res) => renderAndCache({ req, res }))

  server.get('/works/', (req, res) => renderAndCache({ req, res }))
  server.get('/works/*', (req, res) => renderAndCache({ req, res }))

  server.get('/trending/', (req, res) => renderAndCache({ req, res }))
  server.get('/trending/*', (req, res) => renderAndCache({ req, res }))

  server.get('/sponsor/', (req, res) => renderAndCache({ req, res }))
  server.get('/sponsor/*', (req, res) => renderAndCache({ req, res }))

  server.get('/recipes/', (req, res) => renderAndCache({ req, res }))
  server.get('/recipes/*', (req, res) => renderAndCache({ req, res }))

  server.get('/interview/', (req, res) => renderAndCache({ req, res }))
  server.get('/interview/*', (req, res) => renderAndCache({ req, res }))

  server.get('/service-worker.js', (req, res) =>
    res.sendFile(`${__dirname}/.next/service-worker.js`)
  )

  // app.render(req, res, '/user', req.query)
  server.get('/user/:userId', (req, res) => {
    const pagePath = '/user'
    return renderAndCache({ req, res, pagePath })
  })

  server.get('/:community/post/:id', (req, res) => {
    const pagePath = '/post'
    return renderAndCache({ req, res, pagePath })
  })

  server.get('/:community/job/:id', (req, res) => {
    const pagePath = '/job'
    return renderAndCache({ req, res, pagePath })
  })

  server.get('/:community/video/:id', (req, res) => {
    const pagePath = '/video'
    return renderAndCache({ req, res, pagePath })
  })

  server.get('/:community/repo/:id', (req, res) => {
    const pagePath = '/repo'
    return renderAndCache({ req, res, pagePath })
  })

  server.get('/communities', (req, res) => res.redirect('/communities/pl'))
  server.get('/communities/new', (req, res) => renderAndCache({ req, res }))

  server.get('/communities/:category', (req, res) => {
    const pagePath = '/communities'
    return renderAndCache({ req, res, pagePath })
  })

  server.get('/:community/:thread', (req, res) => {
    if (
      R.has('preview', req.query) &&
      R.has('id', req.query) &&
      R.has('community', req.query)
    ) {
      const { community, preview, id } = req.query
      return res.redirect(`/${community}/${preview}/${id}`)
    }

    const pagePath = '/community'
    return renderAndCache({ req, res, pagePath })
  })

  server.get('*', (req, res) => handle(req, res))

  await server.listen(SERVE_PORT)
  console.log(`> Ready on http://localhost:${SERVE_PORT}`)
})()

// redirect all the www request to non-www addr
const reDirectToNakedUrl = (req, res, next) => {
  const w3 = 'www.'
  const { protocol: ptl, hostname: host, originalUrl } = req

  if (host.indexOf(w3) === 0) {
    const nakedUrl = `${ptl}://${host.slice(w3.length)}:80${originalUrl}`
    return res.redirect(301, nakedUrl)
  }

  next()
}

// for sentry
function sessionCookie(req, res, next) {
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
