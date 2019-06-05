import R from 'ramda'
import { useEffect } from 'react'

import { buildLog, dispatchEvent, EVENT } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:GlobalLayout')

let store = null

export const openDoraemon = () => store.openDoraemon()
/* eslint-disable no-unused-vars */
export const queryDoraemon = R.curry((data, e) =>
  dispatchEvent(EVENT.QUERY_DORAMON, { data })
)

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, extra) => {
  useEffect(
    () => {
      store = _store

      const { online, media, platform } = extra
      store.markState({ online, media, platform })
    },
    [_store, extra]
  )
}
