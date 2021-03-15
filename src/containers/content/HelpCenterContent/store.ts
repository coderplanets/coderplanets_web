/*
 * HelpCenterContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore, TCommunity } from '@/spec'
import type { TVisibles } from './spec'
import { markStates, buildLog, stripMobx } from '@/utils'

import { VIEW } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:HelpCenterContent')

export const HelpCenterContent = T.model('HelpCenterContent', {
  view: T.optional(T.enumeration(values(VIEW)), VIEW.COVER),
  uselessClicked: T.optional(T.boolean, false),
})
  .views((self: TStore) => ({
    get curCommunity(): TCommunity {
      // see https://github.com/mobxjs/mobx-state-tree/issues/371#issuecomment-479369372
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },
    get showReaction(): boolean {
      if (self.view === VIEW.COVER) return false

      return true
    },
    get showHelpInfo(): boolean {
      if (self.view === VIEW.COVER) return true

      return self.uselessClicked
    },
    get visibles(): TVisibles {
      const { showReaction, showHelpInfo, uselessClicked } = self

      return {
        showReaction,
        showHelpInfo,
        uselessClicked,
      }
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

// @ts-ignore
export type TStore = Instance<typeof HelpCenterContent>
export default HelpCenterContent
