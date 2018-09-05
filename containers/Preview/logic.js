import {
  asyncRes,
  $solver,
  makeDebugger,
  EVENT,
  holdPage,
  TYPE,
  dispatchEvent,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_OPEN, EVENT.PREIVEW_CONTENT, EVENT.PREVIEW_CLOSE],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Preview')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function closePreview() {
  store.close()

  // force call Typewriter's componentWillUnmount to store the draft
  // wait until preview move out of the screean
  setTimeout(() => {
    store.markState({ type: null })
    dispatchEvent(EVENT.PREVIEW_CLOSED)
  }, 200)
}

function loadDataForPreview({ type, data }) {
  if (type === TYPE.PREVIEW_POST_VIEW) {
    // debug('load fucking post: ', info.data)
    dispatchEvent(EVENT.PREVIEW_LOAD, { type: TYPE.POST, data })
    // loadPost(info.data)
  }
}

const DataResolver = [
  {
    match: asyncRes(EVENT.PREVIEW_OPEN),
    action: res => {
      const payload = res[EVENT.PREVIEW_OPEN]
      holdPage()
      store.open(payload.type)
      if (payload.needLoad) {
        loadDataForPreview(payload)
      }
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSE),
    action: () => closePreview(),
  },
  {
    match: asyncRes(EVENT.PREIVEW_CONTENT),
    action: res => {
      const payload = res[EVENT.PREIVEW_CONTENT]
      holdPage()

      store.open(payload.type)
      loadDataForPreview(payload)
    },
  },
]

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataResolver, []))
}
