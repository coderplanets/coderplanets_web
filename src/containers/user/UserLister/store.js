/*
 * UserLister store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { findIndex, propEq } from 'ramda'

import { TYPE } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'
import { PagedUsers, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:UserLister')

const UserLister = T.model('UserLister', {
  show: T.optional(T.boolean, false),
  curView: T.optional(
    T.enumeration('curView', [TYPE.RESULT, TYPE.LOADING, TYPE.RESULT_EMPTY]),
    TYPE.LOADING
  ),
  pagedUsers: T.optional(PagedUsers, emptyPagiData),
  type: T.optional(
    T.enumeration('type', [
      TYPE.USER_LISTER_FAVORITES,
      TYPE.USER_LISTER_STARS,
      TYPE.USER_LISTER_COMMUNITY_EDITORS,
      TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS,
      TYPE.USER_LISTER_FOLLOWINGS,
      TYPE.USER_LISTER_FOLLOWERS,
    ]),
    TYPE.USER_LISTER_FAVORITES
  ),
  id: T.maybeNull(T.string),
  thread: T.maybeNull(T.string),
  action: T.maybeNull(T.string),
  brief: T.optional(T.string, ''),
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

      const index = findIndex(propEq('id', userId), entries)
      if (index >= 0) {
        const curIsFollow = self.pagedUsers.entries[index].viewerHasFollowed
        self.pagedUsers.entries[index].viewerHasFollowed = !curIsFollow
      }
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserLister
