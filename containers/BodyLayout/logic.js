import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:BodyLayout')
/* eslint-enable no-unused-vars */

let bodylayout = null

export function openDoraemon() {
  bodylayout.openDoraemon()
}

export function init(selectedStore) {
  bodylayout = selectedStore
}
