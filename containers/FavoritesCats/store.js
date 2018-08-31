/*
* FavoritesCats store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:FavoritesCats')
/* eslint-enable no-unused-vars */

const FavoritesCats = t
  .model('FavoritesCats', {
    curView: t.optional(t.enumeration('view', ['box', 'list']), 'box'),
    showModal: t.optional(t.boolean, false),
    showUpdater: t.optional(t.boolean, false),
    showCreator: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default FavoritesCats
