/*
 * ExploreContentStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { propEq, findIndex } from 'ramda'

import { ICON_CMD } from '@/config'
import type { TRootStore, TCommunity, TRoute, TPagedCommunities } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { Trans } from '@/utils/i18n'
import { PagedCommunities, PagedCategories, emptyPagi } from '@/model'

import type { TSearchState } from './spec'

type TPagiInfo = {
  pageNumber: number
  pageSize: number
  totalCount: number
}

const ExploreContentStore = T.model('ExploreContentStore', {
  // current active sidbar menu id
  activeCatalog: T.maybeNull(T.string),
  pagedCommunities: T.optional(PagedCommunities, emptyPagi),
  searching: T.optional(T.boolean, false),
  // cur active category
  /* category: T.optional(T.string, ''), */
  // for UI loading state
  subscribing: T.optional(T.boolean, false),
  subscribingId: T.maybeNull(T.string),
  pagedCategories: T.maybeNull(PagedCategories),
  // search status
  isSearchMode: T.optional(T.boolean, false),
  searchResultCount: T.optional(T.number, 0),
  searchValue: T.optional(T.string, ''),
  showSearchMask: T.optional(T.boolean, true),
  showCreateHint: T.optional(T.boolean, true),
  showSearchHint: T.optional(T.boolean, false),
  searchfocused: T.optional(T.boolean, false),
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
    get searchStatus(): TSearchState {
      const { searchValue, searchfocused } = self
      let { showSearchMask, showCreateHint, showSearchHint } = self

      const isSearchMode = searchValue.length !== 0
      // is has search value, then do not show mask even is input is blur
      showSearchMask = searchValue.length === 0 ? showSearchMask : false

      const searchResultCount = self.pagedCommunities.totalCount

      showCreateHint = !searchfocused && !isSearchMode
      showSearchHint = !showCreateHint && !isSearchMode
      const showSearchResultHint = isSearchMode

      return {
        isSearchMode,
        searchValue,
        showSearchMask,
        showCreateHint,
        showSearchHint,
        showSearchResultHint,
        searchfocused,
        searchResultCount,
      }
    },
    get pagedCommunitiesData(): TPagedCommunities {
      return toJS(self.pagedCommunities)
    },
    get showFilterSidebar(): boolean {
      // if (self.pagedCommunitiesData.entries.length === 0) return false
      // const isSearchMode = searchValue.length !== 0
      return self.searchValue.length === 0
    },
    get pagiInfo(): TPagiInfo {
      const slf = self as TStore
      const { pageNumber, pageSize, totalCount } = slf.pagedCommunitiesData

      return {
        pageNumber,
        pageSize,
        totalCount,
      }
    },
    get pagedCategoriesData() {
      const { entries } = toJS(self.pagedCategories)
      return entries.map((item) => ({
        id: item.id,
        raw: item.raw,
        title: Trans(item.title),
        icon: `${ICON_CMD}/catalogs/${item.raw}.svg`,
      }))
    },
  }))
  .actions((self) => ({
    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },
    authWarning(options = {}): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    toggleSubscribe(community: TCommunity): void {
      const index = findIndex(
        propEq('id', community.id),
        self.pagedCommunities.entries,
      )
      if (index === -1) return

      if (self.pagedCommunities.entries[index].viewerHasSubscribed) {
        self.pagedCommunities.entries[index].viewerHasSubscribed = false
        self.pagedCommunities.entries[index].subscribersCount -= 1
      } else {
        self.pagedCommunities.entries[index].viewerHasSubscribed = true
        self.pagedCommunities.entries[index].subscribersCount += 1
      }
    },
    addSubscribedCommunity(community: TCommunity): void {
      const root = getParent(self) as TRootStore
      const slf = self as TStore

      root.account.addSubscribedCommunity(community)
      slf.toggleSubscribe(community)
    },
    removeSubscribedCommunity(community: TCommunity): void {
      const root = getParent(self) as TRootStore
      const slf = self as TStore

      root.account.removeSubscribedCommunity(community)
      slf.toggleSubscribe(community)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ExploreContentStore>
export default ExploreContentStore
