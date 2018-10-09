/*
 * UserLister store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { PagedUsers, emptyPagiData } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserLister')
/* eslint-enable no-unused-vars */

const UserLister = t
  .model('UserLister', {
    show: t.optional(t.boolean, false),
    curView: t.optional(
      t.enumeration('curView', [TYPE.RESULT, TYPE.LOADING, TYPE.RESULT_EMPTY]),
      TYPE.RESULT
    ),
    pagedUsers: t.optional(PagedUsers, emptyPagiData),
    type: t.optional(
      t.enumeration('type', [
        TYPE.USER_LISTER_FAVORITES,
        TYPE.USER_LISTER_STARS,
      ]),
      TYPE.USER_LISTER_FAVORITES
    ),
    id: t.maybeNull(t.string),
    thread: t.maybeNull(t.string),
    action: t.maybeNull(t.string),
    brief: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get pagedUsersData() {
      return stripMobx(self.pagedUsers)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserLister
