/*
 * PostsThreadStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge, isEmpty, findIndex, propEq, pickBy } from 'ramda'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx, nilOrEmpty, isObject } from '@/utils'

import {
  PagedPosts,
  Tag,
  ContentFilter,
  emptyPagiData,
  PagedCommunities,
} from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:PostsThreadStore')

const PostsThreadStore = T.model('PostsThreadStore', {
  pagedPosts: T.optional(PagedPosts, emptyPagiData),
  filters: T.optional(ContentFilter, {}),
  activeTag: T.maybeNull(Tag),
  curView: T.optional(
    T.enumeration('curView', [
      TYPE.RESULT,
      TYPE.LOADING,
      TYPE.NOT_FOUND,
      TYPE.RESULT_EMPTY,
    ]),
    TYPE.RESULT,
  ),
  pagedCityCommunities: T.optional(PagedCommunities, emptyPagiData),
  faqActive: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get curThread() {
      return self.root.viewing.activeThread
    },
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get filtersData() {
      return stripMobx(pickBy((v) => !isEmpty(v), self.filters))
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || {}
    },
    get tagQuery() {
      const curTag = stripMobx(self.activeTag)
      if (nilOrEmpty(curTag)) return {}
      return { tag: curTag.title }
    },
    get activePost() {
      return stripMobx(self.root.viewing.post)
    },
    get pagedCityCommunitiesData() {
      return stripMobx(self.pagedCityCommunities)
    },
    get pageDensity() {
      return self.root.account.pageDensity
    },
    get showFilterBar() {
      const curFilter = stripMobx(pickBy((v) => !isEmpty(v), self.filters))
      const pagedPosts = stripMobx(self.pagedPosts)

      return !isEmpty(curFilter) || !isEmpty(pagedPosts.entries)
    },
  }))
  .actions((self) => ({
    toastInfo(options) {
      self.root.toast('info', merge({ position: 'topCenter' }, options))
    },
    isMemberOf(type) {
      return self.root.isMemberOf(type)
    },
    upgradeHelper() {
      self.root.upgradeHelper()
    },
    authWarning(options) {
      self.root.authWarning(options)
    },
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = merge(curfilter, option)
    },
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    showTopModeline(fix) {
      self.root.showTopModeline(fix)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    setViewedFlag(id) {
      const { entries } = self.pagedPostsData
      const index = findIndex(propEq('id', id), entries)
      if (index >= 0) {
        self.pagedPosts.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item) {
      const { entries } = self.pagedPostsData
      const index = findIndex(propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedPosts.entries[index] = merge(
          stripMobx(self.pagedPosts.entries[index]),
          item,
        )
      }
    },
    updateC11N(option) {
      self.root.updateC11N(option)
    },
    markRoute(target) {
      const query = isObject(target)
        ? target
        : {
            id: target,
            preview: THREAD.POST,
            community: self.curCommunity.raw,
            ...self.tagQuery,
            ...self.filtersData,
          }

      self.root.markRoute(query, { onlyDesktop: true })
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostsThreadStore
