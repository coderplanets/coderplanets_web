/*
 * RouteStore store
 *
 */

import { types as t } from 'mobx-state-tree'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:RouteStore')
/* eslint-enable no-unused-vars */

const RouteStore = t
  .model('RouteStore', {
    mainQuery: t.optional(t.string, ''),
    subQuery: t.optional(t.string, ''),
  })
  .views(self => ({
    get curPath() {
      return self.mainQuery
    },
    get curRoute() {
      const { mainQuery, subQuery } = self
      return { mainQuery, subQuery }
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RouteStore
