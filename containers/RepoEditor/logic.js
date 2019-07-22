import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import {
  asyncSuit,
  buildLog,
  send,
  closePreviewer,
  BStore,
  errRescue,
} from '@utils'
import { githubApi } from '@services'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:RepoEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.PREVIEW_CLOSED],
})

let sub$ = null
let store = null

export const onPublish = () => {
  const args = {
    communityId: store.viewing.community.id,
    ...store.editRepoData,
  }

  log('onPublish args: ', args)
  store.markState({ publishing: true })
  sr71$.mutate(S.createRepo, args)
}

export const onGithubSearch = () => {
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

/* eslint-disable-next-line */
export const changeView = R.curry((curView, e) => store.markState({ curView }))
/* eslint-disable-next-line */
export const changeSubView = R.curry((subView, e) =>
  store.markState({ subView })
)

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

const cancleLoading = () =>
  store.markState({
    searching: false,
    publishing: false,
  })

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('createRepo'),
    action: () => {
      store.markState({ publishing: false })
      closePreviewer()
      send(EVENT.REFRESH_REPOS)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => store.markState({ curView: 'search' }),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancleLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'RepoEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'RepoEditor' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    const tokenValue = BStore.get('github_token') || ''
    const subView = R.isEmpty(tokenValue) ? 'token' : 'search'
    store.markState({ tokenValue, subView })

    return () => {
      store.markState({
        curView: 'search',
        subView: 'search',
        searching: false,
      })
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
