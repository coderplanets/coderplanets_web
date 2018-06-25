// import R from 'ramda'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobsViewer')
/* eslint-enable no-unused-vars */

let store = null

export function someMethod() {}

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
}
