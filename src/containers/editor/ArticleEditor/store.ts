/*
 * ArticleEditor store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
import { values, pick } from 'ramda'

import type { TID, TCommunity } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { Community } from '@/model/Community'
import { STEP } from './constant'

const ArticleEditor = T.model('ArticleEditor', {
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
    // get root() {
    //   return getParent(self)
    // },
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
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleEditor>
export default ArticleEditor
