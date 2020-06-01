import { useEffect } from 'react'
import { isEmpty, startsWith } from 'ramda'

import { TYPE, EVENT, ERR, THREAD } from '@/constant'
import { asyncSuit, buildLog, errRescue, BStore, nilOrEmpty } from '@/utils'
import { githubAPI } from '@/services'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:WikiThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})

let sub$ = null
let store = null

const loadWiki = () => {
  const community = store.curCommunity.raw

  store.mark({ curView: TYPE.LOADING })
  sr71$.query(S.wiki, { community })
}

const syncWiki = readme => {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  store.mark({ curView: TYPE.LOADING })
  sr71$.mutate(S.syncWiki, args)
}

export const syncWarnOnClose = () => store.mark({ showSyncWarning: false })

export const syncWikiFromGithub = () => {
  if (nilOrEmpty(BStore.get('github_token'))) {
    return store.mark({ showSyncWarning: true })
  }

  githubAPI
    .searchWiki(store.curCommunity.raw)
    .then(res => {
      if (!res || startsWith('404', res))
        return store.mark({ curView: TYPE.NOT_FOUND })
      syncWiki(res)
    })
    .catch(e => store.handleError(githubAPI.parseError(e)))
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
      const curView = isEmpty(wiki.readme) ? TYPE.RESULT_EMPTY : TYPE.RESULT
      store.mark({ wiki, curView })
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
      store.mark({ curView: TYPE.NOT_FOUND })
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
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      if (store.curView === TYPE.LOADING || !sub$) return false
      log('===== do uninit')
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
}
