/*
 * UserPublishedArticles store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values, includes } from 'ramda'

import type {
  TCommunity,
  TRootStore,
  TUser,
  TArticleThread,
  TPagedArticles,
  TC11N,
  TGlobalLayout,
} from '@/spec'
import { TYPE, ARTICLE_THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { plural } from '@/utils/helper'

import {
  PagedPosts,
  PagedJobs,
  PagedBlogs,
  PagedRadars,
  PagedWorks,
  emptyPagi,
} from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:UserPublishedArticles')

const UserPublishedArticles = T.model('UserPublishedArticles', {
  thread: T.optional(
    T.enumeration(values(ARTICLE_THREAD)),
    ARTICLE_THREAD.POST,
  ),
  pagedPosts: T.optional(PagedPosts, emptyPagi),
  pagedJobs: T.optional(PagedJobs, emptyPagi),
  pagedBlogs: T.optional(PagedBlogs, emptyPagi),
  pagedRadars: T.optional(PagedRadars, emptyPagi),
  pagedWorks: T.optional(PagedWorks, emptyPagi),

  resState: T.optional(
    T.enumeration('resState', values(TYPE.RES_STATE)),
    TYPE.RES_STATE.DONE,
  ),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get c11n(): TC11N {
      const root = getParent(self) as TRootStore
      return root.account.c11n
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
    get viewingUser(): TUser {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.user)
    },

    get curThread(): TArticleThread {
      return 'post'
    },

    get pagedArticlesData(): TPagedArticles {
      const pagedThreadKey = `paged${plural(self.thread, 'titleCase')}`
      return toJS(self[pagedThreadKey])
    },

    get hasContentBg(): boolean {
      return !includes(self.thread, [ARTICLE_THREAD.JOB, ARTICLE_THREAD.RADAR])
    },
    get globalLayout(): TGlobalLayout {
      const root = getParent(self) as TRootStore
      return root.dashboardThread.globalLayout
    },
  }))
  .actions((self) => ({
    markRes(res: Record<string, TPagedArticles>): void {
      const slf = self as TStore
      const pagedData = values(res)[0] as TPagedArticles

      if (pagedData.totalCount === 0) {
        slf.resState = TYPE.RES_STATE.EMPTY
      } else {
        slf.resState = TYPE.RES_STATE.DONE
      }

      slf.mark(res)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof UserPublishedArticles>
export default UserPublishedArticles
