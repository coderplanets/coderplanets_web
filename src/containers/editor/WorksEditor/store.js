/*
 * WorksEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'

import { STEP } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:WorksEditor')

const WorksItem = T.model('WorksItem', {
  title: T.maybeNull(T.string),
  desc: T.maybeNull(T.string),
})

const WorksEditor = T.model('WorksEditor', {
  step: T.optional(
    T.enumeration([STEP.ZERO, STEP.ONE, STEP.TWO, STEP.THREE, STEP.FOUR]),
    STEP.ZERO,
  ),
  works: T.optional(WorksItem, {}),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get worksData() {
      return stripMobx(self.works)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default WorksEditor
