import R from 'ramda'

export { makeDebugger } from './debug'

/* eslint-disable */
// TODO: document ?
export const Global = typeof window !== 'undefined' ? window : global

export const isObject = value => {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}
/* eslint-enable */

export const markStates = (sobj, self) => {
  if (!isObject(sobj)) {
    throw new Error('markState get no object params')
  }
  R.forEachObjIndexed((val, key) => {
    self[key] = val
  }, sobj)
}

// for styled
export const theme = R.curry(
  themepath => R.path(['theme', ...R.split('.', themepath)]) || 'white'
)

// see https://github.com/ramda/ramda/issues/1361
export const mapKeys = R.curry((fn, obj) => {
  return R.reduce(
    (acc, key) => {
      acc[fn(key)] = obj[key]
      return acc
    },
    {},
    R.keys(obj)
  )
})

export const notEmpty = R.compose(R.not, R.isEmpty)
export const isEmptyValue = R.compose(R.isEmpty, R.trim)

export const lengthE1 = R.compose(R.equals(1), R.length)
export const lengthE2 = R.compose(R.equals(2), R.length)

export const allNil = R.all(R.isNil)
export const anyNil = R.any(R.isNil)

export const focusDoraemonBar = () => {
  setTimeout(() => {
    // side effect
    /* eslint-disable no-undef */
    // has to use setTimeout
    // see: https://stackoverflow.com/questions/1096436/document-getelementbyidid-focus-is-not-working-for-firefox-or-chrome
    try {
      document.getElementById('doraemonInputbar').focus()
    } catch (e) {
      console.error(e)
    }
    /* eslint-enable no-undef */
  }, 0)
}

export const hideDoraemonBarRecover = () => {
  // side effect
  // onBlur will on focus the whole page, if not use this
  // openDoraemon will not work until you click the page
  /* eslint-disable no-undef */
  document.getElementById('whereCallShowDoraemon').click()
  /* eslint-enable no-undef */
}
