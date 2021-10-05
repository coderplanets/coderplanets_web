/*
 * ArticleEditor store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import { markStates } from '@/utils/mobx'

import { STEP } from './constant'

const ArticleEditor = T.model('ArticleEditor', {
  step: T.optional(T.enumeration(values(STEP)), STEP.EDIT),
  showSubTitle: T.optional(T.boolean, false),
})
  .views((self) => ({
    // get root() {
    //   return getParent(self)
    // },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleEditor>
export default ArticleEditor
