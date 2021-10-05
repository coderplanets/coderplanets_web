import { has } from 'ramda'
import { useEffect } from 'react'

import type { TGQError } from '@/spec'
import { EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, isObject } from '@/utils'

import type { TStore } from './store'

/* eslint-disable-next-line */
const log = buildLog('L:ErrorBox')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.ERR_RESCUE],
})

let sub$ = null
let store: TStore | undefined

export const onClose = (): void => store.mark({ show: false })

const classifyGQErrors = (errors: TGQError[]): void => {
  if (!Array.isArray(errors)) {
    return log('invalid errors: ', errors)
  }

  if (has('path', errors[0])) {
    if (isObject(errors[0].message)) {
      return store.mark({
        graphqlType: 'changeset',
        changesetError: errors,
      })
    }
    return store.mark({
      graphqlType: 'custom',
      customError: errors,
    })
  }

  store.mark({ graphqlType: 'parse', parseError: errors })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.ERR_RESCUE),
    action: (res) => {
      const {
        type,
        data: { operation, details, path },
      } = res[EVENT.ERR_RESCUE]

      switch (type) {
        case ERR.GRAPHQL:
          classifyGQErrors(details)
          break

        case ERR.TIMEOUT:
          store.mark({ timeoutError: details, path })
          break

        default:
          log('default')
      }

      store.mark({
        show: true,
        type,
        operation: operation || '--',
        path,
      })
    },
  },
]

const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (!sub$) return
      sub$.unsubscribe()
    }
  }, [_store])
