const dev = process.env.NODE_ENV !== 'production'
// const goal = process.env.NODE_ENV

const next = require('next')
const express = require('express')
const LRUCache = require('lru-cache')
const helmet = require('helmet')
const mobxReact = require('mobx-react')
const R = require('ramda')

// import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
// const { express: voyagerMiddleware } = require('graphql-voyager/middleware')

const app = next({ dev, quiet: false })
const handle = app.getRequestHandler()
const SERVE_PORT = process.env.SERVE_PORT || 3000
const HOME_PAGE = '/home/posts'

// SSR for mobx
mobxReact.useStaticRendering(true)

// SSR for mobx
mobxReact.useStaticRendering(true)

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 1000, // cache item count
  // maxAge: 1000 * 60 * 60, // 1hour
  maxAge: 1000 * 30, // 30 ses
})

app.prepare().then(() => {
  const server = express()
  // redirect all the www request to non-www addr
  server.use(reDirectToNakedUrl)
  server.use(express.static('static'))
  server.use(helmet())
  /*
  server.use(
    '/model-graphs',
    voyagerMiddleware({ endpointUrl: 'https://api.coderplanets.com/graphiql' })
  )
  */

  server.get('/_next/:page?', (req, res) => handle(req, res))

  server.get('/', (req, res) => res.redirect(HOME_PAGE))

  // app.render(req, res, '/user', req.query)
  server.get('/user/:userId', (req, res) =>
    renderAndCache(req, res, '/user', req.query)
  )

  server.get('/:community/post/:id', (req, res) =>
    renderAndCache(req, res, '/post', req.query)
  )

  server.get('/:community/job/:id', (req, res) =>
    renderAndCache(req, res, '/job', req.query)
  )

  server.get('/:community/video/:id', (req, res) =>
    renderAndCache(req, res, '/video', req.query)
  )

  server.get('/:community/repo/:id', (req, res) =>
    renderAndCache(req, res, '/repo', req.query)
  )

  server.get('/communities', (req, res) => res.redirect('/communities/pl'))

  server.get('/communities/:category', (req, res) =>
    renderAndCache(req, res, '/communities', req.query)
  )

  server.get('/:community/:thread', (req, res) => {
    if (
      R.has('preview', req.query) &&
      R.has('id', req.query) &&
      R.has('community', req.query)
    ) {
      const { community, preview, id } = req.query
      return res.redirect(`/${community}/${preview}/${id}`)
    }

    return renderAndCache(req, res, '/community', req.query)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(SERVE_PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${SERVE_PORT}`)
  })
})

// redirect all the www request to non-www addr
const reDirectToNakedUrl = (req, res, next) => {
  const w3 = 'www.'
  const { protocol: ptl, hostname: host, originalUrl } = req

  if (host.indexOf(w3) === 0) {
    const nakedUrl = `${ptl}://${host.slice(w3.length)}:80${originalUrl}`
    console.log('redirect nakedUrl: ', nakedUrl)
    return res.redirect(301, nakedUrl)
  }

  next()
}

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
const getCacheKey = req => `${req.url}`

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
