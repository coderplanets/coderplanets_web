/*
 * ViewingStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { THREAD } from '@constant'
import { markStates, buildLog, stripMobx } from '@utils'
import { User, Community, Post, Job, Video, Repo } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:ViewingStore')

const PREVIEWABLE_THREADS = [THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO]

const ViewingStore = t
  .model('ViewingStore', {
    user: t.optional(User, {}),
    community: t.optional(Community, {}),
    post: t.optional(Post, {}),
    job: t.optional(Job, {}),
    video: t.optional(Video, {}),
    repo: t.optional(Repo, {}),
    activeThread: t.optional(
      t.enumeration('activeThread', R.values(THREAD)),
      THREAD.POST
    ),
    // for preview usage
    viewingThread: t.maybeNull(
      t.enumeration('viewingThread', PREVIEWABLE_THREADS)
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get isSelfViewing() {
      const { isLogin } = self.root.accountInfo
      if (!isLogin) return false

      const { id: accountId } = self.root.accountInfo
      const { id: userId } = self.user
      return accountId === userId
    },
    get currentThread() {
      return self.viewingThread || self.activeThread
    },
    get viewingData() {
      const curThread = self.viewingThread || self.activeThread
      switch (curThread) {
        case THREAD.JOB:
          return stripMobx(self.job)
        case THREAD.REPO:
          return stripMobx(self.repo)
        case THREAD.VIDEO:
          return stripMobx(self.video)
        default:
          return stripMobx(self.post)
      }
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.markState(sobj)
    },
    updateViewingIfNeed(type, sobj) {
      switch (type) {
        case 'user': {
          if (self.user.id !== self.accountInfo.id) return false
          return self.updateViewingUser(sobj)
        }
        default:
          return false
      }
    },
    updateViewingUser(sobj) {
      const user = R.merge(self.user, sobj)
      return self.markState({ user })
    },
    syncViewingItem(item) {
      const curThread = self.viewingThread || self.activeThread
      switch (curThread) {
        case THREAD.JOB:
          return self.root.jobsThread.updateItem(item)
        case THREAD.REPO:
          return self.root.reposThread.updateItem(item)
        case THREAD.VIDEO:
          return self.root.videosThread.updateItem(item)
        default: {
          return self.root.postsThread.updateItem(item)
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ViewingStore
