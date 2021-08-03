/*
 * UserProfile store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, stripMobx } from '@/utils/mobx'

const UserProfile = T.model('UserProfile', {})
  .views((self) => ({
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
  .actions((self) => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserProfile
