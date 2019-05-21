/*
 * GlobalLayoutStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { markStates, makeDebugger } from '@utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:GlobalLayoutStore')

const GlobalLayoutStore = t
  .model('GlobalLayoutStore', {
    online: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get sidebarPin() {
      return self.root.sidebar.pin
    },
  }))
  .actions(self => ({
    openDoraemon() {
      self.root.openDoraemon()
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default GlobalLayoutStore
