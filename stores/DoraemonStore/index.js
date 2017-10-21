/*
 * DoraemonStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  isObject,
  mapKeys,
  focusDoraemonBar,
  hideDoraemonBarRecover,
} from '../../utils/functions'

import cmds from './suggestions/cmd'

// import { makeDebugger } from '../../utils/functions'

// const debug = makeDebugger('S:DoraemonStore')

const Suggestion = t.model('Suggestion', {
  title: t.string,
  desc: t.maybe(t.string),
  raw: t.string,
  descType: t.optional(
    t.enumeration('descType', ['text', 'component']),
    'text'
  ),
})

const DoraemonStore = t
  .model('DoraemonStore', {
    visible: t.optional(t.boolean, false),
    inputValue: t.optional(t.string, ''),
    // TODO: curSuggestions
    suggestions: t.optional(t.array(Suggestion), []),
    activeRaw: t.optional(t.string, ''),
    // TODO: prefix -> cmdPrefix, and prefix be a getter
    prefix: t.optional(t.string, ''),

    // for debug config, input login/password ... etc
    inputForOtherUse: t.optional(t.boolean, false),
    /*
    configPrefix: t.optional(
        t.enumeration('configPrefix', [
           ''
          'debug',
          'login...',
        ]),
        ''
      )
    */
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get allSuggestions() {
      // console.log('fuck cmds: ', cmds)
      return R.mergeAll([self.app.communities.all, mapKeys(R.toLower, cmds)])
    },
    get communities() {
      return self.app.communities.all
    },
    get suggestionCount() {
      return self.suggestions.length
    },
    get activeSuggestionIndex() {
      return R.findIndex(R.propEq('raw', self.activeRaw))(self.suggestions)
    },
    get activeTitle() {
      if (self.activeSuggestionIndex === -1) {
        return undefined
      }
      return self.suggestions[self.activeSuggestionIndex].title
    },
    get doraemonVisable() {
      return self.visible
    },
  }))
  .actions(self => ({
    changeTheme(name) {
      self.app.changeTheme(name)
    },

    loadSuggestions(suggestion) {
      self.suggestions = suggestion.data
      self.prefix = suggestion.prefix
      // if (data)R.isEmpty()
      if (!R.isEmpty(suggestion.data)) {
        self.activeRaw = suggestion.data[0].raw
      }
    },

    clearSuggestions() {
      self.suggestions = []
      self.prefix = ''
      self.activeRaw = ''
    },

    activeUp() {
      // debug('activeUp activeIndex hehe: ', self.activeSuggestionIndex)
      // if (self.activeSuggestionIndex < self.suggestionCount) {
      let nextActiveRaw = ''
      const curIndex = self.activeSuggestionIndex

      if (curIndex > 0 && curIndex <= self.suggestionCount) {
        nextActiveRaw = self.suggestions[curIndex - 1].raw
      } else {
        nextActiveRaw = self.suggestions[self.suggestionCount - 1].raw
      }

      self.markState({
        activeRaw: nextActiveRaw,
      })
    },

    activeDown() {
      let nextActiveRaw = ''
      const curIndex = self.activeSuggestionIndex

      if (curIndex >= 0 && curIndex < self.suggestionCount - 1) {
        nextActiveRaw = self.suggestions[curIndex + 1].raw
      } else {
        nextActiveRaw = self.suggestions[0].raw
      }

      self.markState({
        activeRaw: nextActiveRaw,
      })
    },
    activeTo(raw) {
      self.markState({
        activeRaw: raw,
      })
    },
    showDoraemon() {
      self.visible = true
      focusDoraemonBar()
    },
    hideDoraemon() {
      self.visible = false
      self.inputValue = ''
      self.inputForOtherUse = false
      self.clearSuggestions()
      hideDoraemonBarRecover()
    },
    markState(sobj) {
      if (!isObject(sobj)) {
        throw new Error('markState get no object params')
      }
      R.forEachObjIndexed((val, key) => {
        self[key] = val
      }, sobj)
    },
  }))

export default DoraemonStore
