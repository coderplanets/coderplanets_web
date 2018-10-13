/*
 * UserFavorited store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

/* import { markStates, makeDebugger, stripMobx, TYPE, FILTER } from '../../utils' */
import {
  PagedPosts,
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
    favoriteThread: t.optional(
      t.enumeration('favoriteThread', [
        THREAD.POST,
        THREAD.VIDEO,
        THREAD.REPO,
        THREAD.JOB,
      ]),
      THREAD.POST
    ),
    pagedPosts: t.optional(PagedPosts, emptyPagiData),
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
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCategoryData() {
      return stripMobx(self.curCategory)
    },
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserFavorited
