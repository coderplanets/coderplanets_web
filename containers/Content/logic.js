// import R from 'ramda'

import { makeDebugger } from '@utils'

/* eslint-disable-next-line */
const debug = makeDebugger('L:Content')

let store = null

export const holder = false

export const init = _store => {
  if (store) return false
  store = _store
  /* debug('content', content) */
}
