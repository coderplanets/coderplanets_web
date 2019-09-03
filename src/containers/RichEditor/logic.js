// import R from 'ramda'
import { useEffect } from 'react'

// import { TYPE, EVENT, ERR } from '@constant'
import { buildLog } from '@utils'

let store = null
/* eslint-disable-next-line */
const log = buildLog('L:RichEditor')

export const someMethod = () => {}

// const const cancleLoading = () => {}

// ###############################
// Data & Error handlers
// ###############################

// ###############################
// init & uninit
// ###############################

export const useInit = (_store, loaded) => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)

    if (loaded) {
      // eslint-disable-next-line
      new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        holderId: 'codex-editor',
        data: {
          time: 1552744582955,
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: 'this is @',
              },
            },
          ],
          version: '2.11.10',
        },
      })
    }

    return () => {
      // log('effect uninit')
    }
  }, [_store, loaded])
}
