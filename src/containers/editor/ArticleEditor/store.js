/*
 * ArticleEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { values } from 'ramda'

import { markStates, buildLog } from '@/utils'

import { STEP } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleEditor')

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
