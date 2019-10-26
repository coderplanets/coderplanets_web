// import R from 'ramda'
import { useEffect } from 'react'

// import Prism from 'mastani-codehighlight'

// import { TYPE, EVENT, ERR } from '@constant'
import { buildLog } from '@utils'

// import { initUploaderClient, uploadFile } from './uploader'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:RichEditor')

export const onChange = data => {
  log('editor onChange: ', data)
}

// ###############################
// init & uninit
// ###############################

export const useInit = (_store, uploaderLoaded) => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)
    return () => {
      // log('effect uninit')
    }
  }, [_store, uploaderLoaded])
}
