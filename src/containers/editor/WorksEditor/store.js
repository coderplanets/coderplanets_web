/*
 * WorksEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog } from '@/utils'

import { STEP } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:WorksEditor')

const WorksEditor = T.model('WorksEditor', {
  curStep: T.optional(
    T.enumeration([STEP.ZERO, STEP.ONE, STEP.TWO, STEP.THREE, STEP.FOUR]),
    STEP.ZERO,
  ),
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

export default WorksEditor
