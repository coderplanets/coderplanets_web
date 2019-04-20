import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:CommunitySetter')

export const onSearchChange = e =>
  store.markState({ searchValue: e.target.value })

export const onSearch = () => {
  const { searchValue } = store

  return R.isEmpty(searchValue)
    ? loadCommunities()
    : searchCommunities(searchValue)
}

export const onSearchPress = e => {
  if (e.key === 'Enter') {
    onSearch()
  }
}

// load all communities
const loadCommunities = (page = 1) =>
  sr71$.query(S.pagedCommunities, { filter: { page, size: 20 } })

// search spec communities
const searchCommunities = title => sr71$.query(S.searchCommunities, { title })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) => store.markState({ pagedCommunities }),
  },
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: pagedCommunities }) =>
      store.markState({ pagedCommunities }),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: err => {
      debug(err)
      // cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunitySetter' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'CommunitySetter' })
    },
  },
]

export const init = _store => {
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (!sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
