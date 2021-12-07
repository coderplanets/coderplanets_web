/*
 * SidebarStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, prop, trim, filter, contains } from 'ramda'

import type { TRootStore, TCommunity, TAccount, TRoute } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { sortByIndex } from '@/utils/helper'
import { notEmpty } from '@/utils/validator'

const SidebarStore = T.model('SidebarStore', {
  // open: T.optional(T.boolean, false),
  pin: T.optional(T.boolean, false),
  searchCommunityValue: T.optional(T.string, ''),
  // after user click custom sort option in footer
  sortOptActive: T.optional(T.boolean, false),

  ispulled: T.optional(T.boolean, false),
})
  .views((self) => ({
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get communitiesData(): TCommunity[] {
      const root = getParent(self) as TRootStore
      const { subscribedCommunities } = root.account
      const { searchCommunityValue } = self as TStore

      if (notEmpty(trim(searchCommunityValue))) {
        return filter(
          // @ts-ignore
          (item) => contains(searchCommunityValue, prop('title', item)),
          subscribedCommunities.entries,
        )
      }

      return subscribedCommunities
        ? sortByIndex(subscribedCommunities.entries)
        : []
    },
  }))
  .actions((self) => ({
    authWarning(options = {}): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    // load Subscribed communities
    loadCommunities(data): void {
      const root = getParent(self) as TRootStore
      root.account.loadSubscribedCommunities(data)
    },
    onSortCommunities(entries): void {
      const root = getParent(self) as TRootStore
      const { loadCommunities } = self as TStore

      const data = merge(root.account.subscribedCommunities, { entries })
      loadCommunities(data)
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof SidebarStore>
export default SidebarStore
