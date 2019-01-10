import {
  asyncRes,
  $solver,
  makeDebugger,
  EVENT,
  holdPage,
  unholdPage,
  dispatchEvent,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_OPEN, EVENT.PREVIEW_CLOSE],
})

/* eslint-disable-next-line */
const debug = makeDebugger('L:Preview')

let store = null
let sub$ = null

export function closePreview() {
  unholdPage()
  store.close()

  // force call MDEditor's componentWillUnmount to store the draft
  // wait until preview move out of the screean
  setTimeout(() => {
    store.markState({ type: null })
    dispatchEvent(EVENT.PREVIEW_CLOSED)
    store.setViewing({ viewingThread: null })
  }, 200)
}

const DataResolver = [
  {
    match: asyncRes(EVENT.PREVIEW_OPEN),
    action: res => {
      const payload = res[EVENT.PREVIEW_OPEN]
      holdPage()

      store.open(payload)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSE),
    action: () => closePreview(),
  },
]

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataResolver, []))
}
