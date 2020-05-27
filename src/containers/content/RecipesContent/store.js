/*
 * RecipesContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { GALLERY, RECIPE } from '@/constant'
import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:RecipesContent')

const RecipesContent = T.model('RecipesContent', {
  mainView: T.optional(
    T.enumeration([RECIPE.SNIPPETS_VIEW, RECIPE.CHEATSHEETS_VIEW]),
    RECIPE.SNIPPETS_VIEW
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

export default RecipesContent
