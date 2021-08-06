/*
 * WorksEditor store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TWorks } from '@/spec'
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
    get worksData(): TWorks {
      return toJS(self.works)
    },
    get isCurrentStepValid(): boolean {
      const slf = self as TStore
      const { step, worksData } = slf
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
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof WorksEditor>
export default WorksEditor
