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
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED],
})
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:RepoEditor')

export const onPublish = () => {
  const args = {
    communityId: store.viewing.community.id,
    ...store.editRepoData,
  }

  debug('onPublish args: ', args)
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  const tokenValue = BStore.get('github_token') || ''
  const subView = R.isEmpty(tokenValue) ? 'token' : 'search'
  store.markState({ tokenValue, subView })
}

export const uninit = () => {
  if (store.searching || !sub$) return false
  debug('===== do uninit')
  store.markState({ curView: 'search', subView: 'search', searching: false })
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
