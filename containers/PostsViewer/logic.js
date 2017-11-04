// import R from 'ramda'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostsViewer')
/* eslint-enable no-unused-vars */

let postsViewer = null

export function someMethod() {}

export function init(selectedStore) {
  debug(postsViewer)
  postsViewer = selectedStore
}
