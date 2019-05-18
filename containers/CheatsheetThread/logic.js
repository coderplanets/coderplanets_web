import R from 'ramda'
import { useEffect } from 'react'
import Prism from 'mastani-codehighlight'

import {
  makeDebugger,
  $solver,
  asyncErr,
  asyncRes,
  TYPE,
  ERR,
  EVENT,
  THREAD,
  githubApi,
  errRescue,
  BStore,
  nilOrEmpty,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:CheatsheetThread')

const loadCheatsheet = () => {
  const community = store.curCommunity.raw
  // const community = 'no-exsit'
  /* const community = 'elixir' */

  store.markState({ curView: TYPE.LOADING })
  sr71$.query(S.cheatsheet, { community })
}

export const syncCheatsheet = readme => {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.syncCheatsheet, args)
}

export const syncWarnOnClose = () => store.markState({ showSyncWarning: false })

export const syncCheetsheetFromGithub = () => {
  if (nilOrEmpty(BStore.get('github_token'))) {
    return store.markState({ showSyncWarning: true })
  }

  githubApi
    .searchCheatsheet(store.curCommunity.raw)
    .then(res => {
      if (!res || R.startsWith('404', res))
        return store.markState({ curView: TYPE.NOT_FOUND })

      syncCheatsheet(res)
    })
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export const addContributor = user => {
  const args = {
    id: store.cheatsheetData.id,
    contributor: user,
  }
  sr71$.mutate(S.addCheatsheetContributor, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('cheatsheet'),
    action: ({ cheatsheet }) => {
      const curView = R.isEmpty(cheatsheet.readme)
        ? TYPE.RESULT_EMPTY
        : TYPE.RESULT
      store.markState({ cheatsheet, curView })
    },
  },
  {
    match: asyncRes('syncCheatsheet'),
    action: () => loadCheatsheet(),
  },
  {
    match: asyncRes('addCheatsheetContributor'),
    action: () => loadCheatsheet(),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadCheatsheet(),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.CHEATSHEET) return loadCheatsheet()
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => store.markState({ curView: TYPE.NOT_FOUND }),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'CheatsheetThread' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'CheatsheetThread' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      Prism.highlightAll()
      setTimeout(() => {
        Prism.highlightAll()
      }, 1000)

      return () => {
        if (store.curView === TYPE.LOADING || !sub$) return false
        debug('===== do uninit')
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
