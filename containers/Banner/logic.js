// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Banner')
/* eslint-enable no-unused-vars */

let banner = null

export function someMethod() {
  debug(banner)
}

export function init(selectedStore) {
  banner = selectedStore
}
