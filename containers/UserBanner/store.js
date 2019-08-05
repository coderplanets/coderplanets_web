/*
 * UserBanner store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog, stripMobx } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:UserBanner')

const UserBanner = t
  .model('UserBanner', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserBanner
