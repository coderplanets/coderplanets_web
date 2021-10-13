/*
 * ArticleEditor store
 *
 */

import { types as T, Instance, getParent } from 'mobx-state-tree'
import { values, pick } from 'ramda'

import type { TRootStore, TID, TCommunity, TArticle } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { ARTICLE_THREAD } from '@/constant'

import { Community, Post, Job } from '@/model'

const ArticleEditor = T.model('ArticleEditor', {
  mode: T.optional(T.enumeration(['publish', 'update']), 'publish'),
  thread: T.optional(
    T.enumeration(values(ARTICLE_THREAD)),
    ARTICLE_THREAD.POST,
  ),
  post: T.optional(Post, {}),
  job: T.optional(Job, {}),
  title: T.optional(T.string, ''),
  body: T.optional(T.string, '{}'),
  linkAddr: T.optional(T.string, ''),
  copyRight: T.optional(T.string, 'cc'),
  isQuestion: T.optional(T.boolean, false),
  community: T.optional(Community, {}),
  // showSubTitle: T.optional(T.boolean, false),
  publishing: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get communityData(): TCommunity {
      return toJS(self.community)
    },
    get communityId(): TID {
      return self.community.id
    },
    get editingData() {
      return pick(
        ['title', 'body', 'copyRight', 'isQuestion', 'linkAddr'],
        self,
      )
    },
  }))
  .actions((self) => ({
    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },
    loadEditData(article: TArticle): void {
      const {
        title,
        copyRight,
        linkAddr,
        isQuestion,
        document,
        originalCommunity,
      } = article

      self.title = title
      self.copyRight = copyRight

      if (document?.body) self.body = document.body

      // @ts-ignore
      if (originalCommunity) self.community = originalCommunity
      if (linkAddr) self.linkAddr = linkAddr
      if (isQuestion) self.isQuestion = isQuestion
    },

    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleEditor>
export default ArticleEditor
