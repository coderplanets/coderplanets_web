import R from 'ramda'
import { useEffect } from 'react'

import { EVENT } from '@constant'
import { buildLog, send, cs } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout')

let store = null

export const openDoraemon = () => store.openDoraemon()
/* eslint-disable no-unused-vars */
export const queryDoraemon = R.curry((data, e) =>
  send(EVENT.QUERY_DORAMON, { data })
)

/**
 * calc init innerWrapper width of the global layout
 * 计算全局模板的内层最小宽度
 *
 * @param {ReactRef} ref
 * @returns {string}
 */
export const calcInitWidth = ref => {
  const { clientWidth } = ref.current
  const MAX_WIDTH = Number(cs.GLOBAL_MAX_WIDTH.slice(0, -2))
  const WINDOW_WIDTH = window.innerWidth

  let minWidth
  if (WINDOW_WIDTH > MAX_WIDTH) minWidth = `${MAX_WIDTH}px`
  if (WINDOW_WIDTH < MAX_WIDTH) minWidth = `${WINDOW_WIDTH}px`

  return minWidth
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, extra) => {
  useEffect(() => {
    store = _store

    // FIXME:  do not show body scrollbar on mac
    /* eslint-disable no-undef */
    // OverlayScrollbars(document.querySelectorAll('body'), {
    // NOT WORK!
    // scrollbars: { autoHide: 'scroll', autoHideDelay: 500 },
    // })

    const { online, media, platform } = extra
    store.mark({ online, media, platform })
  }, [_store, extra])
}
