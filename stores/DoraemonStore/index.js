/*
 * DoraemonStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates } from '../../utils'
import cmds from './default_suggestion'

// import { makeDebugger } from '../../utils'
// const debug = makeDebugger('S:DoraemonStore')

const focusDoraemonBar = () => {
  setTimeout(() => {
    // side effect
    /* eslint-disable */
    // has to use setTimeout
    // see: https://stackoverflow.com/questions/1096436/document-getelementbyidid-focus-is-not-working-for-firefox-or-chrome
    try {
      document.getElementById('doraemonInputbar').focus()
    } catch (e) {
      console.error(e)
    }
    /* eslint-enable */
  }, 0)
}

const hideDoraemonBarRecover = () => {
  // side effect
  // onBlur will on focus the whole page, if not use this
  // openDoraemon will not work until you click the page
  /* eslint-disable no-undef */
  document.getElementById('whereCallShowDoraemon').click()
  /* eslint-enable no-undef */
}

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
  desc: t.maybe(t.string),
  raw: t.string,
  logo: t.maybe(t.string),
  cmd: t.maybe(t.enumeration('cmd', ['theme', 'debug'])),
  descType: t.optional(
    t.enumeration('descType', ['text', 'component']),
    'text'
  ),
})

const DoraemonStore = t
  .model('DoraemonStore', {
    visible: t.optional(t.boolean, false),
    inputValue: t.optional(t.string, ''),
    suggestions: t.optional(t.array(Suggestion), []),
    activeRaw: t.maybe(t.string),
    // TODO: prefix -> cmdPrefix, and prefix be a getter
    prefix: t.optional(t.string, ''),
    // for debug config, input login/password ... etc
    inputForOtherUse: t.optional(t.boolean, false),
    cmdChain: t.maybe(t.array(t.string)),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCmdChain() {
      if (!self.cmdChain && self.activeRaw) {
        return [self.activeRaw]
      } else if (self.cmdChain && self.activeRaw) {
        return R.append(
          self.activeRaw,
          R.filter(el => el !== 'threads', R.map(R.toLower, self.cmdChain))
        )
      }
      return null
    },
    get allSuggestions() {
      const { entries } = self.root.account.subscribedCommunities

      const subscribedCommunitiesMaps = {}

      R.forEach(com => {
        subscribedCommunitiesMaps[com.title] = {
          ...com,
        }
      }, R.map(convertThreadsToMaps, entries))

      return R.merge(subscribedCommunitiesMaps, cmds)
      /* return R.mergeAll([self.root.communities.all, mapKeys(R.toLower, cmds)]) */
    },
    get communities() {
      return self.root.communities.all
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
  }))
  .actions(self => ({
    updateAccount(data) {
      self.root.account.updateAccount(data)
    },
    changeTheme(name) {
      self.root.changeTheme(name)
    },

    loadSuggestions(suggestion) {
      self.suggestions = suggestion.data
      self.prefix = suggestion.prefix
      // if (data)R.isEmpty()
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
    activeTo(raw) {
      self.markState({
        activeRaw: raw,
      })
    },
    open() {
      self.visible = true
      focusDoraemonBar()
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
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default DoraemonStore
