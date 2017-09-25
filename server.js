const dev = process.env.NODE_ENV !== 'production'

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const mobxReact = require('mobx-react')
const pathMatch = require('path-match')
const { basename } = require('path')
const accepts = require('accepts')
const glob = require('glob')

const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()

const moduleAlias = require('module-alias')
// For the development version, we'll use React.
// Because, it support react hot loading and so on.
if (!dev) {
  moduleAlias.addAlias('react', 'preact-compat')
  moduleAlias.addAlias('react-dom', 'preact-compat')
}

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
      // console.log('langData: ', langData)
      messageCache.set(locale, langData)
    } catch (e) {
      return { error: 'this lang is not supported' }
    }
  }
  return messageCache.get(locale)
}

const homeQuery = route('/home/:name')
const localeQuery = route('/locale/:lang')

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)
    const homeMatch = homeQuery(pathname)
    const localeMatch = localeQuery(pathname)

    const accept = accepts(req)
    const locale = accept.language(supportLanguages) // 'zh'

    if (localeMatch) {
      //      console.log('localeMatch: ', localeMatch)
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      return res.end(JSON.stringify(getMessages(localeMatch.lang)))
    }

    req.locale = locale
    req.messages = getMessages(locale)

    if (homeMatch) {
      // console.log('getMessages(locale) : ', getMessages(locale))
      return app.render(req, res, '/', homeMatch)
    }
    // now index page go this way
    return handle(req, res)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
