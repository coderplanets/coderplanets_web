import R from 'ramda'

import Prism from 'mastani-codehighlight'
import { makeDebugger } from '../../utils/functions'
import sr71$ from '../../utils/network/sr71'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:cheatsheetViewer')
/* eslint-enable no-unused-vars */

let cheatsheetViewer = null
let sub$ = null

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

const CheatsheetCDN =
  'https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master'

export function getData(which) {
  const url = `${CheatsheetCDN}/${which}.md`
  cheatsheetViewer.markState({
    state: 'loading',
  })
  sr71$.restGet(url)
}

function handleParseError(errMsg) {
  cheatsheetViewer.markState({
    current: '',
    state: 'parse_error',
    errMsg: String(errMsg),
  })
  Prism.highlightAll()
}

function handle404Error() {
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

function handleError(res) {
  switch (res.error) {
    case 'ParseError':
      return handleParseError()
    case 'NetworkError':
      debug(`${res.error}: ${res.details}`)
      return false
    case 'NotFound':
      return handle404Error()
    case 'TimeoutError':
      debug(`${res.error}: ${res.details}`)
      // sr71$.stop()
      return false

    default:
      debug('un handleError in ', cheatsheetViewer)
      debug('un handleError: ', res)
  }
}

export function init(selectedStore) {
  cheatsheetViewer = selectedStore

  sub$ = sr71$.data().subscribe(res => {
    if (res.error) return handleError(res)
    let source = ''
    try {
      source = transMarkDownforRender(res)
    } catch (err) {
      return handleError({ error: 'ParseError' })
    }
    handleLoaded(source)
  })
}

export function unInit() {
  // avoid the duplicate subscribe caused by HMR
  sub$.unsubscribe()
}
