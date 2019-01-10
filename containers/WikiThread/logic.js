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
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})

/* eslint-disable-next-line */
const debug = makeDebugger('L:WikiThread')

let sub$ = null
let store = null

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

export function syncWikiFromGithub() {
  githubApi
    .searchWiki(store.curCommunity.raw)
    .then(res => {
      if (!res || R.startsWith('404', res))
        return store.markState({ curView: TYPE.NOT_FOUND })
      syncWiki(res)
    })
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export function addContributor(user) {
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
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
