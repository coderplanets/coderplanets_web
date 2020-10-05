import { useEffect } from 'react'
import { curry } from 'ramda'

import { buildLog } from '@/utils'
import { githubAPI } from '@/services'

/* eslint-disable-next-line */
const log = buildLog('L:AvatarAdder')

let store = null

export const onSearch = (e) => {
  if (e.key === 'Enter') {
    log('store.searchValue: ', store.searchValue)
    store.mark({ searching: true, searchValue: e.target.value })

    githubAPI
      .searchUser(store.searchValue)
      .then((res) => {
        store.mark({ githubUser: githubAPI.transformUser(res) })
        store.mark({ searching: false })
      })
      .catch((e) => store.handleError(githubAPI.parseError(e)))
  }
}

/* eslint-disable-next-line */
export const adderOnConfirm = curry((user, cb, e) => {
  store.mark({
    searching: false,
    githubUser: null,
    popoverVisible: false,
  })

  cb(user)
})

export const inputOnChange = (e) => store.mark({ searchValue: e.target.value })

export const onPopoverVisible = (visable) => {
  if (!visable) {
    store.mark({
      searchValue: '',
      searching: false,
      githubUser: null,
    })
  }
  store.mark({ popoverVisible: visable })
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
  }, [_store])
}
