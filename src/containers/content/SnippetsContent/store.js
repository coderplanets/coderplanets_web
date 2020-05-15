/*
 * SnippetsContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { GALLERY, SNIPPET } from '@/constant'
import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:SnippetsContent')

const SnippetsContent = T.model('SnippetsContent', {
  mainView: T.optional(
    T.enumeration([SNIPPET.SNIPPETS_VIEW, SNIPPET.CHEATSHEETS_VIEW]),
    SNIPPET.SNIPPETS_VIEW
  ),
  galleryType: T.optional(
    T.enumeration([
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
