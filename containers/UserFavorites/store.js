/*
 * UserFavorites store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

/* import { markStates, makeDebugger, stripMobx, TYPE, FILTER } from '../../utils' */
import { PagedPosts, emptyPagiData } from '../../stores/SharedModel'

import { markStates, makeDebugger, TYPE, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserFavorites')
/* eslint-enable no-unused-vars */

// NOTE: add me to ../../stores/index && ../../stores/RootStore/index
const UserFavorites = t
  .model('UserFavorites', {
    pagedPosts: t.optional(PagedPosts, emptyPagiData),
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
    get pagedPostsData() {
      return stripMobx(self.pagedPosts)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserFavorites
