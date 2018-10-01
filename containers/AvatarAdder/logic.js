// import R from 'ramda'

import { makeDebugger, $solver, asyncErr, ERR, githubApi } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AvatarAdder')
/* eslint-enable no-unused-vars */

let store = null

export function onSearch(e) {
  if (e.key === 'Enter') {
    debug('store.searchValue: ', store.searchValue)
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

export function onConfirm() {
  debug('onConfirm: ', store.githubUserData)
}

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
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
