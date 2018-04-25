import R from 'ramda'
import Router from 'next/router'

import { gqRes, makeDebugger, $solver, ERR } from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Banner')
/* eslint-enable no-unused-vars */

let banner = null

export function loadCommunity() {
  sr71$.query(S.community, { title: 'javascript' })
}

export function tabberChange(target) {
  // main should be current community title
  const main = R.toLower(banner.curCommunity.title)
  const sub = target

  Router.push(
    {
      pathname: '/',
      query: { main, sub },
    },
    `/${main}/${sub}`
  )
}

// TODO: load cur community
// 两种情形: 1. 浏览器刷新页面. 2. 事件： Switch_Community

const DataSolver = [
  {
    match: gqRes('community'),
    action: ({ community }) => banner.loadCurCommunity(community),
  },
]

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(selectedStore) {
  banner = selectedStore
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadCommunity()
}
