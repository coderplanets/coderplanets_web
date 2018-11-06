import {
  makeDebugger,
  dispatchEvent,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  ERR,
  githubApi,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED],
})
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:RepoEditor')
/* eslint-enable no-unused-vars */

let store = null

export function onPublish() {
  const args = {
    communityId: store.viewing.community.id,
    ...store.editRepoData,
  }

  debug('onPublish args: ', args)
  sr71$.mutate(S.createRepo, args)
}

export function onGithubSearch() {
  if (!store.validator('searchValue')) return false
  const { owner, name } = store

  store.markState({ searching: true })
  githubApi
    .searchRepo(owner, name)
    .then(res => {
      store.markState({
        editRepo: githubApi.transformRepo(res),
        searching: false,
        curView: 'show',
      })
    })
    .catch(e => store.handleError(githubApi.parseError(e)))
}

export const changeView = curView => store.markState({ curView })
export const searchOnChange = ({ target: { value: searchValue } }) =>
  store.markState({ searchValue })

/*
   export const searchOnChange = ({ target: { e: searchValue } }) =>
   store.markState({ searchValue })
 */

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('createRepo'),
    action: () => {
      debug('done!')
      // cancleLoading()
      // store.reset()
      store.closePreview()
      dispatchEvent(EVENT.REFRESH_REPOS)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => store.markState({ curView: 'search' }),
  },
]
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
