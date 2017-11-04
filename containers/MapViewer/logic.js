// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:MapViewer')
/* eslint-enable no-unused-vars */

let mapViewer = null

export function someMethod() {}

export function init(selectedStore) {
  debug(mapViewer)
  mapViewer = selectedStore
}
