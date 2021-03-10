/*
 * HelpCenterContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import { TCommunity } from '@/types'
import { markStates, buildLog, stripMobx } from '@/utils'

import { VIEW } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:HelpCenterContent')

export const HelpCenterContent = T.model('HelpCenterContent', {
  view: T.optional(T.enumeration(values(VIEW)), VIEW.COVER),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curCommunity(): TCommunity {
      // @ts-ignore
      return stripMobx(self.root.viewing.community)
      // return stripMobx(self.getParent().viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type IStore = Instance<typeof HelpCenterContent>
export default HelpCenterContent
