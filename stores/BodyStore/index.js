/*
 * BodyStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import { makeDebugger } from '../../utils/debug'

// const debug = makeDebugger('S:BodyStore')

const BodyStore = t
  .model('BodyStore', {
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get theme() {
      return self.app.theme
    },
    get themeName() {
      return self.app.themeName
    },
    get langMessages() {
      return self.app.langMessages
    },
    get doraemonVisable() {
      return self.app.doraemonVisable
    },
  }))
  .actions(self => ({
    changeTheme(name) {
      self.app.changeTheme(name)
    },
    showDoraemon() {
      self.app.showDoraemon()
    },
    changeLocale(locale) {
      self.app.changeLocale(locale)
    },
    isLocaleExist(locale) {
      return self.app.isLocaleExist(locale)
    },
    setLangMessages(key, val) {
      self.app.setLangMessages(key, val)
    },
  }))

export default BodyStore
