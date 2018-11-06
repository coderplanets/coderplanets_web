import {
  makeDebugger,
  $solver,
  asyncErr,
  asyncRes,
  TYPE,
  ERR,
  githubApi,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CheatsheetThread')
/* eslint-enable no-unused-vars */

let store = null

const getCheatsheet = () => {
  const community = store.curCommunity.raw
  // const community = 'no-exsit'
  /* const community = 'elixir' */

  store.markState({ curView: TYPE.LOADING })
  sr71$.query(S.cheatsheet, { community })
}

export function syncCheatsheet(readme) {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.syncCheatsheet, args)
}

export function syncCheetsheetFromGithub() {
  githubApi
    .searchCheatsheet(store.curCommunity.raw)
    .then(res => syncCheatsheet(res))
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export function addContributor(user) {
  const args = {
    id: store.cheatsheetData.id,
    contributor: user,
  }
  sr71$.mutate(S.addCheatsheetContributor, args)
}

// export function someMethod() {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('cheatsheet'),
    action: ({ cheatsheet }) =>
      store.markState({ cheatsheet, curView: TYPE.RESULT }),
  },
  {
    match: asyncRes('syncCheatsheet'),
    action: () => getCheatsheet(),
  },
  {
    match: asyncRes('addCheatsheetContributor'),
    action: () => getCheatsheet(),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
      // TODO: add CODE to NOT_FOUND in server
      store.markState({ curView: TYPE.NOT_FOUND })
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
    return getCheatsheet()
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  getCheatsheet()
}
