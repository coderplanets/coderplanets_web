/*
 * GlobalLayoutStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { markStates, makeDebugger } from '@utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:GlobalLayoutStore')

const defaultMedia = {
  mobile: false,
  tablet: false,
  laptop: false,
  desktop: false,
}
const Media = t.model('Media', {
  mobile: t.optional(t.boolean, false),
  tablet: t.optional(t.boolean, false),
  laptop: t.optional(t.boolean, false),
  desktop: t.optional(t.boolean, false),
})

const GlobalLayoutStore = t
  .model('GlobalLayoutStore', {
    online: t.optional(t.boolean, false),
    media: t.optional(Media, defaultMedia),
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
