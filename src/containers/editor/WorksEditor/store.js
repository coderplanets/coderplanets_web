/*
 * WorksEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, toJS } from '@/utils/mobx'
import { nilOrEmpty } from '@/utils/validator'

import { STEP } from './constant'

const WorksItem = T.model('WorksItem', {
  title: T.maybeNull(T.string),
  desc: T.maybeNull(T.string),
  isOSS: T.optional(T.boolean, false),
  ossAddr: T.maybeNull(T.string),
})

const WorksEditor = T.model('WorksEditor', {
  works: T.optional(WorksItem, {}),
  step: T.optional(
    T.enumeration([STEP.ZERO, STEP.ONE, STEP.TWO, STEP.THREE, STEP.FOUR]),
    STEP.ZERO,
  ),
  useTemplate: T.optional(T.boolean, true),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get worksData() {
      return toJS(self.works)
    },
    get isCurrentStepValid() {
      const { step, worksData } = self
      switch (step) {
        case STEP.ZERO: {
          return !nilOrEmpty(worksData.title)
        }

        default: {
          return true
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
