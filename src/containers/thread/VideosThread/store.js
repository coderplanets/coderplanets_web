/*
 * VideosThread store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { findIndex, merge, propEq, isEmpty, pickBy } from 'ramda'

import { TYPE, THREAD } from '@/constant'
import { buildLog, markStates, stripMobx, nilOrEmpty, isObject } from '@/utils'
import { PagedVideos, Tag, ContentFilter, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:VideosThread')

const VideosThread = T.model('VideosThread', {
  pagedVideos: T.optional(PagedVideos, emptyPagiData),
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
    get pageDensity() {
      return self.root.account.pageDensity
    },
    get showFilterBar() {
      const curFilter = stripMobx(pickBy(v => !isEmpty(v), self.filters))
      const pagedVideos = stripMobx(self.pagedVideos)

      return !isEmpty(curFilter) || !isEmpty(pagedVideos.entries)
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = merge(curfilter, option)
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
      const index = findIndex(propEq('id', id), entries)
      if (index >= 0) {
        self.pagedVideos.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item) {
      const { entries } = self.pagedVideosData
      const index = findIndex(propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedVideos.entries[index] = merge(
          stripMobx(self.pagedVideos.entries[index]),
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
            preview: THREAD.VIDEO,
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

export default VideosThread
