import R from 'ramda'
import { useEffect } from 'react'

import { buildLog } from '@utils'
import { githubApi } from '@services'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:AvatarAdder')

export const onSearch = e => {
  if (e.key === 'Enter') {
    log('store.searchValue: ', store.searchValue)
    store.markState({ searching: true, searchValue: e.target.value })

    githubApi
      .searchUser(store.searchValue)
      .then(res => {
        store.markState({ githubUser: githubApi.transformUser(res) })
        store.markState({ searching: false })
      })
      .catch(e => store.handleError(githubApi.parseError(e)))
  }
}

/* eslint-disable-next-line */
export const adderOnConfirm = R.curry((user, cb, e) => {
  store.markState({
    searching: false,
    githubUser: null,
    popoverVisiable: false,
  })

  cb(user)
})

export const inputOnChange = e =>
  store.markState({ searchValue: e.target.value })

export const onPopoverVisible = visable => {
  if (!visable) {
    store.markState({
      searchValue: '',
      searching: false,
      githubUser: null,
    })
  }
  store.markState({ popoverVisiable: visable })
}

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
  }, [_store])
}
