import fetch from 'isomorphic-fetch'
import { makeDebugger } from '../../utils'

const debug = makeDebugger('L:IntroBody')

let body = null

export function openPreview() {
  body.openPreview()
}

export function changeTheme(name) {
  debug('changeTheme', name)
  body.changeTheme(name)
}

export function changeLocale(lang) {
  // debug('changeLocale', lang)

  if (!body.isLocaleExist(lang)) {
    debug('process.env.NODE_ENV:', process.env.NODE_ENV)
    const localeUrl =
      process.env.NODE_ENV === 'development'
        ? `/locale/${lang}`
        : `/static/locales/${lang}.json`
    fetch(localeUrl)
      .then(res => res.json())
      .then(vals => {
        body.setLangMessages(lang, vals)
        body.changeLocale(lang)
      })
  } else {
    body.changeLocale(lang)
  }
}

export function openDoraemon() {
  body.openDoraemon()
}

export function init(selectedStore) {
  body = selectedStore
}
