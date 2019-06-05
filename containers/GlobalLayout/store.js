/*
 * GlobalLayoutStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { markStates, makelogger } from '@utils'
/* eslint-disable-next-line */
const log = makelogger('S:GlobalLayoutStore')

const Media = t.model('Media', {
  mobile: t.optional(t.boolean, false),
  tablet: t.optional(t.boolean, false),
  laptop: t.optional(t.boolean, false),
  desktop: t.optional(t.boolean, false),
})

const Platform = t.model('Platform', {
  isChrome: t.optional(t.boolean, true),
  isFirefox: t.optional(t.boolean, false),
  isSafari: t.optional(t.boolean, false),
  isIE: t.optional(t.boolean, false),
  isEdge: t.optional(t.boolean, false),
})

const GlobalLayoutStore = t
  .model('GlobalLayoutStore', {
    online: t.optional(t.boolean, true),
    media: t.optional(Media, {}),
    platform: t.optional(Platform, {}),
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
