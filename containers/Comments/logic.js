// import R from 'ramda'
import { gqRes, makeDebugger, EVENT } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Comments')
/* eslint-enable no-unused-vars */

let comments = null
let sub$ = null

export function onCommentInput() {
  // debug('onCommentInput')
  comments.markState({
    showInputEditor: !comments.showInputEditor,
  })
}

export function onCommentInputBlur() {
  comments.markState({
    showInputEditor: false,
  })
}

export function onCommentInputChange(value) {
  debug('onCommentInputChange: ', value)
}

const dataResolver = [
  {
    match: gqRes(EVENT.PREVIEW),
    action: () => {},
  },
]

const handleData = res => {
  for (let i = 0; i < dataResolver.length; i += 1) {
    if (dataResolver[i].match(res)) {
      return dataResolver[i].action(res)
    }
  }
  debug('handleData unhandle: ', res)
}

export function init(selectedStore) {
  comments = selectedStore
  debug(comments)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe(handleData)
}
