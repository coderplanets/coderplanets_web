/*
 * UserLister store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { PagedUsers, emptyPagiData } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserLister')
/* eslint-enable no-unused-vars */

const UserLister = t
  .model('UserLister', {
    show: t.optional(t.boolean, false),
    pagedUsers: t.optional(PagedUsers, emptyPagiData),
  })
  .views(self => ({
    get root() {
      return getParent(self)
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
