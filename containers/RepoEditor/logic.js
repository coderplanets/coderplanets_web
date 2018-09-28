import { makeDebugger, $solver, asyncErr, ERR } from '../../utils'

import githubApi from './github_api'

import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:RepoEditor')
/* eslint-enable no-unused-vars */

let store = null

export function onGithubSearch() {
  if (!store.validator('searchValue')) return false
  const { owner, name } = store

  store.markState({ searching: true })
  githubApi
    .search(owner, name)
    .then(values => {
      store.markState({
        editRepo: githubApi.transForm(values),
        searching: false,
        curView: 'show',
      })
    })
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export function changeView(curView) {
  console.log('changeView: ', curView)
  store.markState({ curView })
}

export function searchOnChange(e) {
  const searchValue = e.target.value
  store.markState({ searchValue })
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
