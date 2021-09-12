/*
 * UserPublishedComments store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, THREAD } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

const UserPublishedComments = T.model('UserPublishedComments', {
  curThread: T.optional(
    T.enumeration('curThread', [THREAD.POST, THREAD.JOB, THREAD.REPO]),
    THREAD.POST,
  ),

  curView: T.optional(
    T.enumeration('curView', [
      TYPE.RESULT,
      TYPE.LOADING,
      TYPE.NOT_FOUND,
      TYPE.RESULT_EMPTY,
    ]),
    TYPE.LOADING,
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewingUser() {
      return toJS(self.root.viewing.user)
    },
    get pagedCommentsData() {
      return {}
    },
  }))
  .actions((self) => ({
    markPagedData(pagedData) {
      return {}
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserPublishedComments
