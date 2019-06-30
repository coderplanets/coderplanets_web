/*
 * CommunitiesContentStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, buildLog, stripMobx } from '@utils'
import { PagedCommunities } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:CommunitiesContentStore')

const CommunitiesContentStore = t
  .model('CommunitiesContentStore', {
    pagedCommunities: t.maybeNull(PagedCommunities),
    searchValue: t.optional(t.string, ''),
    searching: t.optional(t.boolean, false),
    // cur active category
    /* category: t.optional(t.string, ''), */
    // for UI loading state
    subscribing: t.optional(t.boolean, false),
    subscribingId: t.maybeNull(t.string),
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
    get pagedCommunitiesData() {
      return stripMobx(self.pagedCommunities)
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    toggleSubscribe(community) {
      const index = R.findIndex(
        R.propEq('id', community.id),
        self.pagedCommunities.entries
      )
      if (index === -1) return false

      if (self.pagedCommunities.entries[index].viewerHasSubscribed) {
        self.pagedCommunities.entries[index].viewerHasSubscribed = false
        self.pagedCommunities.entries[index].subscribersCount -= 1
      } else {
        self.pagedCommunities.entries[index].viewerHasSubscribed = true
        self.pagedCommunities.entries[index].subscribersCount += 1
      }
    },
    addSubscribedCommunity(community) {
      self.root.account.addSubscribedCommunity(community)
      self.root.communitiesContent.toggleSubscribe(community)
    },
    removeSubscribedCommunity(community) {
      self.root.account.removeSubscribedCommunity(community)
      self.root.communitiesContent.toggleSubscribe(community)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesContentStore
