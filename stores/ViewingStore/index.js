/*
 * ViewingStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { User, Community, Post, Job, Video, Repo } from '../SharedModel'
import { markStates, makeDebugger, THREAD, stripMobx } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ViewingStore')
/* eslint-enable no-unused-vars */

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
    get viewingData() {
      const curThread = self.viewingThread || self.activeThread
      switch (curThread) {
        case THREAD.JOB: {
          return stripMobx(self.job)
        }
        case THREAD.REPO: {
          return stripMobx(self.repo)
        }
        case THREAD.VIDEO: {
          return stripMobx(self.video)
        }
        default: {
          return stripMobx(self.post)
        }
      }
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.markState(sobj)
    },
    updateViewingIfNeed(type, sobj) {
      // console.log('updateViewingIfNeed: type: ', type)
      // console.log('updateViewingIfNeed: sobj: ', sobj)

      switch (type) {
        case 'user': {
          if (self.user.id !== self.accountInfo.id) return false
          const user = R.merge(self.user, sobj)
          return self.markState({ user })
        }
        default:
          return false
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ViewingStore
