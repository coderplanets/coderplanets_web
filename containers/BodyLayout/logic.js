import { makeDebugger } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('L:BodyLayout')

let store = null

export function openDoraemon() {
  store.openDoraemon()
}

export function init(_store) {
  if (store) return false
  store = _store
}
