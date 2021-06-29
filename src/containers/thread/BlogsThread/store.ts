/*
 * BlogsThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { findIndex, propEq, merge, isEmpty, pickBy } from 'ramda'

import { TYPE, THREAD } from '@/constant'

import type {
  TCommunity,
  TRootStore,
  TThread,
  TRoute,
  TBlog,
  TAccount,
} from '@/spec'
import { PagedBlogs, Tag, ContentFilter, emptyPagiData } from '@/model'
import { markStates, buildLog, stripMobx, nilOrEmpty, isObject } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:BlogsThread')

const BlogsThread = T.model('BlogsThread', {
  pagedBlogs: T.optional(PagedBlogs, emptyPagiData),
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
    get pagedBlogsData() {
      return stripMobx(self.pagedBlogs)
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
    get activeBlog(): TBlog {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.blog)
    },
    get pageDensity(): number {
      const root = getParent(self) as TRootStore
      return root.account.pageDensity
    },
    get showFilterBar() {
      const curFilter = stripMobx(pickBy((v) => !isEmpty(v), self.filters))
      const pagedBlogs = stripMobx(self.pagedBlogs)

      return !isEmpty(curFilter) || !isEmpty(pagedBlogs.entries)
    },
    get isCommunityDigestInViewport(): boolean {
      const root = getParent(self) as TRootStore
      return root.communityDigest.inViewport
    },
  }))
  .actions((self) => ({
    authWarning(options = {}): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    isMemberOf(type): boolean {
      const root = getParent(self) as TRootStore
      return root.isMemberOf(type)
    },
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = merge(curfilter, option)
    },
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    setViewedFlag(id) {
      const { entries } = self.pagedBlogsData
      const index = findIndex(propEq('id', id), entries)
      if (index >= 0) {
        self.pagedBlogs.entries[index].viewerHasViewed = true
      }
    },
    markRoute(target): void {
      const query = isObject(target)
        ? target
        : {
            id: target,
            preview: THREAD.BLOG,
            community: self.curCommunity.raw,
            ...self.tagQuery,
            ...self.filtersData,
          }

      const root = getParent(self) as TRootStore
      root.markRoute(query, { onlyDesktop: true })
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof BlogsThread>

export default BlogsThread
