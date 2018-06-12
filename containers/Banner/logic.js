import R from 'ramda'

import { asyncRes, asyncErr, makeDebugger, $solver, ERR } from '../../utils'
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
  console.log('banner curCommunity -> ', banner.curCommunity)
  const mainPath = R.toLower(banner.curCommunity.title)
  const subPath = target

  banner.markRoute({
    mainPath,
    subPath,
  })
}

// TODO: load cur community
// 两种情形: 1. 浏览器刷新页面. 2. 事件： Switch_Community

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => banner.loadCurCommunity(community),
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

export function init(selectedStore) {
  banner = selectedStore
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadCommunity()
}
