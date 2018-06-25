import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:BodyLayout')
/* eslint-enable no-unused-vars */

let store = null

export function openDoraemon() {
  store.openDoraemon()
}

export function init(_store) {
  if (store) return false
  store = _store
}
