/*
 * ArticlesThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, isEmpty, findIndex, propEq, pickBy, values } from 'ramda'

import type {
  TRootStore,
  TTag,
  TAccount,
  TPagedArticles,
  TCommunity,
  TThread,
  TArticleFilter,
} from '@/spec'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx, nilOrEmpty, isObject } from '@/utils'
import { PagedPosts, ArticlesFilter, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:ArticlesThread')

const ArticlesThread = T.model('ArticlesThread', {
  pagedPosts: T.optional(PagedPosts, emptyPagiData),
  filters: T.optional(ArticlesFilter, {}),
  resState: T.optional(
    T.enumeration('resState', values(TYPE.RES_STATE)),
    TYPE.RES_STATE.DONE,
  ),
})
  .views((self) => ({
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
    get pagedArticlesData(): TPagedArticles {
      const slf = self as TStore

      switch (slf.curThread) {
        default: {
          return stripMobx(self.pagedPosts)
        }
      }
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get filtersData(): TArticleFilter {
      return stripMobx(pickBy((v) => !isEmpty(v), self.filters))
    },
    get activeTagData(): TTag {
      const root = getParent(self) as TRootStore
      return stripMobx(root.tagsBar.activeTagData)
    },
    get tagQuery(): Record<string, unknown> {
      const root = getParent(self) as TRootStore

      const curTag = stripMobx(root.tagsBar.activeTagData)
      if (nilOrEmpty(curTag.title)) return {}
      return { tag: curTag.title }
    },
    get showFilters(): boolean {
      const curFilter = stripMobx(pickBy((v) => !isEmpty(v), self.filters))
      const pagedPosts = stripMobx(self.pagedPosts)

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
      // TODO: 区分 thread
      // const curThread = self.viewingThread || self.activeThread

      // switch (curThread) {
      //   case THREAD.JOB:
      //     root.jobsThread.updateItem(item)
      //     return
      //   case THREAD.REPO:
      //     root.reposThread.updateItem(item)
      //     return
      //   default: {
      //     root.articlesThread.updateItem(item)
      //   }
      // }
      const { entries } = self.pagedPostsData
      const index = findIndex(propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedPosts.entries[index] = merge(
          stripMobx(self.pagedPosts.entries[index]),
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
      const { entries } = self.pagedPostsData
      const index = findIndex(propEq('id', id), entries)
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
