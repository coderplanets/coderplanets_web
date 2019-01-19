// import R from 'ramda'

import { makeDebugger, $solver, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:DocUploader')

let store = null

export const onUploadError = () =>
  store.toast('error', {
    title: '暂时无法上传图片',
    msg: '请检查 OSS key 配置',
  })

export const getOSSDir = () => {
  const thread = store.curThread
  /* yearYmonthM */
  const date = new Date()
  let day = date.getDate()
  if (day < 10) {
    day = `0${day}`
  }

  return `${thread}/${date.getFullYear()}_${date.getMonth() + 1}/${day}`
}

export const getOSSFileName = filename => {
  const community = store.curCommunity.raw
  const thread = store.curThread
  const userName = store.accountInfo.nickname
  const userId = store.accountInfo.id
  const id = store.viewingData.id || 'new'

  return `${community}-${thread}-${id}-${userName}-${userId}-${filename}`
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
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
