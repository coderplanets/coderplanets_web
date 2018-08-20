/*
* UserContent store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, USER_THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserContent')
/* eslint-enable no-unused-vars */

const UserContent = t
  .model('UserContent', {
    activeThread: t.optional(
      t.enumeration('activeThread', R.values(USER_THREAD)),
      USER_THREAD.ACTIVITIES
    ),
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

export default UserContent
