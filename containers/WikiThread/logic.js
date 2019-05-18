import R from 'ramda'
import { useEffect } from 'react'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  TYPE,
  ERR,
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
const debug = makeDebugger('L:WikiThread')

const loadWiki = () => {
  const community = store.curCommunity.raw

  store.markState({ curView: TYPE.LOADING })
  sr71$.query(S.wiki, { community })
}

const syncWiki = readme => {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  store.markState({ curView: TYPE.LOADING })
  sr71$.mutate(S.syncWiki, args)
}

export const syncWarnOnClose = () => store.markState({ showSyncWarning: false })

export const syncWikiFromGithub = () => {
  if (nilOrEmpty(BStore.get('github_token'))) {
    return store.markState({ showSyncWarning: true })
  }

  githubApi
    .searchWiki(store.curCommunity.raw)
    .then(res => {
      if (!res || R.startsWith('404', res))
        return store.markState({ curView: TYPE.NOT_FOUND })
      syncWiki(res)
    })
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export const addContributor = user => {
  const args = {
    id: store.wikiData.id,
    contributor: user,
  }
  sr71$.mutate(S.addWikiContributor, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('wiki'),
    action: ({ wiki }) => {
      const curView = R.isEmpty(wiki.readme) ? TYPE.RESULT_EMPTY : TYPE.RESULT
      store.markState({ wiki, curView })
    },
  },
  {
    match: asyncRes('syncWiki'),
    action: () => loadWiki(),
  },
  {
    match: asyncRes('addWikiContributor'),
    action: () => loadWiki(),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadWiki(),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.WIKI) return loadWiki()
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      store.markState({ curView: TYPE.NOT_FOUND })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'WikiThread' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'WikiThread' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      return () => {
        // debug('effect uninit')
        if (store.curView === TYPE.LOADING || !sub$) return false
        debug('===== do uninit')
        sub$.unsubscribe()
        sub$ = null
      }
    },
    [_store]
  )
}
