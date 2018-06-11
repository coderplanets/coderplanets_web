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

const serializeQuery = obj => {
  /* eslint-disable */
  return (
    '?' +
    Object.keys(obj)
      .reduce((a, k) => {
        a.push(k + '=' + encodeURIComponent(obj[k]))
        return a
      }, [])
      .join('&')
  )
  /* eslint-enable */
}

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
      let queryString = ''
      if (!R.isEmpty(query)) {
        queryString = serializeQuery(query)
      }
      if (typeof window !== 'undefined') {
        let url = ''
        if (self.mainPath === self.subPath) {
          url = `/${self.mainPath}${queryString}`
        } else {
          url = `/${self.mainPath}/${self.subPath}${queryString}`
        }

        debug('push url: ', url)
        return Router.push(url, url, {
          shallow: true,
        })
      }
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RouteStore
