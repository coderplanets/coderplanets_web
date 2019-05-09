import { useEffect } from 'react'

/* eslint-disable-next-line */
let store = null

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
  })
}

export const holder = 1
