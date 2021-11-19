/*
 * CoolGuideContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore } from '@/spec'
import { GUIDE } from '@/constant'
import { markStates } from '@/utils/mobx'

const CoolGuideContent = T.model('CoolGuideContent', {
  activeMenuId: T.maybeNull(T.string),
  // initActiveMenuId: T.optional(T.string, ''),
  topFilter: T.optional(T.string, 'all'),
  displayType: T.optional(T.enumeration(values(GUIDE)), GUIDE.HOME),
}).actions((self) => ({
  markRoute(query): void {
    const root = getParent(self) as TRootStore
    root.markRoute(query)
  },
  mark(sobj: Record<string, unknown>): void {
    markStates(sobj, self)
  },
}))

export type TStore = Instance<typeof CoolGuideContent>
export default CoolGuideContent
