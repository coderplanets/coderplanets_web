/*
 * HelpCenterContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore, TCommunity } from '@/spec'
import { markStates, buildLog, stripMobx } from '@/utils'

import { VIEW } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:HelpCenterContent')

export const HelpCenterContent = T.model('HelpCenterContent', {
  view: T.optional(T.enumeration(values(VIEW)), VIEW.COVER),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      // see https://github.com/mobxjs/mobx-state-tree/issues/371#issuecomment-479369372
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof HelpCenterContent>
export default HelpCenterContent
