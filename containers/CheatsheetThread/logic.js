// import R from 'ramda'

import { makeDebugger, $solver, asyncErr, ERR, githubApi } from '../../utils'
import SR71 from '../../utils/network/sr71'
import parser from './parser'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CheatsheetThread')
/* eslint-enable no-unused-vars */

let store = null

export function getData(which) {
  githubApi
    .searchCheatsheet(which)
    .then(res => store.markState({ source: parser(res) }))
    .catch(e => {
      console.log('getData error: ', e)
      /* store.handleError(githubApi.parseError(e)) */
    })
}

// export function someMethod() {}

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
  if (store) {
    return getData('elixir')
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  getData('elixir')
}
