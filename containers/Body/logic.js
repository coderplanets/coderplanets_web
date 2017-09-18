import fetch from 'isomorphic-fetch'
import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('L:Body')

let store = null

export function changeTheme(name) {
  debug('changeTheme', name)
  store.changeTheme(name)
}

export function changeLocale(lang) {
  // debug('changeLocale', lang)
  // console.log('store.isLocaleExist: ', store.isLocaleExist(lang))

  if (!store.isLocaleExist(lang)) {
    fetch(`/locale/${lang}`)
      .then(res => res.json())
      .then(vals => {
        console.log('vals: ', vals)
        store.setLangMessages(lang, vals)
      })
  }
  store.changeLocale(lang)
}

export function init(selectStore) {
  store = selectStore
}
