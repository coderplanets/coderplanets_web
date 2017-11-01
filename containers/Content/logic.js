// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Content')
/* eslint-enable no-unused-vars */

let content = null

export function someMethod() {}

export function init(selectedStore) {
  content = selectedStore
  debug('content', content)
}
