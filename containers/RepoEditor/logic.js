import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  ERR,
  githubApi,
  closePreviewer,
  BStore,
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
export const changeSubView = subView => store.markState({ subView })

export const searchOnChange = ({ target: { value: searchValue } }) =>
  store.markState({ searchValue })

export const tokenOnChange = ({ target: { value: tokenValue } }) =>
  store.markState({ tokenValue })

export const setGithubToken = () => {
  if (!store.validator('tokenValue')) return false
  BStore.set('github_token', store.tokenValue)
  store.markState({ subView: 'search' })
  store.toast('success', {
    title: '设置成功',
    msg: '请刷新页面后重新尝试。',
  })
}

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
      closePreviewer()
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
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  const tokenValue = BStore.get('github_token') || ''
  const subView = R.isEmpty(tokenValue) ? 'token' : 'search'
  store.markState({ tokenValue, subView })
}

export function uninit() {
  if (store.searching || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
