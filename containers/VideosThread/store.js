/*
 * VideosThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  PagedVideos,
  Tag,
  ContentFilter,
  emptyPagiData,
} from '../../stores/SharedModel'

import {
  makeDebugger,
  markStates,
  stripMobx,
  TYPE,
  nilOrEmpty,
} from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('S:VideosThread')

const VideosThread = t
  .model('VideosThread', {
    pagedVideos: t.optional(PagedVideos, emptyPagiData),
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
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get pagedVideosData() {
      return stripMobx(self.pagedVideos)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get filtersData() {
      return stripMobx(self.filters)
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || {}
    },
    get tagQuery() {
      const curTag = stripMobx(self.activeTag)
      if (nilOrEmpty(curTag)) return {}
      return { tag: curTag.title }
    },
    get activeVideo() {
      return stripMobx(self.root.viewing.video)
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
      const { entries } = self.pagedVideosData
      const index = R.findIndex(R.propEq('id', id), entries)
      if (index >= 0) {
        self.pagedVideos.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item) {
      const { entries } = self.pagedVideosData
      const index = R.findIndex(R.propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedVideos.entries[index] = R.merge(
          stripMobx(self.pagedVideos.entries[index]),
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

export default VideosThread
