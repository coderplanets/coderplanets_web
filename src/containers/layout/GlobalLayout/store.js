/*
 * GlobalLayoutStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:GlobalLayoutStore')

const Platform = T.model('Platform', {
  isChrome: T.optional(T.boolean, true),
  isFirefox: T.optional(T.boolean, false),
  isSafari: T.optional(T.boolean, false),
  isIE: T.optional(T.boolean, false),
  isEdge: T.optional(T.boolean, false),
})

const GlobalLayoutStore = T.model('GlobalLayoutStore', {
  online: T.optional(T.boolean, true),
  platform: T.optional(Platform, {}),
  // follow the mac convention
  bodyScrollDirection: T.optional(T.enumeration(['up', 'down']), 'up'),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get sidebarPin() {
      return self.root.sidebar.pin
    },
  }))
  .actions((self) => ({
    openDoraemon() {
      self.root.openDoraemon()
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default GlobalLayoutStore
