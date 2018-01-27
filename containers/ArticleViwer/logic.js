// import R from 'ramda'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleViwer')
/* eslint-enable no-unused-vars */

let articleViwer = null

export function someMethod() {}

export function init(selectedStore) {
  articleViwer = selectedStore
  debug(articleViwer)
}
