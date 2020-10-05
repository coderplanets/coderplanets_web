/*
 * DoraemonStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import {
  map,
  forEach,
  merge,
  startsWith,
  last,
  append,
  filter,
  toLower,
  findIndex,
  propEq,
  values,
  isEmpty,
} from 'ramda'

import { THREAD } from '@/constant'
import {
  markStates,
  focusDoraemonBar,
  hideDoraemonBarRecover,
  stripMobx,
  lockPage,
  unlockPage,
} from '@/utils'

import cmds from './logic/defaultSuggestion'

// const log = buildLog('S:DoraemonStore')

const convertThreadsToMaps = (com) => {
  const { title, desc, logo, raw } = com
  const threads = {}
  forEach((t) => {
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

const Suggestion = T.model('Suggestion', {
  title: T.string,
  desc: T.maybeNull(T.string),
  raw: T.string,
  id: T.maybeNull(T.string),
  logo: T.maybeNull(T.string),
  cmd: T.maybeNull(T.enumeration('cmd', ['theme', 'log'])),
  descType: T.optional(
    T.enumeration('descType', ['text', 'component']),
    'text',
  ),
})

const DoraemonStore = T.model('DoraemonStore', {
  visible: T.optional(T.boolean, false),
  searching: T.optional(T.boolean, false),
  showAlert: T.optional(T.boolean, false),
  showUtils: T.optional(T.boolean, false),
  showThreadSelector: T.optional(T.boolean, false),
  searchedTotalCount: T.optional(T.number, 0),

  searchThread: T.optional(
    T.enumeration('searchThread', [...values(THREAD), 'community']),
    'community',
  ),

  inputValue: T.optional(T.string, ''),
  suggestions: T.optional(T.array(Suggestion), []),
  activeRaw: T.maybeNull(T.string),
  // TODO: prefix -> cmdPrefix, and prefix be a getter
  prefix: T.optional(T.string, ''),
  // for log config, input login/password ... etc
  inputForOtherUse: T.optional(T.boolean, false),
  cmdChain: T.maybeNull(T.array(T.string)),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get inputValueRaw() {
      if (startsWith('/', self.inputValue)) {
        return last(self.inputValue.split('/'))
      }
      if (startsWith('@', self.inputValue)) return self.inputValue.slice(1)

      return self.inputValue
    },
    get curCmdChain() {
      if (!self.cmdChain && self.activeRaw) {
        return [self.activeRaw]
      }
      if (self.cmdChain && self.activeRaw) {
        return append(
          self.activeRaw,
          filter((el) => el !== 'threads', map(toLower, self.cmdChain)),
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

      forEach((com) => {
        subscribedCommunitiesMaps[com.title] = {
          ...com,
        }
      }, map(convertThreadsToMaps, entries))

      return merge(subscribedCommunitiesMaps, cmds)
    },
    get suggestionCount() {
      return self.suggestions.length
    },
    get activeSuggestionIndex() {
      return findIndex(propEq('raw', self.activeRaw))(self.suggestions)
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
  .actions((self) => ({
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

      if (!isEmpty(suggestion.data)) {
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

      self.mark({
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

      self.mark({
        activeRaw: nextActiveRaw,
      })
    },
    activeTo(activeRaw) {
      self.mark({ activeRaw })
    },
    open(focus = true) {
      self.visible = true
      if (focus) focusDoraemonBar()
      lockPage()
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
      unlockPage()
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default DoraemonStore
