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
        TYPE.POST_PREVIEW_VIEW,
        TYPE.ACCOUNT_PREVIEW_VIEW,
        TYPE.PREVIEW_ROOT_STORE,
        TYPE.PREVIEW_CREATE_POST,
      ]),
      TYPE.POST_PREVIEW_VIEW
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
    open(type = TYPE.POST_PREVIEW_VIEW) {
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
