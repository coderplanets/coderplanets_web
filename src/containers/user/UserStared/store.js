/*
 * UserStared store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, THREAD } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'
import { PagedPosts, PagedJobs, PagedVideos, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:UserStared')

const UserStared = T.model('UserStared', {
  curThread: T.optional(
    T.enumeration('curThread', [
      THREAD.POST,
      THREAD.JOB,
      THREAD.VIDEO,
      THREAD.REPO,
    ]),
    THREAD.POST
  ),
  curView: T.optional(
    T.enumeration('curView', [
      TYPE.RESULT,
      TYPE.LOADING,
      TYPE.NOT_FOUND,
      TYPE.RESULT_EMPTY,
    ]),
    TYPE.LOADING
  ),
  pagedPosts: T.optional(PagedPosts, emptyPagiData),
  pagedJobs: T.optional(PagedJobs, emptyPagiData),
  pagedVideos: T.optional(PagedVideos, emptyPagiData),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
    get pagedData() {
      switch (self.curThread) {
        case THREAD.JOB:
          return stripMobx(self.pagedJobs)

        case THREAD.VIDEO:
          return stripMobx(self.pagedVideos)

        default:
          return stripMobx(self.pagedPosts)
      }
    },
    get accountInfo() {
      return self.root.accountInfo
    },
  }))
  .actions(self => ({
    markPagedData(pagedData) {
      const curView =
        pagedData.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

      switch (self.curThread) {
        case THREAD.JOB: {
          return self.mark({ curView, pagedJobs: pagedData })
        }
        case THREAD.VIDEO: {
          return self.mark({ curView, pagedVideos: pagedData })
        }
        default: {
          return self.mark({ curView, pagedPosts: pagedData })
        }
      }
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserStared
