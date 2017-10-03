/*
 * UniversePanelStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { isObject } from '../../utils'
import { makeDebugger } from '../../utils/debug'

const debug = makeDebugger('S:UniversePanelStore')

const Suggestion = t.model('Suggestion', {
  title: t.string,
  desc: t.maybe(t.string),
  descType: t.optional(
    t.enumeration('descType', ['text', 'component']),
    'text'
  ),
})

const UniversePanelStore = t
  .model('UniversePanelStore', {
    inputValue: t.optional(t.string, ''),
    suggestions: t.optional(t.array(Suggestion), []),
    activeTitle: t.optional(t.string, ''),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get suggestionCount() {
      return self.suggestions.length
    },
    get activeSuggestionIndex() {
      return R.findIndex(R.propEq('title', self.activeTitle))(self.suggestions)
    },
  }))
  .actions(self => ({
    afterCreate() {
      debug('load suggesttions')
    },
    loadSuggestions(data) {
      self.suggestions = data
      // if (data)R.isEmpty()
      if (!R.isEmpty(data)) {
        self.activeTitle = data[0].title
      }
    },
    clearSuggestions() {
      self.suggestions = []
    },

    activeUp() {
      // debug('activeUp activeIndex hehe: ', self.activeSuggestionIndex)
      // if (self.activeSuggestionIndex < self.suggestionCount) {
      let nextActiveTitle = ''
      const curIndex = self.activeSuggestionIndex

      if (curIndex > 0 && curIndex <= self.suggestionCount) {
        nextActiveTitle = self.suggestions[curIndex - 1].title
      } else {
        nextActiveTitle = self.suggestions[self.suggestionCount - 1].title
      }

      self.markState({
        activeTitle: nextActiveTitle,
      })
    },

    activeDown() {
      let nextActiveTitle = ''
      const curIndex = self.activeSuggestionIndex

      if (curIndex >= 0 && curIndex < self.suggestionCount - 1) {
        nextActiveTitle = self.suggestions[curIndex + 1].title
      } else {
        nextActiveTitle = self.suggestions[0].title
      }

      self.markState({
        activeTitle: nextActiveTitle,
      })
    },
    activeTo(title) {
      self.markState({
        activeTitle: title,
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

export default UniversePanelStore
