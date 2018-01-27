// import R from 'ramda'

import { makeDebugger, dispatchEvent, EVENT, TYPE } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Header')
/* eslint-enable no-unused-vars */

let header = null

export function previewState() {
  // header.openPreview(type)
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ROOT_STORE,
  })
}

export function previewAccount() {
  // header.openPreview(type)
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ACCOUNT,
    data: { hello: 'world' },
  })
}

export function openPreview() {
  // header.openPreview(type)
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ACCOUNT,
    data: { hello: 'world' },
  })
}

export function openDoraemon() {
  header.openDoraemon()
}

export function init(selectedStore) {
  header = selectedStore
}
