/*
 * JobsThreadStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  PagedJobs,
  Tag,
  ContentFilter,
  emptyPagiData,
} from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:JobsThreadStore')
/* eslint-enable no-unused-vars */

const JobsThreadStore = t
  .model('JobsThreadStore', {
    pagedJobs: t.optional(PagedJobs, emptyPagiData),
    filters: t.optional(ContentFilter, {}),
    tags: t.optional(t.array(Tag), []),
    activeTag: t.maybeNull(Tag),
    curView: t.optional(
      t.enumeration('curView', [
        TYPE.RESULT,
        TYPE.LOADING,
        TYPE.NOT_FOUND,
        TYPE.RESULT_EMPTY,
      ]),
      TYPE.RESULT
    ),
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
    get tagsData() {
      return stripMobx(self.tags)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get filtersData() {
      return stripMobx(self.filters)
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
    get activeJob() {
      return stripMobx(self.root.viewing.job)
    },
  }))
  .actions(self => ({
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = R.merge(curfilter, option)
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
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default JobsThreadStore
