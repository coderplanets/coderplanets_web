// import R from 'ramda'

import {
  makelogger,
  dispatchEvent,
  $solver,
  asyncErr,
  ERR,
  EVENT,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = makelogger('L:DocUploader')

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
  const curDate = new Date()
  const curTime = curDate.getTime()

  return `${community}-${thread}-${id}-${userName}-${userId}-${curTime}-${filename}`
}

export const sendEvent = (state = 'start') => {
  if (state === 'start') {
    return dispatchEvent(EVENT.UPLOAD_IMG_START)
  }

  return dispatchEvent(EVENT.UPLOAD_IMG_FINISH)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'DocUploader' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'DocUploader' })
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
  log('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
