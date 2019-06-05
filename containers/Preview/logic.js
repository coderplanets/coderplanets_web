import { useEffect } from 'react'

import {
  asyncRes,
  $solver,
  makelogger,
  EVENT,
  TYPE,
  unholdPage,
  dispatchEvent,
  Global,
} from '@utils'

import SR71 from '@utils/async/sr71'

const sr71$ = new SR71({
  resv_event: [
    EVENT.PREVIEW_OPEN,
    EVENT.PREVIEW_CLOSE,
    EVENT.UPLOAD_IMG_START,
    EVENT.UPLOAD_IMG_FINISH,
  ],
})

/* eslint-disable-next-line */
const log = makelogger('L:Preview')

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
         log('should open payload thread: ', payload.thread)
         log('should open payload id: ', payload.data.id)
         log('payload curCommunity: ', store.curCommunity.raw)
       */

      if (store.media.mobile || store.media.tablet) {
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

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store

      sub$ = sr71$.data().subscribe($solver(DataResolver, []))

      return () => {
        if (!sub$) return false
        sr71$.stop()
        sub$.unsubscribe()
        sub$ = null
      }
    },
    [_store]
  )
}
