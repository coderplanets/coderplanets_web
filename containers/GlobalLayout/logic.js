import { useEffect } from 'react'
import R from 'ramda'

import { makeDebugger, dispatchEvent, EVENT } from '@utils'

/* eslint-disable-next-line */
const debug = makeDebugger('L:GlobalLayout')

let store = null

export const openDoraemon = () => store.openDoraemon()
/* eslint-disable no-unused-vars */
export const queryDoraemon = R.curry((data, e) =>
  dispatchEvent(EVENT.QUERY_DORAMON, { data })
)

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
    },
    [_store]
  )
}
