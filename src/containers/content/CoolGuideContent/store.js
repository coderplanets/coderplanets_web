/*
 * CoolGuideContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { GUIDE } from '@/constant'
import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:CoolGuideContent')

const CoolGuideContent = T.model('CoolGuideContent', {
  activeMenuId: T.maybeNull(T.string),
  initActiveMenuId: T.optional(T.string, ''),
  topFilter: T.optional(T.string, 'all'),
  displayType: T.optional(
    T.enumeration([
      GUIDE.PREVIEW,
      GUIDE.IMAGE,
      GUIDE.FAME_PEOPLE,
      GUIDE.DEFAULT,
    ]),
    GUIDE.PREVIEW
  ),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CoolGuideContent
