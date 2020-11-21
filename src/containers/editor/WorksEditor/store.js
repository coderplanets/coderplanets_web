/*
 * WorksEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx, nilOrEmpty } from '@/utils'

import { STEP } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:WorksEditor')

const WorksItem = T.model('WorksItem', {
  title: T.maybeNull(T.string),
  desc: T.maybeNull(T.string),
  isOSS: T.optional(T.boolean, false),
  ossAddr: T.maybeNull(T.string),
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
    get isCurrentStepValid() {
      const { step, worksData } = self
      switch (step) {
        case STEP.ZERO: {
          return !nilOrEmpty(worksData.title)
        }

        default: {
          return false
        }
      }
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default WorksEditor
