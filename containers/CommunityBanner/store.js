/*
 * CommunityBanner store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog, stripMobx } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityBanner')

const CommunityBanner = t
  .model('CommunityBanner', {
    loading: t.optional(t.boolean, false),
    subscribeLoading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
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
  .actions(self => ({
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
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityBanner
