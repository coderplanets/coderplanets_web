/*
 * ArticleEditor store
 *
 */

import { types as T, Instance, getParent } from 'mobx-state-tree'
import { pick } from 'ramda'

import type {
  TRootStore,
  TID,
  TCommunity,
  TArticle,
  TTag,
  TArticleThread,
} from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { Community } from '@/model'

const ArticleEditor = T.model('ArticleEditor', {
  mode: T.optional(T.enumeration(['publish', 'update']), 'publish'),
  title: T.optional(T.string, ''),
  body: T.optional(T.string, '{}'),
  linkAddr: T.optional(T.string, ''),
  copyRight: T.optional(T.string, 'cc'),
  isQuestion: T.optional(T.boolean, false),
  community: T.optional(Community, {}),
  // showSubTitle: T.optional(T.boolean, false),
  publishing: T.optional(T.boolean, false),
  publishDone: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.viewingArticle)
    },
    get thread(): TArticleThread {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.activeThread)
    },
    get communityData(): TCommunity {
      return toJS(self.community)
    },
    get communityId(): TID {
      return self.community.id
    },
    get tagsData(): TTag[] {
      const slf = self as TStore
      return toJS(slf.viewingArticle.articleTags)
    },
    get editingData() {
      return pick(
        ['title', 'body', 'copyRight', 'isQuestion', 'linkAddr'],
        self,
      )
    },
    get publishState() {
      return pick(['publishing', 'publishDone'], self)
    },
  }))
  .actions((self) => ({
    setViewing(article: TArticle): void {
      const root = getParent(self) as TRootStore
      const thread = article.meta.thread.toLowerCase()

      return root.viewing.setViewing({
        viewingThread: thread,
        [thread]: article,
      })
    },
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
    reset(): void {
      self.mode = 'publish'
      self.title = ''
      self.body = '{}'
      self.linkAddr = ''
      self.copyRight = 'cc'
      self.isQuestion = false

      self.publishing = false
      self.publishDone = false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleEditor>
export default ArticleEditor
