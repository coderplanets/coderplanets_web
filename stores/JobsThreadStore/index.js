/*
 * JobsThreadStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'
import { Article, PagedJobs, Tag } from '../SharedModel'

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
      'TODAY',
      'THIS_WEEK',
      'THIS_MONTH',
      'THIS_YEAR',
    ]),
    ''
  ),

  sort: t.optional(
    t.enumeration('sort', [
      '',
      'MOST_VIEWS',
      'MOST_FAVORITES',
      'MOST_STARS',
      'MOST_COMMENTS',
    ]),
    ''
  ),
  wordLength: t.optional(
    t.enumeration('length', ['', 'MOST_WORDS', 'LEAST_WORDS']),
    ''
  ),
})

const JobsThreadStore = t
  .model('JobsThreadStore', {
    pagedJobs: t.maybe(PagedJobs),
    filters: t.optional(t.map(FilterModel), {}),
    tags: t.optional(t.array(Tag), []),
    activeTag: t.maybe(Tag),
    curView: t.optional(
      t.enumeration('curView', [
        /* 'TIMEOUT_PAGE', */
        TYPE.RESULT,
        TYPE.LOADING,
        TYPE.NOT_FOUND,
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
    get pagedJobsData() {
      return stripMobx(self.pagedJobs)
    },
    get tagsData() {
      return stripMobx(self.tags)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },

    get curCommunity() {
      return self.root.communities.curCommunity
    },
    get curFilter() {
      return R.pathOr('', ['js'], self.filters.toJSON())
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
    get active() {
      return stripMobx(self.activeJob)
    },
  }))
  .actions(self => ({
    selectFilter(filter, val) {
      // TODO
      const community = 'javascript'
      debug('curCommunity', self.curCommunity)
      const curFilter = self.filters.get(community, filter)
      const newFilter = curFilter
        ? R.merge(curFilter, { [filter]: val })
        : { [filter]: val }

      self.filters.set(community, newFilter)
    },
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    setHeaderFix(fix) {
      self.root.setHeaderFix(fix)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default JobsThreadStore
