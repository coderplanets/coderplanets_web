import { useEffect } from 'react'

import { TYPE, EVENT } from '@constant'
import { asyncSuit, buildLog, unholdPage, send, Global } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:Preview')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  recieve: [
    EVENT.PREVIEW_OPEN,
    EVENT.PREVIEW_CLOSE,
    EVENT.UPLOAD_IMG_START,
    EVENT.UPLOAD_IMG_FINISH,
  ],
})

let store = null
let sub$ = null

export const closePreview = () => {
  unholdPage()
  store.close()
  store.mark({ imageUploading: false, type: null })

  // force call MDEditor's componentWillUnmount to store the draft
  // wait until preview move out of the screean
  setTimeout(() => {
    send(EVENT.PREVIEW_CLOSED)
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
    action: () => store.mark({ imageUploading: true }),
  },
  {
    match: asyncRes(EVENT.UPLOAD_IMG_FINISH),
    action: () => {
      setTimeout(() => {
        store.mark({ imageUploading: false })
      }, 500)
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, windowWidth) => {
  useEffect(() => {
    store = _store
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataResolver, []))
    }
    store.mark({ windowWidth })

    return () => {
      if (!sub$) return false
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store, windowWidth])
}
