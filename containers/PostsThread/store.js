/*
 * PostsThreadStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  PagedPosts,
  Tag,
  ContentFilter,
  emptyPagiData,
} from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostsThreadStore')
/* eslint-enable no-unused-vars */

const PostsThreadStore = t
  .model('PostsThreadStore', {
    pagedPosts: t.optional(PagedPosts, emptyPagiData),
    filters: t.optional(ContentFilter, {}),
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
    get curThread() {
      return self.root.viewing.activeThread
    },
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
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
      if (R.isEmpty(curTag)) return {}
      return { tag: curTag.title }
    },
    get activePost() {
      return stripMobx(self.root.viewing.post)
    },
  }))
  .actions(self => ({
    toastInfo(options) {
      self.root.toast('info', R.merge({ position: 'topCenter' }, options))
    },
    isMemberOf(type) {
      return self.root.isMemberOf(type)
    },
    upgradeHepler() {
      self.root.upgradeHepler()
    },
    authWarning(options) {
      self.root.authWarning(options)
    },
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
      const { entries } = self.pagedPostsData
      const index = R.findIndex(R.propEq('id', id), entries)
      if (index >= 0) {
        self.pagedPosts.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item) {
      const { entries } = self.pagedPostsData
      const index = R.findIndex(R.propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedPosts.entries[index] = R.merge(
          stripMobx(self.pagedPosts.entries[index]),
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

export default PostsThreadStore
