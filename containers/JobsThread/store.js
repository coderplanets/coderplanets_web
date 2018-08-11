/*
 * JobsThreadStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx, TYPE, FILTER } from '../../utils'
import { Article, PagedJobs, Tag } from '../../stores/SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:JobsThreadStore')
/* eslint-enable no-unused-vars */

/* const filters = { */
/* js: { */
/* time: 'today', */
/* sort: 'most_views', */
/* length: 'most_words', */
/* }, */
/* } */

/* const tags = { */
/* js: 'react', */
/* } */

const FilterModel = t.model('FilterModel', {
  when: t.optional(
    t.enumeration('when', [
      '',
      FILTER.TODAY,
      FILTER.THIS_WEEK,
      FILTER.THIS_MONTH,
      FILTER.THIS_YEAR,
    ]),
    ''
  ),

  sort: t.optional(
    t.enumeration('sort', [
      '',
      FILTER.MOST_VIEWS,
      FILTER.MOST_FAVORITES,
      FILTER.MOST_STARS,
      FILTER.MOST_COMMENTS,
    ]),
    ''
  ),
  wordLength: t.optional(
    t.enumeration('length', ['', FILTER.MOST_WORDS, FILTER.LEAST_WORDS]),
    ''
  ),
})

const JobsThreadStore = t
  .model('JobsThreadStore', {
    pagedJobs: t.maybeNull(PagedJobs),
    filters: t.optional(FilterModel, {}),
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
    activeJob: t.optional(Article, {}),
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
    get filtersData() {
      return stripMobx(self.filters)
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
    get active() {
      return stripMobx(self.activeJob)
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
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default JobsThreadStore
