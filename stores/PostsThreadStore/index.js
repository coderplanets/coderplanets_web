/*
 * PostsThreadStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'
import { Article, PagedPosts, Tag } from '../SharedModel'

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

const PostsThreadStore = t
  .model('PostsThreadStore', {
    pagedPosts: t.maybe(PagedPosts),
    filters: t.optional(t.map(FilterModel), {}),
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
    activePost: t.optional(Article, {}),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.route.curRoute
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
    get curFilter() {
      return R.pathOr('', ['js'], self.filters.toJSON())
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
    get active() {
      return stripMobx(self.activePost)
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
    markRoute(query) {
      self.root.route.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostsThreadStore
