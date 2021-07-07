/*
 * JobsThreadStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { findIndex, merge, pickBy, isEmpty, propEq } from 'ramda'

import type {
  TRootStore,
  TCommunity,
  TAccount,
  TTag,
  TJob,
  TPagedJobs,
} from '@/spec'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx, nilOrEmpty, isObject } from '@/utils'
import { PagedJobs, Tag, ArticlesFilter, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:JobsThreadStore')

const JobsThreadStore = T.model('JobsThreadStore', {
  pagedJobs: T.optional(PagedJobs, emptyPagiData),
  filters: T.optional(ArticlesFilter, {}),
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
  showPublishNote: T.optional(T.boolean, false),
  // runtime: ..
  // data: ...
  // TODO: rename to activeArticle
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },
    get pagedJobsData(): TPagedJobs {
      return stripMobx(self.pagedJobs)
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get filtersData(): any {
      return stripMobx(pickBy((v) => !isEmpty(v), self.filters))
    },
    get activeTagData(): TTag {
      return stripMobx(self.activeTag) || {}
    },
    get tagQuery(): any {
      const curTag = stripMobx(self.activeTag)
      if (nilOrEmpty(curTag)) return {}
      return { tag: curTag.title }
    },
    get activeJob(): TJob {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.job)
    },
    get pageDensity(): number {
      const root = getParent(self) as TRootStore
      return root.account.pageDensity
    },
    get showFilterBar(): boolean {
      const curFilter = stripMobx(pickBy((v) => !isEmpty(v), self.filters))
      const pagedJobs = stripMobx(self.pagedJobs)

      return !isEmpty(curFilter) || !isEmpty(pagedJobs.entries)
    },
  }))
  .actions((self) => ({
    selectFilter(option): void {
      const curfilter = self.filtersData
      self.filters = merge(curfilter, option)
    },
    authWarning(options): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    selectTag(tag): void {
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
    setViewedFlag(id: string): void {
      const { entries } = self.pagedJobsData
      const index = findIndex(propEq('id', id), entries)
      if (index >= 0) {
        self.pagedJobs.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item): void {
      const { entries } = self.pagedJobsData
      const index = findIndex(propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedJobs.entries[index] = merge(
          stripMobx(self.pagedJobs.entries[index]),
          item,
        )
      }
    },
    updateC11N(option): void {
      const root = getParent(self) as TRootStore
      root.updateC11N(option)
    },
    markRoute(target): void {
      const root = getParent(self) as TRootStore

      const query = isObject(target)
        ? target
        : {
            id: target,
            preview: THREAD.JOB,
            community: self.curCommunity.raw,
            ...self.tagQuery,
            ...self.filtersData,
          }

      root.markRoute(query, { onlyDesktop: true })
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof JobsThreadStore>
export default JobsThreadStore
