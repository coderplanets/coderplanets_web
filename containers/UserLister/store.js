/*
 * UserLister store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { PagedUsers, emptyPagiData } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:UserLister')

const UserLister = t
  .model('UserLister', {
    show: t.optional(t.boolean, false),
    curView: t.optional(
      t.enumeration('curView', [TYPE.RESULT, TYPE.LOADING, TYPE.RESULT_EMPTY]),
      TYPE.LOADING
    ),
    pagedUsers: t.optional(PagedUsers, emptyPagiData),
    type: t.optional(
      t.enumeration('type', [
        TYPE.USER_LISTER_FAVORITES,
        TYPE.USER_LISTER_STARS,
        TYPE.USER_LISTER_COMMUNITY_EDITORS,
        TYPE.USER_LISTER_FOLLOWINGS,
        TYPE.USER_LISTER_FOLLOWERS,
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
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
  }))
  .actions(self => ({
    toggleHasFollow(userId) {
      const { entries } = self.pagedUsersData

      const index = R.findIndex(R.propEq('id', userId), entries)
      if (index >= 0) {
        debug('found you! ', entries[index])
        const curIsFollow = self.pagedUsers.entries[index].hasFollowd
        self.pagedUsers.entries[index].hasFollowd = !curIsFollow
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserLister
