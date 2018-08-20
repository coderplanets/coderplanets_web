/*
 * UserBanner store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserBanner')
/* eslint-enable no-unused-vars */

const UserBanner = t
  .model('UserBanner', {
    showDetail: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserBanner
