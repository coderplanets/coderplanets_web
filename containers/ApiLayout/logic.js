// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ApiLayout')
/* eslint-enable no-unused-vars */

let apiLayout = null

export function someMethod() {}

export function init(selectedStore) {
  debug(apiLayout)
  apiLayout = selectedStore
}
