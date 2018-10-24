/*
 * VideosThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { makeDebugger, markStates, stripMobx, TYPE, FILTER } from '../../utils'
import { PagedVideos, Tag, emptyPagiData } from '../../stores/SharedModel'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:VideosThread')
/* eslint-enable no-unused-vars */

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

const VideosThread = t
  .model('VideosThread', {
    pagedVideos: t.optional(PagedVideos, emptyPagiData),
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
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get tagsData() {
      return stripMobx(self.tags)
    },
    get filtersData() {
      return stripMobx(self.filters)
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
    get pagedVideosData() {
      return stripMobx(self.pagedVideos)
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
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default VideosThread
