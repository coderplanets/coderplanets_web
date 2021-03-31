/*
 * MeetupsContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { GALLERY } from '@/constant'
import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:MeetupsContent')

const MeetupsContent = T.model('MeetupsContent', {
  activeGalleryType: T.optional(
    T.enumeration([GALLERY.TEXT_ONLY, GALLERY.TEXT_WITH_IMAGE]),
    GALLERY.TEXT_WITH_IMAGE,
  ),
})
  // .views((self) => ({}))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof MeetupsContent>
export default MeetupsContent
