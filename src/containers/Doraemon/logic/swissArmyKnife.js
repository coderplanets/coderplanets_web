import {
  curry,
  compose,
  equals,
  contains,
  isEmpty,
  length,
  any,
  and,
  isNil,
  pluck,
  toLower,
  head,
  last,
} from 'ramda'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

export const lengthE1 = compose(equals(1), length)
export const lengthE2 = compose(equals(2), length)
export const anyNil = any(isNil)

export class SwissArmyKnife {
  constructor(store) {
    this.store = store
    this.communities = pluck('raw', store.subscribedCommunities)
  }

  completeInput = (into = false) => {
    if (anyNil([this.store.prefix, this.store.activeRaw])) return

    const prefix = toLower(this.store.prefix)
    const activeRawLast = last(this.store.curCmdChain)

    let inputValue = ''
    // TODO: support ? opt
    if (this.store.prefix === '/') {
      inputValue = `${prefix}${activeRawLast}`
    } else {
      inputValue = `/${prefix}/${activeRawLast}`
    }

    if (into) inputValue = `${inputValue}/`
    // log('new input: ', newInput)
    this.store.mark({
      inputValue,
    })
  }

  scrollIfNeeded = () => {
    try {
      /* eslint-disable no-undef */
      const { activeRaw } = this.store
      scrollIntoViewIfNeeded(document.querySelector(`#${activeRaw}`), true, {
        duration: 120,
      })
      /* eslint-enable no-undef */
    } catch (e) {
      /* eslint-disable no-console */
      console.error('bad selector in scrollIntoViewIfNeeded', e)
      /* eslint-enable no-console */
    }
  }

  navSuggestion = direction => {
    const { prefix, activeRaw } = this.store
    if (anyNil([prefix, activeRaw]) || isEmpty(activeRaw)) return false

    if (direction === 'up') {
      this.store.activeUp()
    } else {
      this.store.activeDown()
    }
    this.scrollIfNeeded()
  }

  navToSuggestion = suggestion => {
    const activeSuggestion = suggestion.toJSON()
    this.store.activeTo(activeSuggestion.raw)
  }

  // TODO rename to linker
  communityLinker = cmdpath => {
    // console.log('communityLinker: ', cmdpath)
    // console.log('communityLinker this.communities: ', this.communities)
    return and(contains(head(cmdpath), this.communities), lengthE1(cmdpath))
  }

  communityInsideLinker = cmdpath =>
    and(contains(head(cmdpath), this.communities), lengthE2(cmdpath))

  stepTwoCmd = curry((name, cmdpath) =>
    and(equals(name, head(cmdpath)), lengthE2(cmdpath))
  )

  stepOneCmd = curry((name, cmdpath) =>
    and(equals(name, head(cmdpath)), lengthE1(cmdpath))
  )
}
