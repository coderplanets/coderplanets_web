import R from 'ramda'

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
} from 'utils'

import SR71 from 'utils/async/sr71'
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

  sr71$.query(S.wiki, { community })
}

const syncWiki = readme => {
  const args = {
    readme,
    lastSync: new Date().toISOString(),
    communityId: store.curCommunity.id,
  }

  sr71$.mutate(S.syncWiki, args)
}

export const syncWikiFromGithub = () => {
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
    action: ({ wiki }) => store.markState({ wiki, curView: TYPE.RESULT }),
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
