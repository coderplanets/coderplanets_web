/*
 * CoolGuideContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { values } from 'ramda'

import { GUIDE } from '@/constant'
import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:CoolGuideContent')

const CoolGuideContent = T.model('CoolGuideContent', {
  activeMenuId: T.maybeNull(T.string),
  initActiveMenuId: T.optional(T.string, ''),
  topFilter: T.optional(T.string, 'all'),
  displayType: T.optional(T.enumeration(values(GUIDE)), GUIDE.PREVIEW),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions((self) => ({
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CoolGuideContent
