/*
 * MeetupsContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { GALLERY } from '@/constant'
import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:MeetupsContent')

const MeetupsContent = T.model('MeetupsContent', {
  activeGalleryType: T.optional(
    T.enumeration([GALLERY.TEXT_ONLY, GALLERY.TEXT_WITH_IMAGE]),
    GALLERY.TEXT_ONLY
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

export default MeetupsContent
