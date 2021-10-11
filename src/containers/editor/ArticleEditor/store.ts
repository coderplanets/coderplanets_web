/*
 * ArticleEditor store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TCommunity } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { Community } from '@/model/Community'
import { STEP } from './constant'

const ArticleEditor = T.model('ArticleEditor', {
  community: T.optional(Community, {}),
  step: T.optional(T.enumeration(values(STEP)), STEP.EDIT),
  showSubTitle: T.optional(T.boolean, false),
})
  .views((self) => ({
    // get root() {
    //   return getParent(self)
    // },
    get communityData(): TCommunity {
      return toJS(self.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleEditor>
export default ArticleEditor
