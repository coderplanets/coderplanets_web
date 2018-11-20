const dev = process.env.NODE_ENV !== 'production'
// const goal = process.env.NODE_ENV

const next = require('next')
const express = require('express')
const LRUCache = require('lru-cache')
const mobxReact = require('mobx-react')

const app = next({ dev, quiet: false })
const handle = app.getRequestHandler()
const SERVE_PORT = process.env.SERVE_PORT || 3000

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 1000, // cache item count
  // maxAge: 1000 * 60 * 60, // 1hour
  maxAge: 1000 * 30, // 30 ses
})

mobxReact.useStaticRendering(true)

const HOME_PAGE = '/home/posts'
app.prepare().then(() => {
  const server = express()
  server.use(express.static('static'))

  server.get('/_next/:page?', (req, res) => handle(req, res))

  server.get('/', (req, res) => {
    console.log('match me root')

    return res.redirect(HOME_PAGE)
  })

  server.get('/user/:userId', (req, res) => {
    console.log('match me user')
    // return app.render(req, res, '/user', req.query)
    return renderAndCache(req, res, '/user', req.query)
  })

  server.get('/post/:id', (req, res) => {
    console.log('match me post')
    /* return app.render(req, res, '/post', req.query) */
    return renderAndCache(req, res, '/post', req.query)
  })

  server.get('/job/:id', (req, res) => {
    console.log('match me job')
    /* return app.render(req, res, '/job', req.query) */
    return renderAndCache(req, res, '/job', req.query)
  })

  server.get('/video/:id', (req, res) => {
    console.log('match me video')
    /* return app.render(req, res, '/video', req.query) */
    return renderAndCache(req, res, '/video', req.query)
  })

  server.get('/repo/:id', (req, res) => {
    console.log('match me repo')
    /* return app.render(req, res, '/repo', req.query) */
    return renderAndCache(req, res, '/repo', req.query)
  })

  server.get('/communities', (req, res) => {
    console.log('match me communities index')
    /* return app.render(req, res, '/communities', req.query) */
    return res.redirect('/communities/pl')
    // return renderAndCache(req, res, '/communities/pl', req.query)
  })

  server.get('/communities/:category', (req, res) => {
    console.log('match me communities: ', req.query)
    /* return app.render(req, res, '/communities', req.query) */
    return renderAndCache(req, res, '/communities', req.query)
  })

  server.get('/:community/:thread', (req, res) => {
    console.log('match me community')
    /* return app.render(req, res, '/community', req.query) */
    return renderAndCache(req, res, '/community', req.query)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(SERVE_PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${SERVE_PORT}`)
  })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`
}

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
