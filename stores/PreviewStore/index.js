/*
 * PreviewStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { markStates, TYPE } from '../../utils'

// const debug = makeDebugger('S:PreviewStore')

const PreviewStore = t
  .model('PreviewStore', {
    visible: t.optional(t.boolean, false),
    type: t.optional(
      t.enumeration('previewType', [
        TYPE.PREVIEW_POST,
        TYPE.PREVIEW_ACCOUNT,
        TYPE.PREVIEW_ROOT_STORE,
        TYPE.PREVIEW_CREATE_POST,
      ]),
      TYPE.PREVIEW_POST
    ),
    // header:
    // body:
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get themeKeys() {
      return self.root.theme.themeKeys
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
  }))
  .actions(self => ({
    open(type = TYPE.PREVIEW_POST) {
      self.visible = true
      self.type = type
    },

    close() {
      self.visible = false
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PreviewStore
