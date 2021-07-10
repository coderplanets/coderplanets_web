/*
 * CommunityContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TAccount, TCommunity, TThread } from '@/spec'
import { markStates, buildLog, sortByIndex, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityContent')

const CommunityContent = T.model('CommunityContent', {})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get subscribedCommunitiesData(): TCommunity[] {
      const root = getParent(self) as TRootStore
      const { subscribedCommunities } = root.account

      return subscribedCommunities
        ? sortByIndex(subscribedCommunities.entries)
        : []
    },
  }))
  .actions((self) => ({
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CommunityContent>
export default CommunityContent
