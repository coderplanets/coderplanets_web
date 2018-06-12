const dev = process.env.NODE_ENV !== 'production'
// const goal = process.env.GOAL

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const mobxReact = require('mobx-react')
const pathMatch = require('path-match')
const { basename } = require('path')
const accepts = require('accepts')
const glob = require('glob')

const app = next({
  dev,
  quiet: true,
  conf: { useFileSystemPublicRoutes: false },
})
const handle = app.getRequestHandler()
const route = pathMatch()

// const moduleAlias = require('module-alias')
// For the development version, we'll use React.
// Because, it support react hot loading and so on.
/*
   if (!dev) {
   moduleAlias.addAlias('react', 'preact-compat')
   moduleAlias.addAlias('react-dom', 'preact-compat')
   }
 */

// const langMatch = route('/lang/:name')
mobxReact.useStaticRendering(true)

const supportLanguages = glob
  .sync('./lang/*.json')
  .map(f => basename(f, '.json'))

const messageCache = new Map()
const getMessages = locale => {
  if (!messageCache.has(locale)) {
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */
    let langData = {}

    try {
      langData = require(`./lang/${locale}.json`)
      messageCache.set(locale, langData)
    } catch (e) {
      return { error: 'this lang is not supported' }
    }
  }
  return messageCache.get(locale)
}

// const homeQuery = route('/home/:name')
// const communityQuery = route('/:main')
const indexQuery = route('/:index')
const communityQuery = route('/:community/:thread')
const heartQuery = route('/_next/:page?')
const localeQuery = route('/locale/:lang')

app.prepare().then(() => {
  createServer((req, res) => {
    const urlParts = parse(req.url, true)
    const { pathname, query } = urlParts

    const accept = accepts(req)
    const locale = accept.language(supportLanguages) // 'zh'

    /* console.log('server pathname: ', pathname) */
    /* console.log('server query: ', query) */

    if (localeQuery(pathname)) {
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      return res.end(JSON.stringify(getMessages(localeQuery(pathname).lang)))
    } else if (heartQuery(pathname)) {
      return handle(req, res)
    } else if (indexQuery(pathname)) {
      return app.render(req, res, '/', query)
    } else if (communityQuery(pathname)) {
      console.log('goto community page: ', pathname)
      return app.render(req, res, '/community', query)
    }

    req.locale = locale
    req.messages = getMessages(locale)

    return handle(req, res)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
