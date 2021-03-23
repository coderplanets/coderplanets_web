import store from 'store'
import Cookies from 'js-cookie'
import { path } from 'ramda'

/* eslint-disable */
const _has_key = (cookie: string, key: string): boolean => {
  return new RegExp(
    '(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=',
  ).test(cookie)
}

// NOTE: this is used only in next's getInitialProps function
// because getInitialProps is runing on server, do not hove browser cookie
const from_req = (req: Record<string, unknown>, key: string): string => {
  const cookie: string = path(['headers', 'cookie'], req)
  if (!cookie || !key || !_has_key(cookie, key)) {
    return null
  }
  const regexpStr =
    '(?:^|.*;\\s*)' +
    escape(key).replace(/[\-\.\+\*]/g, '\\$&') +
    '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
  // @ts-ignore
  return unescape(cookie.replace(new RegExp(regexpStr), '$1'))
}
/* eslint-enable */

// js-cookie details: https://github.com/js-cookie/js-cookie
// store.js details: https://github.com/marcuswestin/store.js
const BStore = {
  // NOTE: if store json, JSON.parse is not need
  // is the json is valid, result will be the json, otherwise it will be string
  get: (value: string, optional?: string): string => store.get(value, optional),
  set: (key: string, value: string): string => store.set(key, value),
  remove: (key: string): string => store.remove(key),
  clearAll: (): void => store.clearAll(),
  cookie: {
    from_req: (req: Record<string, unknown>, key: string): string =>
      from_req(req, key),
    set: (key: string, val: string, opt = {}): string =>
      Cookies.set(key, val, opt),
    get: (key: string): string => Cookies.get(key),
    remove: (key: string): void => Cookies.remove(key),
  },
}

export default BStore
