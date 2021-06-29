/*
 * PostsThreadStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, isEmpty, findIndex, propEq, pickBy } from 'ramda'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx, nilOrEmpty, isObject } from '@/utils'

import type {
  TRootStore,
  TPost,
  TAccount,
  TRoute,
  TCommunity,
  TThread,
} from '@/spec'

import { PagedPosts, Tag, ContentFilter, emptyPagiData } from '@/model'

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
  faqActive: T.optional(T.boolean, false),
})
  .views((self) => ({
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
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
    get activePost(): TPost {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.post)
    },
    get pageDensity(): number {
      const root = getParent(self) as TRootStore
      return root.account.pageDensity
    },
    get showFilterBar() {
      const curFilter = stripMobx(pickBy((v) => !isEmpty(v), self.filters))
      const pagedPosts = stripMobx(self.pagedPosts)

      return !isEmpty(curFilter) || !isEmpty(pagedPosts.entries)
    },
    get isCommunityDigestInViewport(): boolean {
      const root = getParent(self) as TRootStore
      return root.communityDigest.inViewport
    },
  }))
  .actions((self) => ({
    toastInfo(options): void {
      const root = getParent(self) as TRootStore
      root.toast('info', merge({ position: 'topCenter' }, options))
    },
    isMemberOf(type): boolean {
      const root = getParent(self) as TRootStore
      return root.isMemberOf(type)
    },
    authWarning(options = {}): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = merge(curfilter, option)
    },
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    showTopModeline(fix): void {
      const root = getParent(self) as TRootStore
      root.showTopModeline(fix)
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    setViewedFlag(id) {
      const { entries } = self.pagedPostsData
      const index = findIndex(propEq('id', id), entries)
      if (index >= 0) {
        self.pagedPosts.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item): void {
      const { entries } = self.pagedPostsData
      const index = findIndex(propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedPosts.entries[index] = merge(
          stripMobx(self.pagedPosts.entries[index]),
          item,
        )
      }
    },
    updateC11N(option): void {
      const root = getParent(self) as TRootStore
      root.updateC11N(option)
    },
    markRoute(target): void {
      const query = isObject(target)
        ? target
        : {
            id: target,
            preview: THREAD.POST,
            community: self.curCommunity.raw,
            ...self.tagQuery,
            ...self.filtersData,
          }

      const root = getParent(self) as TRootStore
      root.markRoute(query, { onlyDesktop: true })
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof PostsThreadStore>
export default PostsThreadStore
