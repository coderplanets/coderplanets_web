import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, isObject } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:ErrorBox')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.ERR_RESCUE],
})

let sub$ = null
let store = null

export const onClose = () => store.markState({ show: false })

const classifyGQErrors = errors => {
  if (!Array.isArray(errors)) {
    return log('invalid errors: ', errors)
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

export const hide = () => store.markState({ show: false })

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
          log('default')
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

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (!sub$) return false
      sub$.unsubscribe()
    }
  }, [_store])
