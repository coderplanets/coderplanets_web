/*
 * SnippetsContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { GALLERY } from '@constant'
import { markStates, buildLog } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('S:SnippetsContent')

const SnippetsContent = t
  .model('SnippetsContent', {
    galleryType: t.optional(
      t.enumeration([
        GALLERY.MAIN_COLUMN,
        GALLERY.MASONRY_COLUMN,
        GALLERY.THREE_COLUMN,
      ]),
      GALLERY.MAIN_COLUMN
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

export default SnippetsContent
