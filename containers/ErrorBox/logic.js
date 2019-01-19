import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  EVENT,
  isObject,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
// import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.ERR_RESCUE],
})
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:ErrorBox')

export const onClose = () => {
  // TODO: reset
  store.markState({ show: false })
}

const graphqlTypes = gqErrors => {
  if (!Array.isArray(gqErrors)) {
    return debug('非法的 gqErrors: ', gqErrors)
  }

  if (R.has('path', gqErrors[0])) {
    debug('server side error: ', gqErrors)
    if (isObject(gqErrors[0].message)) {
      return debug('changeset error: ', gqErrors)
    }
    return debug('custom error: ', gqErrors)
  }

  debug('graphql parse error: ', gqErrors)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.ERR_RESCUE),
    action: res => {
      const { type, data: { operation, details } } = res[EVENT.ERR_RESCUE]
      debug('get yohoo: ', res[EVENT.ERR_RESCUE])
      debug('graphqlTypes: ', graphqlTypes(details))
      store.markState({ show: true, type, operation })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      debug('ERR.GRAPHQL -->', details)
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
