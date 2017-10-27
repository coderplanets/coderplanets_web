/*
 * IntroBodyStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import { makeDebugger } from '../../utils/functions'

// const debug = makeDebugger('S:IntroBodyStore')

const IntroBodyStore = t
  .model('IntroBodyStore', {
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get curTheme() {
      return self.app.theme.curTheme
    },
    get themeKeys() {
      return self.app.theme.themeKeys
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
    openDoraemon() {
      self.app.openDoraemon()
    },
    openPreview() {
      self.app.openPreview()
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

export default IntroBodyStore
