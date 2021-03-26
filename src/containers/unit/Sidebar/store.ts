/*
 * SidebarStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, prop, trim, filter, contains } from 'ramda'

import type {
  TRootStore,
  TCommunity,
  TPagedCommunities,
  TAccount,
} from '@/spec'
import { buildLog, markStates, stripMobx, sortByIndex, notEmpty } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:SidebarStore')

const SidebarStore = T.model('SidebarStore', {
  // open: T.optional(T.boolean, false),
  pin: T.optional(T.boolean, false),
  searchCommunityValue: T.optional(T.string, ''),
  // after user click custom sort option in footer
  sortOptActive: T.optional(T.boolean, false),

  isPulled: T.optional(T.boolean, false),

  /*
       this is a fix for wired svg icon in sidebar
       when community icon is svg format, the svg loader only do it:s work
       on client-side, which will case MenuBar UI choas

       manulay force mobx rerender will tmp fix this, heck later
     */
  forceRerender: T.optional(T.boolean, false),
})
  .views((self) => ({
    get curRoute(): any {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.community)
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    // get communitiesData(): TPagedCommunities {
    get communitiesData(): any {
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
    authWarning(options): void {
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
