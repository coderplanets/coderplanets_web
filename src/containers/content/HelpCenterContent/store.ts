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

type TBad = {
  jj: string
}

export const HelpCenterContent = T.model('HelpCenterContent', {
  view: T.optional(T.enumeration(values(VIEW)), VIEW.COVER),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curCommunity(): TCommunity {
      return stripMobx(self.root.viewing.community)
    },
    get tmp(): TBad {
      return { id: '1', title: 'bbb', logo: 'bbb' }
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export type IStore = Instance<typeof HelpCenterContent>
export default HelpCenterContent
