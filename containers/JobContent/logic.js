// import R from 'ramda'
import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  ERR,
  errRescue,
} from 'utils'

import SR71 from 'utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_JOBS],
})

let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:JobContent')

const loadJob = () => {
  const { id } = store.viewingData
  sr71$.query(S.job, { id, userHasLogin: store.isLogin })
}

/*
   NOTE: in job page, if you want to update the job content
   you need load tags by your self, because the this ssr dones't
   load the the partialTags(cities infos) for you
 */
const loadCityTags = () => {
  if (!store.isLogin) return false
  const community = store.curCommunity.raw
  // tagsBar: { tags: partialTags },
  sr71$.query(S.partialTags, { community, thread: 'JOB' })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('job'),
    action: ({ job }) => store.setViewing({ job }),
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags }) => store.updateTagsBar(partialTags),
  },
  {
    match: asyncRes(EVENT.REFRESH_JOBS),
    action: () => loadJob(),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'JobContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'JobContent' }),
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadCityTags()
}

export const uninit = () => {
  if (!sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
