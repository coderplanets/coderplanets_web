import R from 'ramda'

import Prism from 'mastani-codehighlight'
import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:cheatsheetViewer')
/* eslint-enable no-unused-vars */

let cheatsheetViewer = null

/* cheatsheetViewer logic */
const groupSpliter = '{{ ::group:: }}'
const cardsHeaderSpliter = '{{ ::cards-header:: }}'
const cardItemSpliter = '{{ ::card-item:: }}'

const getCardHeader = R.compose(R.trim, R.head, R.split(cardsHeaderSpliter))
const getCardList = R.compose(R.trim, R.nth(1), R.split(cardsHeaderSpliter))
const getCardItems = R.compose(
  R.map(R.trim),
  R.split(cardItemSpliter),
  getCardList
)
const formatFromer = v => ({
  header: getCardHeader(v),
  cards: getCardItems(v),
})

export const transMarkDownforRender = R.compose(
  R.map(formatFromer),
  R.split(groupSpliter),
  R.trim
)

export const convertTaskTag = R.compose(
  R.replace(/<li>\[ \] /g, '<li class="task-pending">'),
  R.replace(/<li>\[x\] /g, '<li class="task-done">')
)

export function getData(which) {
  setTimeout(() => {
    cheatsheetViewer.SR17$.getCheatsheet(which)
  }, 2000)
  cheatsheetViewer.markState({
    state: 'loading',
  })
}

function handleParseError(errMsg) {
  cheatsheetViewer.markState({
    current: '',
    state: 'parse_error',
    errMsg: String(errMsg),
  })
  Prism.highlightAll()
}

const is404 = v => R.trim(v) === '404: Not Found'
function handle404() {
  cheatsheetViewer.markState({
    current: '',
    state: '404',
  })
}

const maybeEmptyState = v => (R.isEmpty(v) ? 'empty' : 'loaded')
function handleLoaded(source) {
  cheatsheetViewer.markState({
    source,
    state: maybeEmptyState(source),
  })

  Prism.highlightAll()
}

export function init(selectedStore) {
  cheatsheetViewer = selectedStore
  //   debug('cheatsheetviewer current: ', cheatsheetViewer.current)

  cheatsheetViewer.SR17$.cheatsheet().subscribe(res => {
    // console.info('res: ', res)
    if (is404(res)) {
      handle404()
    } else {
      let source = ''

      try {
        source = transMarkDownforRender(res)
      } catch (err) {
        handleParseError(err)
        return false
      }
      handleLoaded(source)
    }
  })
}
