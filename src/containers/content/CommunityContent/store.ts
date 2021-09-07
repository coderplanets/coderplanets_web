/*
 * CommunityContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TAccount, TCommunity, TThread, TC11N } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { sortByIndex } from '@/utils/helper'

const CommunityContent = T.model('CommunityContent', {})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get c11n(): TC11N {
      const root = getParent(self) as TRootStore
      return root.account.c11n
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
    setCurThread(thread: TThread): void {
      const root = getParent(self) as TRootStore
      root.setCurThread(thread)
    },
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
