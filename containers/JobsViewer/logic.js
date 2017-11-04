// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobsViewer')
/* eslint-enable no-unused-vars */

let jobsViewer = null

export function someMethod() {}

export function init(selectedStore) {
  debug(jobsViewer)
  jobsViewer = selectedStore
}
