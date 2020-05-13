/*
 * CoolGuideContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { GUIDE } from '@/constant'
import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:CoolGuideContent')

const CoolGuideContent = t
  .model('CoolGuideContent', {
    activeMenuId: t.maybeNull(t.string),
    initActiveMenuId: t.optional(t.string, ''),
    topFilter: t.optional(t.string, 'all'),
    displayType: t.optional(
      t.enumeration([
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
