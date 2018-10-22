/*
 * UserFavorited store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

/* import { markStates, makeDebugger, stripMobx, TYPE, FILTER } from '../../utils' */
import {
  PagedPosts,
  PagedJobs,
  PagedVideos,
  PagedRepos,
  emptyPagiData,
  FavoriteCategory,
} from '../../stores/SharedModel'

import { markStates, makeDebugger, TYPE, stripMobx, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserFavorited')
/* eslint-enable no-unused-vars */

const UserFavorited = t
  .model('UserFavorited', {
    curCategory: t.maybeNull(FavoriteCategory),
    curThread: t.optional(
      t.enumeration('favoriteThread', [
        THREAD.POST,
        THREAD.VIDEO,
        THREAD.JOB,
        THREAD.REPO,
      ]),
      THREAD.POST
    ),
    parentView: t.optional(
      t.enumeration('parentView', [
        // category list view
        'CATEGORY_LIST',
        // details of a single category
        'CATEGORY_DETAIL',
      ]),
      'CATEGORY_LIST'
    ),

    curView: t.optional(
      t.enumeration('curView', [
        TYPE.RESULT,
        TYPE.LOADING,
        TYPE.NOT_FOUND,
        TYPE.RESULT_EMPTY,
      ]),
      TYPE.LOADING
    ),
    pagedPosts: t.optional(PagedPosts, emptyPagiData),
    pagedJobs: t.optional(PagedJobs, emptyPagiData),
    pagedVideos: t.optional(PagedVideos, emptyPagiData),
    pagedRepos: t.optional(PagedRepos, emptyPagiData),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCategoryData() {
      return stripMobx(self.curCategory)
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
    get pagedData() {
      switch (self.curThread) {
        case THREAD.JOB: {
          return stripMobx(self.pagedJobs)
        }
        case THREAD.VIDEO: {
          return stripMobx(self.pagedVideos)
        }
        case THREAD.REPO: {
          return stripMobx(self.pagedRepos)
        }
        default: {
          return stripMobx(self.pagedPosts)
        }
      }
    },
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
    },
  }))
  .actions(self => ({
    markPagedData(pagedData) {
      const curView =
        pagedData.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

      switch (self.curThread) {
        case THREAD.JOB: {
          return self.markState({ curView, pagedJobs: pagedData })
        }
        case THREAD.VIDEO: {
          return self.markState({ curView, pagedVideos: pagedData })
        }
        default: {
          return self.markState({ curView, pagedPosts: pagedData })
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserFavorited
