import R from 'ramda'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  $solver,
  dispatchEvent,
  EVENT,
  ERR,
  TYPE,
  meteorState,
  nilOrEmpty,
} from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AccountEditor')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function goBack() {
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ACCOUNT_VIEW,
  })
}

export const profileChange = R.curry((part, e) => {
  store.updateUser({ [part]: e.target.value })
})

export function sexChange(sex) {
  store.updateUser({ sex })
}

const updatableAttrs = [
  'nickname',
  'email',
  'location',
  'company',
  'education',
  'qq',
  'weibo',
  'weichat',
  'bio',
  'sex',
]

const hasValue = R.compose(
  R.not,
  nilOrEmpty
)
const pickUpdatable = R.compose(
  R.pickBy(hasValue),
  R.pick(updatableAttrs)
)

export const updateConfirm = () => {
  if (!store.statusClean) return false
  // TODO: 只去除 null 的即可，如果为空也是合法的
  const editing = pickUpdatable(store.accountInfo)
  const origin = pickUpdatable(store.accountOrigin)
  /* debug('editing: ', editing) */
  /* debug('origin: ', origin) */

  // TODO: 唯一的限制是 昵称不能为空
  if (R.equals(editing, origin)) {
    meteorState(store, 'warn', 3)
    return false
  }

  store.markState({
    updating: true,
  })

  sr71$.mutate(S.updateProfile, { profile: editing })
}

export function cancleEdit() {
  dispatchEvent(EVENT.PREVIEW_CLOSE)
}

export function updateDone() {
  const editing = pickUpdatable(store.accountInfo)
  store.updateOrign(editing)
}

const cancleLoading = () => {
  store.markState({ updating: false })
}
const DataSolver = [
  {
    match: asyncRes('updateProfile'),
    action: () => {
      meteorState(store, 'success', 3)
      updateDone()
      cancleLoading()
      // communitiesContent.loadCommunities(data)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      const errMsg = details[0].detail
      meteorState(store, 'error', 5, errMsg)
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      cancleLoading()
    },
  },
]

export function init(_store) {
  if (store) return false
  store = _store

  store.copyAccountInfo()

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
