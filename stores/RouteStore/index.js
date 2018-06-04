/*
 * RouteStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import R from 'ramda'
import Router from 'next/router'

import { PAGE_SIZE } from '../../config'
import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:RouteStore')
/* eslint-enable no-unused-vars */

const Query = t.model('Query', {
  page: t.optional(t.string, '1'),
  size: t.optional(t.string, String(PAGE_SIZE.COMMON)),
  // sort .... [when, ...]
  // view ... [chart, list ...]
})

const RouteStore = t
  .model('RouteStore', {
    mainPath: t.optional(t.string, ''),
    subPath: t.optional(t.string, ''),
    query: t.optional(Query, {}),
  })
  .views(self => ({
    get curPath() {
      return self.mainPath
    },
    get curRoute() {
      const { mainPath, subPath } = self
      return { mainPath, subPath }
    },
  }))
  .actions(self => ({
    markQuery(query = {}) {
      query = R.mapObjIndexed(v => String(v), query)
      const { page } = query

      // page = 1 is default
      if (page && page === '1') {
        query = R.omit(['page', 'size'], query)
      }

      /* debug('final query =>  ', query) */
      if (typeof window !== 'undefined') {
        return Router.push({
          pathname: `/${self.mainPath}`,
          asPath: `/${self.subPath}`,
          query,
          shallow: true,
        })
      }
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RouteStore
