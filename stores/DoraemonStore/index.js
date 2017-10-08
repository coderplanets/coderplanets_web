/*
 * DoraemonStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { isObject } from '../../utils'
import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('S:DoraemonStore')

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
    inputValue: t.optional(t.string, ''),
    curSuggestionType: t.optional(
      t.enumeration('curSuggestionType', [
        'pl',
        'search',
        'theme',
        'account',
        'debug',
      ]),
      'pl'
    ),
    // program-languages, frameworks ...
    suggestions: t.optional(t.array(Suggestion), []),
    // plSuggestions ... // include frameworks
    // searchSuggestions ...
    // themeSuggestions ...
    // accountSuggestions ...
    // debugSuggestions ...
    activeRaw: t.optional(t.string, ''),
    prefix: t.optional(t.string, ''),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get themeName() {
      return self.app.themeName
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
      // console.log('self.activeSuggestionIndex: ', self.activeSuggestionIndex)
      return self.suggestions[self.activeSuggestionIndex].title
    },
  }))
  .actions(self => ({
    afterCreate() {
      debug('load suggesttions')
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
