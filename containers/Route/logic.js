import R from 'ramda'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Route')
/* eslint-enable no-unused-vars */

let route = null

const getMainQuery = q => (R.isEmpty(q) ? '' : q.main)

const getSubQuery = q => (R.isEmpty(q) || !R.has('sub', q) ? '' : q.sub)

export function syncRoute(current) {
  const { query } = current
  const mainQuery = query ? getMainQuery(query) : ''
  const subQuery = query ? getSubQuery(query) : ''

  route.markState({
    mainQuery,
    subQuery,
  })
}

export function init(selectedStore) {
  route = selectedStore
}
