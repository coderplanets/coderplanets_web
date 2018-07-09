/*
 * PostsThreadStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx, TYPE, FILTER } from '../../utils'
import { PagedPosts, Tag, emptyPagiData } from '../../stores/SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostsThreadStore')
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

const PostsThreadStore = t
  .model('PostsThreadStore', {
    pagedPosts: t.optional(PagedPosts, emptyPagiData),
    /* filters: t.optional(t.map(FilterModel), {}), */
    filters: t.optional(FilterModel, {}),
    /* tags: t.optional(t.map(Tag), {}), */
    tags: t.optional(t.array(Tag), []),
    activeTag: t.maybe(Tag),
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
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.curCommunity)
    },
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
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
    get activePost() {
      return stripMobx(self.root.viewing.post)
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
    setViewing(type, content) {
      self.root.setViewing(type, content)
    },
    clearViewing(type) {
      self.root.clearViewing(type)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostsThreadStore
