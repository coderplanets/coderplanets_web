/*
 * CommunityJoinBadge store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:CommunityJoinBadge')

const CommunityJoinBadge = T.model('CommunityJoinBadge', {
  subscribeLoading: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityJoinBadge
