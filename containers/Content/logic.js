// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Content')
/* eslint-enable no-unused-vars */

let content = null

export const holder = false

export function init(selectedStore) {
  debug(content)
  content = selectedStore
  // debug('content', content)
}
