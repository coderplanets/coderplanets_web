import {
  asyncRes,
  $solver,
  makeDebugger,
  EVENT,
  TYPE,
  unholdPage,
  dispatchEvent,
  Global,
  cs,
} from 'utils'
import SR71 from 'utils/async/sr71'

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
  store.markState({ imageUploading: false, type: null })

  // force call MDEditor's componentWillUnmount to store the draft
  // wait until preview move out of the screean
  setTimeout(() => {
    dispatchEvent(EVENT.PREVIEW_CLOSED)
    store.setViewing({ viewingThread: null })
  }, 200)
}

const DataResolver = [
  {
    match: asyncRes(EVENT.PREVIEW_OPEN),
    action: res => {
      const payload = res[EVENT.PREVIEW_OPEN]
      /*
         debug('should open payload thread: ', payload.thread)
         debug('should open payload id: ', payload.data.id)
         debug('payload curCommunity: ', store.curCommunity.raw)
       */

      if (Global.innerWidth <= cs.mediaBreakPoints.tablet) {
        const { thread, data, type } = payload
        let targetUrl
        if (type === TYPE.PREVIEW_USER_VIEW) {
          targetUrl = `/user/${data.login}`
        } else {
          const communityRaw =
            store.curCommunity.raw || data.origialCommunity.raw

          targetUrl = `/${communityRaw}/${thread}/${data.id}`
        }

        Global.location.href = targetUrl
        return false
      }

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
