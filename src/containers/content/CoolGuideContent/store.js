/*
 * CoolGuideContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { NAVI } from '@constant'
import { markStates, buildLog } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('S:CoolGuideContent')

const CoolGuideContent = t
  .model('CoolGuideContent', {
    activeMenuId: t.maybeNull(t.string),
    displayType: t.optional(
      t.enumeration([NAVI.NEWS_FEED, NAVI.FAME_PEOPLE, NAVI.DEFAULT]),
      NAVI.NEWS_FEED
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
