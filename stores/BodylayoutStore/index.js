/*
 * BodylayoutStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:BodylayoutStore')
/* eslint-enable no-unused-vars */

const BodylayoutStore = t
  .model('BodylayoutStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    openDoraemon() {
      self.root.openDoraemon()
    },
  }))

export default BodylayoutStore
