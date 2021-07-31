/*
 * UserPublished store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, THREAD } from '@/constant'
import { markStates, stripMobx } from '@/utils/mobx'
import { PagedPosts, PagedJobs, PagedRepos, emptyPagiData } from '@/model'

const UserPublished = T.model('UserPublished', {
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
  pagedPosts: T.optional(PagedPosts, emptyPagiData),
  pagedJobs: T.optional(PagedJobs, emptyPagiData),
  pagedRepos: T.optional(PagedRepos, emptyPagiData),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get pagedData() {
      switch (self.curThread) {
        case THREAD.JOB:
          return stripMobx(self.pagedJobs)

        case THREAD.REPO:
          return stripMobx(self.pagedRepos)

        default:
          return stripMobx(self.pagedPosts)
      }
    },
  }))
  .actions((self) => ({
    markPagedData(pagedData) {
      const curView =
        pagedData.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

      switch (self.curThread) {
        case THREAD.JOB:
          return self.mark({ curView, pagedJobs: pagedData })

        case THREAD.REPO:
          return self.mark({ curView, pagedRepos: pagedData })

        default:
          return self.mark({ curView, pagedPosts: pagedData })
      }
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserPublished
