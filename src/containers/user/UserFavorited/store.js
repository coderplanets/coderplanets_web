/*
 * UserFavorited store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, THREAD } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

import {
  PagedPosts,
  PagedJobs,
  PagedRepos,
  emptyPagi,
  FavoriteCategory,
} from '@/model'

const UserFavorited = T.model('UserFavorited', {
  curCategory: T.maybeNull(FavoriteCategory),
  curThread: T.optional(
    T.enumeration('favoriteThread', [THREAD.POST, THREAD.JOB, THREAD.REPO]),
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
  pagedPosts: T.optional(PagedPosts, emptyPagi),
  pagedJobs: T.optional(PagedJobs, emptyPagi),
  pagedRepos: T.optional(PagedRepos, emptyPagi),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curCategoryData() {
      return toJS(self.curCategory)
    },
    get viewingUser() {
      return toJS(self.root.viewing.user)
    },
    get pagedData() {
      switch (self.curThread) {
        case THREAD.JOB:
          return toJS(self.pagedJobs)

        case THREAD.REPO:
          return toJS(self.pagedRepos)

        default:
          return toJS(self.pagedPosts)
      }
    },
    get pagedPostsData() {
      return toJS(self.pagedPosts)
    },
  }))
  .actions((self) => ({
    markPagedData(pagedData) {
      const curView =
        pagedData.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

      switch (self.curThread) {
        case THREAD.JOB:
          return self.mark({ curView, pagedJobs: pagedData })

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
