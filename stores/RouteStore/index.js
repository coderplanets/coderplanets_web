/*
 * RouteStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:RouteStore')
/* eslint-enable no-unused-vars */

const RouteStore = t
  .model('RouteStore', {
    pathname: t.optional(t.string, '/'),
    asPath: t.optional(t.string, '/'),
    // query: t.optional(t.string, ''),
  })
  .views(self => ({
    get curUrlPath() {
      if (self.asPath === '/') {
        return self.asPath
      }
      return R.startsWith('/', self.asPath)
        ? R.slice(1, Infinity, self.asPath)
        : self.asPath
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RouteStore
