import store from 'store'
import { setCookies, getCookie, removeCookies } from 'cookies-next'

// js-cookie details: https://github.com/js-cookie/js-cookie
// store.js details: https://github.com/marcuswestin/store.js
const BStore = {
  // NOTE: if store json, JSON.parse is not need
  // is the json is valid, result will be the json, otherwise it will be string
  get: (value: string, optional?: string): string => store.get(value, optional),
  set: (key: string, value: string): void => store.set(key, value),
  remove: (key: string): void => store.remove(key),
  clearAll: (): void => store.clearAll(),
  cookie: {
    ssrGet: (context, key) => {
      return getCookie(key, context) as string | undefined
    },
    ssrSet: (context, key, value): void => {
      return setCookies(key, value, context)
    },
    ssrRemove: (context, key) => {
      const { req, res } = context

      removeCookies(key, { req, res })
    },
    set: (key, value) => setCookies(key, value),
    remove: (key) => removeCookies(key),
  },
}

export default BStore
