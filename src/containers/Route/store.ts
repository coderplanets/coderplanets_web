/*
 * RouteStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, pickBy, omit, isEmpty } from 'ramda'

import type { TRootStore, TRoute } from '@/spec'
import { PAGE_SIZE } from '@/config'

import { Global } from '@/utils/helper'
import { isClientSide } from '@/utils/ssr'
import { serializeQuery } from '@/utils/route'
import { markStates } from '@/utils/mobx'

const Query = T.model('Query', {
  page: T.optional(T.string, '1'),
  size: T.optional(T.string, String(PAGE_SIZE.D)),
  tab: T.maybeNull(T.string),
  // sort .... [when, ...]
  // view ... [chart, list ...]
})

const RouteStore = T.model('RouteStore', {
  communityPath: T.optional(T.string, ''),
  threadPath: T.optional(T.string, ''),
  mainPath: T.optional(T.string, ''),
  subPath: T.optional(T.string, ''),
  query: T.optional(Query, {}),
})
  .views((self) => ({
    get curRoute(): TRoute {
      const { communityPath, threadPath, mainPath, subPath } = self
      return { communityPath, threadPath, mainPath, subPath }
    },
    get isNotDesktop(): boolean {
      const root = getParent(self) as TRootStore
      const { isMobile } = root

      return isMobile
    },
  }))
  .actions((self) => ({
    /**
     * sync query to current url
     * - if current url is subdomain, then we should
     * - reload to that page directly
     * @param {*} query
     * @param {boolean} [opt={ onlyDesktop: false }] if onlyDescktop set to true
     *        then just leave it, otherwise it will mislead the history back btn in mobile
     *        在手机上会导致触发两次才返回
     *
     * @returns {boolean}
     */
    markRoute(query, opt = {}) {
      const defaultOpt = { onlyDesktop: false }
      const option = merge(defaultOpt, opt)

      if (!isClientSide) return false
      if (option.onlyDesktop && self.isNotDesktop) {
        return false
      }

      const { mainPath, subPath, page } = query
      query = pickBy((v) => !isEmpty(v), query)

      if (mainPath || mainPath === '') self.mainPath = mainPath
      if (subPath || subPath === '') self.subPath = subPath

      if (page && String(page) === '1') query = omit(['page'], query)

      // const allQueryString = serializeQuery(query)
      const queryString = serializeQuery(omit(['mainPath', 'subPath'], query))

      let asPath
      if (self.mainPath && self.subPath) {
        asPath = `/${self.mainPath}/${self.subPath}${queryString}`
      } else if (self.mainPath && subPath === '') {
        asPath = `/${self.mainPath}${queryString}`
      } else if (self.mainPath === '' && subPath === '') {
        asPath = '/'
      } else if (self.mainPath && !subPath) {
        asPath = `/${self.mainPath}`
      } else {
        asPath = `${queryString}`
      }

      // 为空不会改变路由
      if (asPath === '') asPath = '/'

      // NOTE: shallow option only works for same page url
      // if page is diffrent, it will cause page reload
      /* console.log('push url: ', url) */
      // Router.push(url, asPath, { shallow: true })
      // see: https://stackoverflow.com/questions/824349/modify-the-url-without-reloading-the-page
      /* return Global.history.pushState({}, null, url) */
      // NOTE:  Router.push(url, asPath, { shallow: true }) is not working on pruction env
      return Global.history.pushState({}, null, asPath)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof RouteStore>

export default RouteStore
