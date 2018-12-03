// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  TYPE,
  ERR,
  githubApi,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:WikiThread')
/* eslint-enable no-unused-vars */

let store = null

const getWiki = () => {
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
    .then(res => syncWiki(res))
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
    action: ({ wiki }) => store.markState({ wiki }),
  },
  {
    match: asyncRes('syncWiki'),
    action: () => getWiki(),
  },
  {
    match: asyncRes('addWikiContributor'),
    action: () => getWiki(),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => getWiki(),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: () => getWiki(),
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

  // if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  getWiki()
}

export function uninit() {
  if (sub$) sub$.unsubscribe()
}
