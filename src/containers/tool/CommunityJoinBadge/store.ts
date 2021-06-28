/*
 * CommunityJoinBadge store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TRootStore, TCommunity, TRoute } from '@/spec'
import { markStates, buildLog, stripMobx } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:CommunityJoinBadge')

const CommunityJoinBadge = T.model('CommunityJoinBadge', {
  subscribeLoading: T.optional(T.boolean, false),
  loading: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.community)
    },
  }))
  .actions((self) => ({
    setViewing(sobj: Record<string, unknown>): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    addSubscribedCommunity(community: TCommunity): void {
      const root = getParent(self) as TRootStore
      root.account.addSubscribedCommunity(community)
    },
    removeSubscribedCommunity(community: TCommunity): void {
      const root = getParent(self) as TRootStore
      root.account.removeSubscribedCommunity(community)
    },
    authWarning(options = {}): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CommunityJoinBadge>
export default CommunityJoinBadge
