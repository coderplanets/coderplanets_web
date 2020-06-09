/*
 * UserFavorited store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

import {
  PagedPosts,
  PagedJobs,
  PagedVideos,
  PagedRepos,
  emptyPagiData,
  FavoriteCategory,
} from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:UserFavorited')

const UserFavorited = T.model('UserFavorited', {
  curCategory: T.maybeNull(FavoriteCategory),
  curThread: T.optional(
    T.enumeration('favoriteThread', [
      THREAD.POST,
      THREAD.VIDEO,
      THREAD.JOB,
      THREAD.REPO,
    ]),
    THREAD.POST,
  ),
  parentView: T.optional(
    T.enumeration('parentView', [
      // category list view
      'CATEGORY_LIST',
      // details of a single category
      'CATEGORY_DETAIL',
    ]),
    'CATEGORY_LIST',
  ),

  curView: T.optional(
    T.enumeration('curView', [
      TYPE.RESULT,
      TYPE.LOADING,
      TYPE.NOT_FOUND,
      TYPE.RESULT_EMPTY,
    ]),
    TYPE.LOADING,
  ),
  pagedPosts: T.optional(PagedPosts, emptyPagiData),
  pagedJobs: T.optional(PagedJobs, emptyPagiData),
  pagedVideos: T.optional(PagedVideos, emptyPagiData),
  pagedRepos: T.optional(PagedRepos, emptyPagiData),
})
  .views((self) => ({
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
        case THREAD.JOB:
          return stripMobx(self.pagedJobs)

        case THREAD.VIDEO:
          return stripMobx(self.pagedVideos)

        case THREAD.REPO:
          return stripMobx(self.pagedRepos)

        default:
          return stripMobx(self.pagedPosts)
      }
    },
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
    },
  }))
  .actions((self) => ({
    markPagedData(pagedData) {
      const curView =
        pagedData.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

      switch (self.curThread) {
        case THREAD.JOB:
          return self.mark({ curView, pagedJobs: pagedData })

        case THREAD.VIDEO:
          return self.mark({ curView, pagedVideos: pagedData })

        case THREAD.REPO:
          return self.mark({ curView, pagedRepos: pagedData })

        default:
          return self.mark({ curView, pagedPosts: pagedData })
      }
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserFavorited
