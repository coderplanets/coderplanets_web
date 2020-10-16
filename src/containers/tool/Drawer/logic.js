import { useEffect } from 'react'
import { contains } from 'ramda'

import { TYPE, EVENT } from '@/constant'

import {
  asyncSuit,
  buildLog,
  unlockPage,
  send,
  Global,
  debounce,
  toggleGlobalBlur,
  clearGlobalBlur,
} from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('L:Preview')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  receive: [
    EVENT.DRAWER_OPEN,
    EVENT.DRAWER_CLOSE,
    EVENT.UPLOAD_IMG_START,
    EVENT.UPLOAD_IMG_FINISH,
  ],
})

let store = null
let sub$ = null

// those types will not treat as page link
const FUNCTION_TYPES = [TYPE.DRAWER.C11N_SETTINGS, TYPE.DRAWER.MODELINE_MENU]

/**
 * close current drawer
 */
export const closeDrawer = () => {
  unlockPage()
  store.close()
  store.mark({ imageUploading: false, type: null })

  // force call MDEditor's componentWillUnmount to store the draft
  // wait until drawer move out of the screean
  setTimeout(() => {
    send(EVENT.DRAWER_CLOSED)
    store.setViewing({ viewingThread: null })
  }, 200)
}

// handler swiped event for up/down swipe
// 判断最终是回到原来的位置还是隐藏 panel
export const onSwipedYHandler = (ev, setSwipeUpY, setSwipeDownY) => {
  const options = store.optionsData
  const { swipeThreshold, swipeUpAviliable, swipeDownAviliable } = store

  if (options.direction === 'bottom') {
    const swipeDonwY = parseInt(ev.absY, 10)

    if (swipeDonwY < swipeThreshold) {
      setSwipeDownY(0)
    } else if (ev.dir === 'Down' && swipeDownAviliable) {
      closeDrawer()
      setSwipeDownY(null)
    }
  } else {
    // handle top direction situation
    const swipeUpY = parseInt(ev.absY, 10)

    if (swipeUpY < swipeThreshold) {
      setSwipeUpY(0)
    } else if (ev.dir === 'Up' && swipeUpAviliable) {
      closeDrawer()
      setSwipeUpY(null)
    }
  }
}

const handleClearGlobalBlur = debounce(() => clearGlobalBlur(true), 200)
const handleRestoreGlobalBlur = debounce(() => toggleGlobalBlur(true), 200)

// handler swiping event for up/down swipe
export const onSwipingYHandler = (ev, setSwipeUpY, setSwipeDownY) => {
  const { swipeThreshold } = store
  // when top/bottom has no content, the whole panel can be swipeable
  // like tiktok style
  const { swipeUpAviliable, swipeDownAviliable } = store

  if (swipeUpAviliable && ev.dir === 'Up') {
    const swipeUpY = parseInt(ev.absY, 10)
    setSwipeUpY(swipeUpY)

    swipeUpY >= swipeThreshold
      ? handleClearGlobalBlur()
      : handleRestoreGlobalBlur()
  }

  if (swipeDownAviliable && ev.dir === 'Down') {
    const swipeDonwY = parseInt(ev.absY, 10)
    setSwipeDownY(swipeDonwY)

    swipeDonwY >= swipeThreshold
      ? handleClearGlobalBlur()
      : handleRestoreGlobalBlur()
  }
}

//
export const toggleSwipeAviliable = (type, bool) => {
  if (type === 'Down') {
    store.mark({ swipeDownAviliable: bool })
  } else {
    store.mark({ swipeUpAviliable: bool })
  }
}

export const resetSwipeAviliable = () => store.resetSwipeAviliable()

const DataResolver = [
  {
    match: asyncRes(EVENT.DRAWER_OPEN),
    action: (res) => {
      const payload = res[EVENT.DRAWER_OPEN]
      /*
         log('should open payload thread: ', payload.thread)
         log('should open payload id: ', payload.data.id)
         log('payload curCommunity: ', store.curCommunity.raw)
       */
      if (
        !contains(payload.type, FUNCTION_TYPES) &&
        (store.media.mobile || store.media.tablet)
      ) {
        const { thread, data, type } = payload
        let targetUrl
        if (type === TYPE.DRAWER.USER_VIEW) {
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
    match: asyncRes(EVENT.DRAWER_CLOSE),
    action: () => closeDrawer(),
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
