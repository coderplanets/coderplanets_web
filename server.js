const dev = process.env.NODE_ENV !== 'production'

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const mobxReact = require('mobx-react')
const pathMatch = require('path-match')

const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()

// const langMatch = route('/lang/:name')
const homeMatch = route('/home/:name')

mobxReact.useStaticRendering(true)

app.prepare().then(() => {
  createServer((req, res) => {
    /* const parsedUrl = parse(req.url, true) */
    /* handle(req, res, parsedUrl) */

    const { pathname } = parse(req.url)
    const params = homeMatch(pathname)

    if (params === false) {
      //    console.log('not match')
      handle(req, res)
      return
    }
    // if match go this way
    app.render(req, res, '/', params)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
