/*
 * UsersStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'
import { User } from '../SharedModel'
import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UsersStore')
/* eslint-enable no-unused-vars */

const UsersStore = t
  .model('UsersStore', {
    all: t.maybeNull(t.array(User)),
    visiting: User,
    // filter: ...
    // account: ..
    // curVisit: ...
    // all: ...
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UsersStore
