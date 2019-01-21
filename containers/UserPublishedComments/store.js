/*
 * UserPublishedComments store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx, THREAD, TYPE } from 'utils'
import {
  PagedPostComments,
  PagedJobComments,
  PagedVideoComments,
  PagedRepoComments,
  emptyPagiData,
} from '../../stores/SharedModel'
/* eslint-disable-next-line */
const debug = makeDebugger('S:UserPublishedComments')

const UserPublishedComments = t
  .model('UserPublishedComments', {
    curThread: t.optional(
      t.enumeration('curThread', [
        THREAD.POST,
        THREAD.JOB,
        THREAD.VIDEO,
        THREAD.REPO,
      ]),
      THREAD.POST
    ),

    curView: t.optional(
      t.enumeration('curView', [
        TYPE.RESULT,
        TYPE.LOADING,
        TYPE.NOT_FOUND,
        TYPE.RESULT_EMPTY,
      ]),
      TYPE.LOADING
    ),

    pagedPostComments: t.optional(PagedPostComments, emptyPagiData),
    pagedJobComments: t.optional(PagedJobComments, emptyPagiData),
    pagedVideoComments: t.optional(PagedVideoComments, emptyPagiData),
    pagedRepoComments: t.optional(PagedRepoComments, emptyPagiData),
  })
  .views(self => ({
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
  .actions(self => ({
    markPagedData(pagedData) {
      const curView =
        pagedData.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

      switch (self.curThread) {
        case THREAD.JOB:
          return self.markState({ curView, pagedJobComments: pagedData })

        case THREAD.VIDEO:
          return self.markState({ curView, pagedVideoComments: pagedData })

        case THREAD.REPO:
          return self.markState({ curView, pagedRepoComments: pagedData })

        default:
          return self.markState({ curView, pagedPostComments: pagedData })
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserPublishedComments
