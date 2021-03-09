/*
 * HelpCenterContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { values } from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'

import { VIEW } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:HelpCenterContent')

const HelpCenterContent = T.model('HelpCenterContent', {
  view: T.optional(T.enumeration(values(VIEW)), VIEW.COVER),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default HelpCenterContent
