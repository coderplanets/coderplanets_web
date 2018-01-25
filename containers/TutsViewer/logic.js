// import R from 'ramda'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TutsViewer')
/* eslint-enable no-unused-vars */

let tutsViewer = null

export function someMethod() {}

export function init(selectedStore) {
  debug(tutsViewer)
  tutsViewer = selectedStore
}
