// import R from 'ramda'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Content')
/* eslint-enable no-unused-vars */

let store = null

export const holder = false

export function init(_store) {
  if (store) return false
  store = _store
  /* debug('content', content) */
}
