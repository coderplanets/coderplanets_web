/*
 * UserPublishedComments store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, THREAD } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import {
  PagedPostComments,
  PagedJobComments,
  PagedRepoComments,
  emptyPagi,
} from '@/model'

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

  pagedPostComments: T.optional(PagedPostComments, emptyPagi),
  pagedJobComments: T.optional(PagedJobComments, emptyPagi),
  pagedRepoComments: T.optional(PagedRepoComments, emptyPagi),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewingUser() {
      return toJS(self.root.viewing.user)
    },
    get pagedCommentsData() {
      switch (self.curThread) {
        case THREAD.JOB: {
          return toJS(self.pagedJobComments)
        }
        case THREAD.REPO: {
          return toJS(self.pagedRepoComments)
        }
        default: {
          return toJS(self.pagedPostComments)
        }
      }
    },
  }))
  .actions((self) => ({
    markPagedData(pagedData) {
      const curView =
        pagedData.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

      switch (self.curThread) {
        case THREAD.JOB:
          return self.mark({ curView, pagedJobComments: pagedData })

        case THREAD.REPO:
          return self.mark({ curView, pagedRepoComments: pagedData })

        default:
          return self.mark({ curView, pagedPostComments: pagedData })
      }
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserPublishedComments
