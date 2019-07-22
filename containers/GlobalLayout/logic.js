import R from 'ramda'
import { useEffect } from 'react'

import { EVENT } from '@constant'
import { buildLog, send } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout')

let store = null

export const openDoraemon = () => store.openDoraemon()
/* eslint-disable no-unused-vars */
export const queryDoraemon = R.curry((data, e) =>
  send(EVENT.QUERY_DORAMON, { data })
)

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, extra) => {
  useEffect(() => {
    store = _store

    // FIXME:  do not show body scrollbar on mac
    // plus this plugin will break antd's affix staff
    /* eslint-disable no-undef */
    // OverlayScrollbars(document.querySelectorAll('body'), {
    // NOT WORK!
    // scrollbars: { autoHide: 'scroll', autoHideDelay: 500 },
    // })

    const { online, media, platform } = extra
    store.markState({ online, media, platform })
  }, [_store, extra])
}
