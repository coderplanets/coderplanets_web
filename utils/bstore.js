import store from 'store'
import Cookies from 'js-cookie'
import R from 'ramda'

/* eslint-disable */
function _has_key(cookie, key) {
  return new RegExp(
    '(?:^|;\\s*)' + escape(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\='
  ).test(cookie)
}

// NOTE: this is used only in next's getInitialProps function
// because getInitialProps is runing on server, do not hove browser cookie
function from_req(req, key) {
  const cookie = R.path(['headers', 'cookie'], req)
  if (!cookie || !key || !_has_key(cookie, key)) {
    return null
  }
  const regexpStr =
    '(?:^|.*;\\s*)' +
    escape(key).replace(/[\-\.\+\*]/g, '\\$&') +
    '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
  return unescape(cookie.replace(new RegExp(regexpStr), '$1'))
}
/* eslint-enable */

// js-cookie details: https://github.com/js-cookie/js-cookie
// store.js details: https://github.com/marcuswestin/store.js
const BStore = {
  // NOTE: if store json, JSON.parse is not need
  // is the json is valid, result will be the json, otherwise it will be string
  get: (value, optional) => store.get(value, optional),
  set: (key, value) => store.set(key, value),
  remove: key => store.remove(key),
  clearAll: () => store.clearAll(),
  cookie: {
    from_req: (req, key) => from_req(req, key),
    set: (key, val, opt = {}) => Cookies.set(key, val, opt),
    get: key => Cookies.get(key),
    remove: key => Cookies.remove(key),
  },
}

export default BStore
