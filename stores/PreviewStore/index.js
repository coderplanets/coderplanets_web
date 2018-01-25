/*
 * PreviewStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

// import { makeDebugger } from '../../utils'

// const debug = makeDebugger('S:PreviewStore')

const PreviewStore = t
  .model('PreviewStore', {
    visible: t.optional(t.boolean, false),
    type: t.optional(
      t.enumeration('previewType', ['post', 'account', 'mst-state']),
      'post'
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
    open(type = 'post') {
      self.visible = true
      self.type = type
    },

    close() {
      self.visible = false
    },

    changeTheme(name) {
      self.root.changeTheme(name)
    },
  }))

export default PreviewStore
