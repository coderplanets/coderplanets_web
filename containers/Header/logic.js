// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Header')
/* eslint-enable no-unused-vars */

let header = null

export function openPreview(type) {
  header.openPreview(type)
}

export function openDoraemon() {
  header.openDoraemon()
}

export function init(selectedStore) {
  header = selectedStore
}
