/*
 * GlobalLayoutStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:GlobalLayoutStore')

const Media = T.model('Media', {
  mobile: T.optional(T.boolean, false),
  tablet: T.optional(T.boolean, false),
  laptop: T.optional(T.boolean, false),
  desktop: T.optional(T.boolean, false),
})

const Platform = T.model('Platform', {
  isChrome: T.optional(T.boolean, true),
  isFirefox: T.optional(T.boolean, false),
  isSafari: T.optional(T.boolean, false),
  isIE: T.optional(T.boolean, false),
  isEdge: T.optional(T.boolean, false),
})

const GlobalLayoutStore = T.model('GlobalLayoutStore', {
  online: T.optional(T.boolean, true),
  media: T.optional(Media, {}),
  platform: T.optional(Platform, {}),
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default GlobalLayoutStore
