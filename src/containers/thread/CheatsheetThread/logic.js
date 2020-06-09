import { useEffect } from 'react'
import Prism from 'mastani-codehighlight'
import { startsWith, isEmpty } from 'ramda'

import { TYPE, EVENT, ERR, THREAD } from '@/constant'
import { asyncSuit, buildLog, errRescue, BStore, nilOrEmpty } from '@/utils'

import { githubAPI } from '@/services'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CheatsheetThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})

let sub$ = null
let store = null

const loadCheatsheet = () => {
  const community = store.curCommunity.raw
  // const community = 'no-exist'
  /* const community = 'elixir' */

  store.mark({ curView: TYPE.LOADING })
  sr71$.query(S.cheatsheet, { community })
}

export const syncCheatsheet = (readme) => {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.syncCheatsheet, args)
}

export const syncWarnOnClose = () => store.mark({ showSyncWarning: false })

export const syncCheetsheetFromGithub = () => {
  if (nilOrEmpty(BStore.get('github_token'))) {
    return store.mark({ showSyncWarning: true })
  }

  githubAPI
    .searchCheatsheet(store.curCommunity.raw)
    .then((res) => {
      if (!res || startsWith('404', res))
        return store.mark({ curView: TYPE.NOT_FOUND })

      syncCheatsheet(res)
    })
    .catch((e) => store.handleError(githubAPI.parseError(e)))
}

export const addContributor = (user) => {
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
      const curView = isEmpty(cheatsheet.readme)
        ? TYPE.RESULT_EMPTY
        : TYPE.RESULT
      store.mark({ cheatsheet, curView })
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
    action: (res) => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.CHEATSHEET) return loadCheatsheet()
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => store.mark({ curView: TYPE.NOT_FOUND }),
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
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    Prism.highlightAll()
    setTimeout(() => {
      Prism.highlightAll()
    }, 1000)

    return () => {
      if (store.curView === TYPE.LOADING || !sub$) return false
      log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
