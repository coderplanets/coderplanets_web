/*
 * WorksContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { values } from 'ramda'
import { markStates } from '@/utils/mobx'

import { VIEW } from './constant'

const WorksContent = T.model('WorksContent', {
  showSidebar: T.optional(T.boolean, false),
  activeView: T.optional(T.enumeration(values(VIEW)), VIEW.WORKS),
}).actions((self) => ({
  mark(sobj: Record<string, unknown>): void {
    markStates(sobj, self)
  },
}))

export type TStore = Instance<typeof WorksContent>
export default WorksContent
