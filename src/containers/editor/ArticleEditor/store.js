/*
 * ArticleEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { values } from 'ramda'

import { markStates } from '@/utils/mobx'

import { STEP } from './constant'

const ArticleEditor = T.model('ArticleEditor', {
  step: T.optional(T.enumeration(values(STEP)), STEP.EDIT),
  showSubTitle: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleEditor
