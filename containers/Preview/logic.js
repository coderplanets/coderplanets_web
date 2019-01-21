import {
  asyncRes,
  $solver,
  makeDebugger,
  EVENT,
  holdPage,
  unholdPage,
  dispatchEvent,
} from 'utils'
import SR71 from 'utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [
    EVENT.PREVIEW_OPEN,
    EVENT.PREVIEW_CLOSE,
    EVENT.UPLOAD_IMG_START,
    EVENT.UPLOAD_IMG_FINISH,
  ],
})

/* eslint-disable-next-line */
const debug = makeDebugger('L:Preview')

let store = null
let sub$ = null

export const closePreview = () => {
  unholdPage()
  store.close()
  store.markState({ imageUploading: false })

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
  {
    match: asyncRes(EVENT.UPLOAD_IMG_START),
    action: () => store.markState({ imageUploading: true }),
  },
  {
    match: asyncRes(EVENT.UPLOAD_IMG_FINISH),
    action: () => {
      setTimeout(() => {
        store.markState({ imageUploading: false })
      }, 500)
    },
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataResolver, []))
}

export const uninit = () => {
  if (!sub$) return false
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
