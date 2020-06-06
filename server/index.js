/**
 *
 * this server is only used for next.js SSR
 * the 'real' api server is coderplanets_server:
 * https://github.com/coderplanets/coderplanets_server
 *
 */

const express = require('express')
const cookieParser = require('cookie-parser')
const responseTime = require('response-time')
const mobxReact = require('mobx-react')
// inspect graphql model
const { express: voyagerMiddleware } = require('graphql-voyager/middleware')
// i18n setup
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('../i18n')

const app = require('./app')
const {
  redirectToNakedUrl,
  sessionCookie,
  sourcemapsForSentryOnly,
} = require('./helper')

const CONFIG = require('../config/config.json')

// const app = next({ dev, quiet: false })
const SERVE_PORT = process.env.SERVE_PORT || 3000

// SSR for mobx
mobxReact.useStaticRendering(true)
;(async () => {
  await app.prepare()
  const server = express()

  // const server = express()
  /* eslint-disable-next-line */
  const { Sentry } = require('../src/services/sentry')({ release: app.buildId })

  server.use(Sentry.Handlers.requestHandler())
  server.use(cookieParser())
  server.use(responseTime())
  server.use(sessionCookie)
  server.get(/\.map$/, sourcemapsForSentryOnly(process.env.SENTRY_TOKEN))

  // redirect all the www request to non-www addr
  server.use(redirectToNakedUrl)
  server.use(express.static('public'))
  server.use(
    '/model-graphs',
    voyagerMiddleware({ endpointUrl: CONFIG.GRAPHQL_ENDPOINT })
  )

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  // eslint-disable-next-line global-require
  server.use('/', require('./routes'))

  // This handles errors if they are thrown before reaching the app
  server.use(Sentry.Handlers.errorHandler())

  await server.listen(SERVE_PORT)
  console.log(`> Ready on http://localhost:${SERVE_PORT}`)
})()
