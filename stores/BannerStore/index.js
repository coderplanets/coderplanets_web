/*
 * BannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, TYPE } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:BannerStore')
/* eslint-enable no-unused-vars */

const BannerStore = t
  .model('BannerStore', {
    hehe: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.route.curRoute
    },
    get curCommunity() {
      return self.root.communities.curCommunity
    },
    get detail() {
      // type depands on route main_query
      return {
        // type: TYPE.ACTIVITIES_ROOT_PAGE,
        type: TYPE.POST_PAGE,
        /* type: TYPE.COMMUNITY_PAGE, */
        /* type: TYPE.CHEATSHEET_ROOT_PAGE, */
        /* type: TYPE.COMMUNITIES_ROOT_PAGE, */
        content: self.root.curCommunity.data,
      }
    },
    get curCommunity2() {
      return self.root.curCommunity.data
    },
  }))
  .actions(self => ({
    loadCurCommunity(data) {
      self.root.curCommunity.load(data)
    },
    markRoute(route, query) {
      self.root.route.markRoute(route, query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default BannerStore
