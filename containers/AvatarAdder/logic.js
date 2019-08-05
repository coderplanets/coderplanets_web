import R from 'ramda'
import { useEffect } from 'react'

import { buildLog } from '@utils'
import { githubApi } from '@services'

/* eslint-disable-next-line */
const log = buildLog('L:AvatarAdder')

let store = null

export const onSearch = e => {
  if (e.key === 'Enter') {
    log('store.searchValue: ', store.searchValue)
    store.mark({ searching: true, searchValue: e.target.value })

    githubApi
      .searchUser(store.searchValue)
      .then(res => {
        store.mark({ githubUser: githubApi.transformUser(res) })
        store.mark({ searching: false })
      })
      .catch(e => store.handleError(githubApi.parseError(e)))
  }
}

/* eslint-disable-next-line */
export const adderOnConfirm = R.curry((user, cb, e) => {
  store.mark({
    searching: false,
    githubUser: null,
    popoverVisiable: false,
  })

  cb(user)
})

export const inputOnChange = e => store.mark({ searchValue: e.target.value })

export const onPopoverVisible = visable => {
  if (!visable) {
    store.mark({
      searchValue: '',
      searching: false,
      githubUser: null,
    })
  }
  store.mark({ popoverVisiable: visable })
}

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
  }, [_store])
}
