/*
 * UserPublishedComments store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'
import {
  PagedPostComments,
  PagedJobComments,
  PagedVideoComments,
  PagedRepoComments,
  emptyPagiData,
} from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:UserPublishedComments')

const UserPublishedComments = T.model('UserPublishedComments', {
  curThread: T.optional(
    T.enumeration('curThread', [
      THREAD.POST,
      THREAD.JOB,
      THREAD.VIDEO,
      THREAD.REPO,
    ]),
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

  pagedPostComments: T.optional(PagedPostComments, emptyPagiData),
  pagedJobComments: T.optional(PagedJobComments, emptyPagiData),
  pagedVideoComments: T.optional(PagedVideoComments, emptyPagiData),
  pagedRepoComments: T.optional(PagedRepoComments, emptyPagiData),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
    get pagedCommentsData() {
      switch (self.curThread) {
        case THREAD.JOB: {
          return stripMobx(self.pagedJobComments)
        }
        case THREAD.VIDEO: {
          return stripMobx(self.pagedVideoComments)
        }
        case THREAD.REPO: {
          return stripMobx(self.pagedRepoComments)
        }
        default: {
          return stripMobx(self.pagedPostComments)
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

        case THREAD.VIDEO:
          return self.mark({ curView, pagedVideoComments: pagedData })

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
