/*
 * ArticleEditor store
 *
 */

import { types as T, Instance, getParent } from 'mobx-state-tree'
import { values, pick } from 'ramda'

import type { TRootStore, TID, TCommunity, TArticle } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { Community } from '@/model/Community'
import { STEP } from './constant'

const ArticleEditor = T.model('ArticleEditor', {
  mode: T.optional(T.enumeration(['publish', 'update']), 'publish'),
  title: T.optional(T.string, ''),
  body: T.optional(T.string, '{}'),
  linkAddr: T.optional(T.string, ''),
  copyRight: T.optional(T.string, 'cc'),
  isQuestion: T.optional(T.boolean, false),
  community: T.optional(Community, {}),
  step: T.optional(T.enumeration(values(STEP)), STEP.EDIT),
  // showSubTitle: T.optional(T.boolean, false),
  publishing: T.optional(T.boolean, false),
})
  .views((self) => ({
    get communityData(): TCommunity {
      return toJS(self.community)
    },
    get communityId(): TID {
      return self.community.id
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewingArticle)
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
    loadEditData(): void {
      const { viewingArticle } = self
      const { title, copyRight, linkAddr, isQuestion, document } =
        viewingArticle

      self.title = title
      self.copyRight = copyRight

      if (document?.body) self.body = document.body

      if (linkAddr) self.linkAddr = linkAddr
      if (isQuestion) self.isQuestion = isQuestion
    },

    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleEditor>
export default ArticleEditor
