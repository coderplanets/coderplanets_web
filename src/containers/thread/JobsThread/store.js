/*
 * JobsThreadStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx, nilOrEmpty, isObject } from '@/utils'
import { PagedJobs, Tag, ContentFilter, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:JobsThreadStore')

const JobsThreadStore = T.model('JobsThreadStore', {
  pagedJobs: T.optional(PagedJobs, emptyPagiData),
  filters: T.optional(ContentFilter, {}),
  activeTag: T.maybeNull(Tag),
  curView: T.optional(
    T.enumeration('curView', [
      TYPE.RESULT,
      TYPE.LOADING,
      TYPE.NOT_FOUND,
      TYPE.RESULT_EMPTY,
    ]),
    TYPE.RESULT
  ),
  showPublishNote: T.optional(T.boolean, false),
  // runtime: ..
  // data: ...
  // TODO: rename to activeArticle
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get pagedJobsData() {
      return stripMobx(self.pagedJobs)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get filtersData() {
      return stripMobx(R.pickBy(v => !R.isEmpty(v), self.filters))
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || {}
    },
    get tagQuery() {
      const curTag = stripMobx(self.activeTag)
      if (nilOrEmpty(curTag)) return {}
      return { tag: curTag.title }
    },
    get activeJob() {
      return stripMobx(self.root.viewing.job)
    },
    get pageDensity() {
      return self.root.account.pageDensity
    },
    get showFilterBar() {
      const curFilter = stripMobx(R.pickBy(v => !R.isEmpty(v), self.filters))
      const pagedJobs = stripMobx(self.pagedJobs)

      return !R.isEmpty(curFilter) || !R.isEmpty(pagedJobs.entries)
    },
  }))
  .actions(self => ({
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = R.merge(curfilter, option)
    },
    authWarning(options) {
      self.root.authWarning(options)
    },
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    setHeaderFix(fix) {
      self.root.setHeaderFix(fix)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    setViewedFlag(id) {
      const { entries } = self.pagedJobsData
      const index = R.findIndex(R.propEq('id', id), entries)
      if (index >= 0) {
        self.pagedJobs.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item) {
      const { entries } = self.pagedJobsData
      const index = R.findIndex(R.propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedJobs.entries[index] = R.merge(
          stripMobx(self.pagedJobs.entries[index]),
          item
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
            preview: THREAD.JOB,
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

export default JobsThreadStore
