/*
 * RouteStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
// import Router from 'next/router'

import { PAGE_SIZE } from '@config'
import {
  Global,
  isClientSide,
  markStates,
  buildLog,
  serializeQuery,
} from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:RouteStore')

const Query = t.model('Query', {
  page: t.optional(t.string, '1'),
  size: t.optional(t.string, String(PAGE_SIZE.D)),
  tab: t.maybeNull(t.string),
  // sort .... [when, ...]
  // view ... [chart, list ...]
})

const RouteStore = t
  .model('RouteStore', {
    communityPath: t.optional(t.string, ''),
    threadPath: t.optional(t.string, ''),
    mainPath: t.optional(t.string, ''),
    subPath: t.optional(t.string, ''),
    query: t.optional(Query, {}),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      const { communityPath, threadPath, mainPath, subPath } = self
      return { communityPath, threadPath, mainPath, subPath }
    },
  }))
  .actions(self => ({
    // TODO:  if current url is subdomain, then we should
    // reload to that page directly
    markRoute(query) {
      if (!isClientSide) return false
      const { mainPath, subPath, page } = query
      query = R.pickBy(v => !R.isEmpty(v), query)

      if (mainPath) self.mainPath = mainPath
      if (subPath) self.subPath = subPath

      if (page && String(page) === '1') query = R.omit(['page'], query)

      // const allQueryString = serializeQuery(query)
      const queryString = serializeQuery(R.omit(['mainPath', 'subPath'], query))

      // const url = `/${allQueryString}`
      const asPath = `/${self.mainPath}/${self.subPath}${queryString}`

      // NOTE: shallow option only works for same page url
      // if page is diffrent, it will cause page reload
      /* console.log('push url: ', url) */
      // Router.push(url, asPath, { shallow: true })
      // see: https://stackoverflow.com/questions/824349/modify-the-url-without-reloading-the-page
      /* return Global.history.pushState({}, null, url) */
      // NOTE:  Router.push(url, asPath, { shallow: true }) is not working on pruction env
      return Global.history.pushState({}, null, asPath)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RouteStore
