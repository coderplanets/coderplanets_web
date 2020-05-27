/*
 * CommunitiesContentStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { propEq, findIndex } from 'ramda'

import { ICON_CMD } from '@/config'
import { markStates, buildLog, stripMobx, Trans } from '@/utils'
import { PagedCommunities, PagedCategories, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:CommunitiesContentStore')

const CommunitiesContentStore = T.model('CommunitiesContentStore', {
  // current active sidbar menu id
  activeCatalogId: T.maybeNull(T.string),
  pagedCommunities: T.optional(PagedCommunities, emptyPagiData),
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
    get searchStatus() {
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
    get pagedCommunitiesData() {
      return stripMobx(self.pagedCommunities)
    },
    get showFilterSidebar() {
      // if (self.pagedCommunitiesData.entries.length === 0) return false
      // const isSearchMode = searchValue.length !== 0
      return self.searchValue.length === 0
    },
    get pagiInfo() {
      const { pageNumber, pageSize, totalCount } = self.pagedCommunitiesData

      return {
        pageNumber,
        pageSize,
        totalCount,
      }
    },
    get activeMenuId() {
      const { entries } = stripMobx(self.pagedCategories)
      return self.activeCatalogId || entries[0].id
    },
    get pagedCategoriesData() {
      const { entries } = stripMobx(self.pagedCategories)
      return entries.map(item => ({
        id: item.id,
        raw: item.raw,
        title: Trans(item.title),
        icon: `${ICON_CMD}/catalogs/${item.raw}.svg`,
      }))
    },
  }))
  .actions(self => ({
    updateEditing(sobj) {
      self.mark(sobj)
    },
    authWarning(options) {
      self.root.authWarning(options)
    },
    toggleSubscribe(community) {
      const index = findIndex(
        propEq('id', community.id),
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
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesContentStore
