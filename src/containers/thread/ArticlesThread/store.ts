/*
 * ArticlesThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, isEmpty, findIndex, propEq, pickBy, values } from 'ramda'

import type {
  TRootStore,
  TTag,
  TAccount,
  TArticle,
  TPagedArticles,
  TCommunity,
  TThread,
  TArticleFilter,
  TC11N,
} from '@/spec'

import { TYPE, THREAD } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import { nilOrEmpty, isObject } from '@/utils/validator'
import { titleCase } from '@/utils/helper'
import {
  PagedPosts,
  PagedJobs,
  PagedBlogs,
  PagedRadars,
  ArticlesFilter,
  emptyPagiData,
} from '@/model'

const ArticlesThread = T.model('ArticlesThread', {
  pagedPosts: T.optional(PagedPosts, emptyPagiData),
  pagedJobs: T.optional(PagedJobs, emptyPagiData),
  pagedBlogs: T.optional(PagedBlogs, emptyPagiData),
  pagedRadars: T.optional(PagedRadars, emptyPagiData),
  filters: T.optional(ArticlesFilter, {}),
  resState: T.optional(
    T.enumeration('resState', values(TYPE.RES_STATE)),
    TYPE.RES_STATE.DONE,
  ),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get pagedArticlesData(): TPagedArticles {
      const slf = self as TStore
      const pagedThreadKey = `paged${titleCase(slf.curThread)}s`

      return toJS(slf[pagedThreadKey])
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingArticle
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get c11n(): TC11N {
      const root = getParent(self) as TRootStore
      return root.account.c11n
    },
    get filtersData(): TArticleFilter {
      return toJS(pickBy((v) => !isEmpty(v), self.filters))
    },
    get activeTagData(): TTag {
      const root = getParent(self) as TRootStore
      return toJS(root.tagsBar.activeTagData)
    },
    get tagQuery(): Record<string, unknown> {
      const root = getParent(self) as TRootStore

      const curTag = toJS(root.tagsBar.activeTagData)
      if (nilOrEmpty(curTag.title)) return {}
      return { tag: curTag.title }
    },
    get showFilters(): boolean {
      const slf = self as TStore
      const curFilter = toJS(pickBy((v) => !isEmpty(v), self.filters))
      const pagedPosts = toJS(slf.pagedArticlesData)

      return !isEmpty(curFilter) || !isEmpty(pagedPosts.entries)
    },
  }))
  .actions((self) => ({
    // the args pass to server when load articles
    getLoadArgs(page = 1): Record<string, unknown> {
      self.resState = TYPE.RES_STATE.LOADING

      const root = getParent(self) as TRootStore
      return root.getPagedArticleArgs(page, self.filtersData)
    },
    markRes(res: Record<string, TPagedArticles>): void {
      const slf = self as TStore
      const pagedData = values(res)[0] as TPagedArticles

      if (pagedData.totalCount === 0) {
        slf.resState = TYPE.RES_STATE.EMPTY
      } else {
        slf.resState = TYPE.RES_STATE.DONE
      }

      slf.mark(res)
    },

    updateItem(item): void {
      const slf = self as TStore
      const { entries } = slf.pagedArticlesData
      const index = findIndex(
        propEq('id', item.id),
        entries as Record<'id', any>[],
      )
      if (index >= 0) {
        self.pagedPosts.entries[index] = merge(
          toJS(self.pagedPosts.entries[index]),
          item,
        )
      }
    },
    selectFilter(option: TArticleFilter): void {
      const curfilter = self.filtersData
      // @ts-ignore
      self.filters = merge(curfilter, option)
    },
    showTopModeline(fix): void {
      const root = getParent(self) as TRootStore
      root.showTopModeline(fix)
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    setViewedFlag(id): void {
      const { entries } = self.pagedArticlesData
      const index = findIndex(propEq('id', id), entries as Record<'id', any>[])
      if (index >= 0) {
        self.pagedPosts.entries[index].viewerHasViewed = true
      }
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
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticlesThread>
export default ArticlesThread
