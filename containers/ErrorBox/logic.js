import R from 'ramda'

import { makeDebugger, $solver, asyncRes, ERR, EVENT, isObject } from 'utils'

import SR71 from 'utils/async/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.ERR_RESCUE],
})
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:ErrorBox')

export const onClose = () => store.markState({ show: false })

const classifyGQErrors = errors => {
  if (!Array.isArray(errors)) {
    return debug('invalid errors: ', errors)
  }

  if (R.has('path', errors[0])) {
    if (isObject(errors[0].message)) {
      return store.markState({
        graphqlType: 'changeset',
        changesetError: errors,
      })
    }
    return store.markState({
      graphqlType: 'custom',
      customError: errors,
    })
  }

  store.markState({ graphqlType: 'parse', parseError: errors })
}

export const hide = () => {
  store.markState({ show: false })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.ERR_RESCUE),
    action: res => {
      const {
        type,
        data: { operation, details, path },
      } = res[EVENT.ERR_RESCUE]

      switch (type) {
        case ERR.GRAPHQL:
          classifyGQErrors(details)
          break

        case ERR.TIMEOUT:
          store.markState({ timeoutError: details, path })
          break

        default:
          debug('default')
      }

      store.markState({
        show: true,
        type,
        operation: operation || 'TODO: missing schema def',
        path,
      })
    },
  },
]

const ErrSolver = []

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
