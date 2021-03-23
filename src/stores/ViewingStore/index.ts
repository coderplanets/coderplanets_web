/*
 * ViewingStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values, merge } from 'ramda'

import type { TRootStore, TUser, TArticle, TThread, TAccount } from '@/spec'
import { THREAD } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'
import { User, Community, Post, Job, Video, Repo } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:ViewingStore')

const PREVIEWABLE_THREADS = [THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO]

const ViewingStore = T.model('ViewingStore', {
  user: T.optional(User, {}),
  community: T.optional(Community, {}),
  post: T.optional(Post, {}),
  job: T.optional(Job, {}),
  video: T.optional(Video, {}),
  repo: T.optional(Repo, {}),
  activeThread: T.optional(
    T.enumeration('activeThread', values(THREAD)),
    THREAD.POST,
  ),
  // for drawer usage
  viewingThread: T.maybeNull(
    T.enumeration('viewingThread', PREVIEWABLE_THREADS),
  ),
})
  .views((self) => ({
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get isSelfViewing(): boolean {
      const root = getParent(self) as TRootStore
      const { isLogin } = root.accountInfo
      if (!isLogin) return false

      const { id: accountId } = root.accountInfo
      const { id: userId } = self.user
      return accountId === userId
    },
    get currentThread(): TThread {
      return self.viewingThread || self.activeThread
    },
    get viewingData(): TArticle {
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
  .actions((self) => ({
    setViewing(sobj): void {
      const { mark } = self as TStore
      mark(sobj)
    },
    updateViewingIfNeed(type, sobj): void {
      const { updateViewingUser } = self as TStore

      switch (type) {
        case 'user': {
          if (self.user.id !== self.accountInfo.id) return
          updateViewingUser(sobj)
          break
        }
        default:
          break
      }
    },
    updateViewingUser(sobj: TUser): void {
      const user = merge(self.user, sobj)
      const { mark } = self as TStore

      return mark({ user })
    },
    syncViewingItem(item: TArticle): void {
      const root = getParent(self) as TRootStore
      const curThread = self.viewingThread || self.activeThread

      switch (curThread) {
        case THREAD.JOB:
          root.jobsThread.updateItem(item)
          return
        case THREAD.REPO:
          root.reposThread.updateItem(item)
          return
        case THREAD.VIDEO:
          root.videosThread.updateItem(item)
          return
        default: {
          root.postsThread.updateItem(item)
        }
      }
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ViewingStore>
export default ViewingStore
