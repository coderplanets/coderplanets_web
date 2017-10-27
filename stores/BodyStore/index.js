/*
 * BodyStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import { makeDebugger } from '../../utils/functions'

// const debug = makeDebugger('S:BodyStore')

const BodyStore = t
  .model('BodyStore', {
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
    get themeKeys() {
      return self.root.theme.themeKeys
    },
    get langMessages() {
      return self.root.langMessages
    },
    get doraemonVisable() {
      return self.root.doraemonVisable
    },
  }))
  .actions(self => ({
    changeTheme(name) {
      self.root.changeTheme(name)
    },
    openDoraemon() {
      self.root.openDoraemon()
    },
    openPreview(type) {
      self.root.openPreview(type)
    },
    changeLocale(locale) {
      self.root.changeLocale(locale)
    },
    isLocaleExist(locale) {
      return self.root.isLocaleExist(locale)
    },
    setLangMessages(key, val) {
      self.root.setLangMessages(key, val)
    },
  }))

export default BodyStore
