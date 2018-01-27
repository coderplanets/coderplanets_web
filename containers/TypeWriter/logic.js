import R from 'ramda'

import { makeDebugger, EVENT } from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TypeWriter')
/* eslint-enable no-unused-vars */

let typeWriter = null
let sub$ = null

export function originalCheck(e) {
  const { checked } = e.target
  typeWriter.markState({
    isOriginal: checked,
    articleType: checked ? 'original' : 'reprint',
  })
}

export function copyrightChange(articleType) {
  typeWriter.markState({
    articleType,
  })
}

export function changeView(curView) {
  typeWriter.markState({
    curView,
  })
}

export function onPublish() {
  debug('onPublish: ', typeWriter.bodyContent)
  typeWriter.markState({
    publishing: true,
  })
  setTimeout(() => {
    typeWriter.markState({
      publishing: false,
    })
  }, 2000)
}

export function editorOnChange(bodyContent) {
  // debug('editorOnChange: ', bodyContent)
  typeWriter.markState({
    bodyContent,
  })
}

const dataResolver = [
  {
    match: R.has(EVENT.PREVIEW),
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
  typeWriter = selectedStore
  debug(typeWriter)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe(handleData)
}
