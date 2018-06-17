/*
 * RouteStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import R from 'ramda'
import Router from 'next/router'

import { PAGE_SIZE } from '../../config'
import { onClient, markStates, makeDebugger, serializeQuery } from '../../utils'
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
    // default is nav to index page(community)
    // use _page if nav to spectial page
    // example:
    // markRoute({ _page: 'post', id: 123, comments_page: 1 })
    // markRoute({ _page: 'user', id: 123, comments_page: 1 })
    markRoute(query) {
      const { _page, id, community, thread, page } = query
      if (community && thread) {
        self.mainPath = community
        self.subPath = thread
      }

      if (page && String(page) === '1') {
        query = R.omit(['page'], query)
      }

      const allQueryString = serializeQuery(query)

      const otherQuery = R.omit(['community', 'thread'], query)
      const queryString = serializeQuery(otherQuery)

      let url = `/${allQueryString}`
      let asPath = `/${community}/${thread}${queryString}`

      if (_page) {
        const restQueryString = serializeQuery(R.omit(['_page', 'id'], query))
        url = `/${_page}/${id}${restQueryString}`
        asPath = `/${_page}/${id}${restQueryString}`
      }

      // NOTE: shallow option only works for same page url
      // if page is diffrent, it will cause page reload
      if (onClient) {
        Router.push(url, asPath, {
          shallow: true,
        })
      }
      // see: https://stackoverflow.com/questions/824349/modify-the-url-without-reloading-the-page
      /* return Global.history.pushState({}, null, url) */
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RouteStore
