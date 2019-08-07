import R from 'ramda'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

export const lengthE1 = R.compose(
  R.equals(1),
  R.length
)
export const lengthE2 = R.compose(
  R.equals(2),
  R.length
)
export const anyNil = R.any(R.isNil)

export class SwissArmyKnife {
  constructor(store) {
    this.store = store
    this.communities = R.pluck('raw', store.subscribedCommunities)
  }

  completeInput = (into = false) => {
    if (anyNil([this.store.prefix, this.store.activeRaw])) return

    const prefix = R.toLower(this.store.prefix)
    const activeRawLast = R.last(this.store.curCmdChain)

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
    if (anyNil([prefix, activeRaw]) || R.isEmpty(activeRaw)) return false

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
    return R.and(
      R.contains(R.head(cmdpath), this.communities),
      lengthE1(cmdpath)
    )
  }

  communityInsideLinker = cmdpath =>
    R.and(R.contains(R.head(cmdpath), this.communities), lengthE2(cmdpath))

  stepTwoCmd = R.curry((name, cmdpath) =>
    R.and(R.equals(name, R.head(cmdpath)), lengthE2(cmdpath))
  )

  stepOneCmd = R.curry((name, cmdpath) =>
    R.and(R.equals(name, R.head(cmdpath)), lengthE1(cmdpath))
  )
}
