/*
 * WorksContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { values } from 'ramda'
import { markStates, buildLog } from '@/utils'

import { VIEW } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:WorksContent')

const WorksContent = T.model('WorksContent', {
  activeView: T.optional(T.enumeration(values(VIEW)), VIEW.WORKS),
}).actions((self) => ({
  mark(sobj: Record<string, unknown>): void {
    markStates(sobj, self)
  },
}))

export type TStore = Instance<typeof WorksContent>
export default WorksContent
