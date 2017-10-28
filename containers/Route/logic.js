import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Route')
/* eslint-enable no-unused-vars */

let route = null

export function syncRoute(current) {
  // const { query, asPath, pathname } = current
  const { asPath, pathname } = current
  route.markState({
    pathname,
    // query,
    asPath,
  })
}

export function init(selectedStore) {
  route = selectedStore
}
