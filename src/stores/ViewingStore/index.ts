/*
 * ViewingStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values, merge } from 'ramda'

import type { TRootStore, TUser, TArticle, TThread, TAccount } from '@/spec'
import { THREAD } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import { User, Community, Post, Blog, Job, Repo } from '@/model'

const PREVIEWABLE_THREADS = [THREAD.POST, THREAD.JOB, THREAD.REPO]

const ViewingStore = T.model('ViewingStore', {
  user: T.optional(User, {}),
  community: T.optional(Community, {}),
  post: T.optional(Post, {}),
  blog: T.optional(Blog, {}),
  job: T.optional(Job, {}),
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
          return toJS(self.job)
        case THREAD.BLOG:
          return toJS(self.blog)
        case THREAD.REPO:
          return toJS(self.repo)
        case THREAD.POST:
          return toJS(self.post)
        default:
          return toJS(self.post)
      }
    },

    get viewingArticle(): TArticle {
      const curThread = self.viewingThread || self.activeThread
      if (!curThread) return {}
      return toJS(self[curThread])
    },
  }))
  .actions((self) => ({
    setViewing(sobj): void {
      const { mark } = self as TStore
      mark(sobj)
    },
    resetViewing(): void {
      const { mark, viewingThread } = self as TStore
      mark({ [viewingThread]: {}, viewingThread: null })
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
      root.articlesThread.updateItem(item)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ViewingStore>
export default ViewingStore
