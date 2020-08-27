/*
 * CommunityBanner store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityBanner')

const CommunityBanner = T.model('CommunityBanner', {
  loading: T.optional(T.boolean, false),
  descExpand: T.optional(T.boolean, false),
  subscribeLoading: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get isHeaderFixed() {
      return self.root.header.fixed
    },
    get curRoute() {
      return self.root.curRoute
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    addSubscribedCommunity(community) {
      self.root.account.addSubscribedCommunity(community)
    },
    removeSubscribedCommunity(community) {
      self.root.account.removeSubscribedCommunity(community)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityBanner
