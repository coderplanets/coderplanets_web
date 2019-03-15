/*
 * DoraemonStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  markStates,
  focusDoraemonBar,
  hideDoraemonBarRecover,
  THREAD,
  stripMobx,
  holdPage,
  unholdPage,
} from 'utils'

import cmds from './logic/defaultSuggestion'

// const debug = makeDebugger('S:DoraemonStore')

const convertThreadsToMaps = com => {
  const { title, desc, logo, raw } = com
  const threads = {}
  R.forEach(t => {
    threads[t.title] = {
      title: t.title,
      raw: t.raw,
    }
  }, com.threads)

  return {
    title,
    desc,
    logo,
    raw,
    threads,
  }
}

const Suggestion = t.model('Suggestion', {
  title: t.string,
  desc: t.maybeNull(t.string),
  raw: t.string,
  id: t.maybeNull(t.string),
  logo: t.maybeNull(t.string),
  cmd: t.maybeNull(t.enumeration('cmd', ['theme', 'debug'])),
  descType: t.optional(
    t.enumeration('descType', ['text', 'component']),
    'text'
  ),
})

const DoraemonStore = t
  .model('DoraemonStore', {
    visible: t.optional(t.boolean, false),
    searching: t.optional(t.boolean, false),
    showAlert: t.optional(t.boolean, false),
    showUtils: t.optional(t.boolean, false),
    showThreadSelector: t.optional(t.boolean, false),
    searchedTotalCount: t.optional(t.number, 0),

    searchThread: t.optional(
      t.enumeration('searchThread', [...R.values(THREAD), 'community']),
      'community'
    ),

    inputValue: t.optional(t.string, ''),
    suggestions: t.optional(t.array(Suggestion), []),
    activeRaw: t.maybeNull(t.string),
    // TODO: prefix -> cmdPrefix, and prefix be a getter
    prefix: t.optional(t.string, ''),
    // for debug config, input login/password ... etc
    inputForOtherUse: t.optional(t.boolean, false),
    cmdChain: t.maybeNull(t.array(t.string)),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get inputValueRaw() {
      if (R.startsWith('/', self.inputValue)) {
        return R.last(self.inputValue.split('/'))
      }
      if (R.startsWith('@', self.inputValue)) return self.inputValue.slice(1)

      return self.inputValue
    },
    get curCmdChain() {
      if (!self.cmdChain && self.activeRaw) {
        return [self.activeRaw]
      }
      if (self.cmdChain && self.activeRaw) {
        return R.append(
          self.activeRaw,
          R.filter(el => el !== 'threads', R.map(R.toLower, self.cmdChain))
        )
      }
      return null
    },
    get subscribedCommunities() {
      const { entries } = self.root.account.subscribedCommunities
      return entries
    },
    get allSuggestions() {
      const { entries } = self.root.account.subscribedCommunities
      if (!entries) return []

      const subscribedCommunitiesMaps = {}

      R.forEach(com => {
        subscribedCommunitiesMaps[com.title] = {
          ...com,
        }
      }, R.map(convertThreadsToMaps, entries))

      return R.merge(subscribedCommunitiesMaps, cmds)
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
    get activeSuggestion() {
      if (self.activeSuggestionIndex === -1) {
        return undefined
      }
      return stripMobx(self.suggestions[self.activeSuggestionIndex])
    },
  }))
  .actions(self => ({
    markRoute(query) {
      self.root.markRoute(query)
    },
    toast(type, options) {
      self.root.toast(type, options)
    },
    setSession(user, token) {
      self.root.account.setSession(user, token)
    },
    updateAccount(data) {
      self.root.account.updateAccount(data)
    },
    changeTheme(name) {
      self.root.changeTheme(name)
    },
    loadSuggestions(suggestion) {
      self.suggestions = suggestion.data
      self.prefix = suggestion.prefix

      if (!R.isEmpty(suggestion.data)) {
        self.activeRaw = suggestion.data[0].raw
      }
      if (self.suggestionCount === 0) {
        self.activeRaw = null
      }
    },
    clearSuggestions() {
      self.suggestions = []
      self.prefix = ''
      self.activeRaw = null
    },
    activeUp() {
      if (self.suggestionCount === 0) return false
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
      if (self.suggestionCount === 0) return false
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
    activeTo(activeRaw) {
      self.markState({ activeRaw })
    },
    open(forcus = true) {
      self.visible = true
      if (forcus) focusDoraemonBar()
      holdPage()
    },
    handleLogin() {
      self.open()
      self.inputValue = '/login/'
    },
    hideDoraemon() {
      self.visible = false
      self.inputValue = ''
      self.inputForOtherUse = false
      self.cmdChain = null
      self.clearSuggestions()
      hideDoraemonBarRecover()
      unholdPage()
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default DoraemonStore
