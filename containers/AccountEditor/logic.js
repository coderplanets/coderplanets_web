import R from 'ramda'

import {
  gqRes,
  makeDebugger,
  $solver,
  dispatchEvent,
  EVENT,
  ERR,
  TYPE,
  meteorState,
} from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AccountEditor')
/* eslint-enable no-unused-vars */

let accountEditor = null

export function goBack() {
  dispatchEvent(EVENT.PREVIEW, {
    type: TYPE.PREVIEW_ACCOUNT_VIEW,
  })
}

export const profileChange = R.curry((part, e) => {
  accountEditor.updateUser({
    [part]: e.target.value,
  })
})

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
]

const nilOrEmpty = R.either(R.isNil, R.isEmpty)
const hasValue = R.compose(R.not, nilOrEmpty)
const pickUpdatable = R.compose(R.pickBy(hasValue), R.pick(updatableAttrs))

export const updateConfirm = () => {
  // TODO: 只去除 null 的即可，如果为空也是合法的
  const editing = pickUpdatable(accountEditor.accountInfo)
  const origin = pickUpdatable(accountEditor.accountOrigin)
  // debug('editing: ', editing)
  // debug('origin: ', origin)

  // TODO: 唯一的限制是 昵称不能为空
  if (R.equals(editing, origin)) {
    meteorState(accountEditor, 'warn', 3)
    return false
  }

  accountEditor.markState({
    updating: true,
  })

  sr71$.mutate(S.updateProfile, { profile: editing })

  /*
  setTimeout(() => {
    accountEditor.markState({
      updating: false,
    })
    meteorState(accountEditor, 'error', 5, '自定义错误')
  }, 3000)
  */
}

export function cancleEdit() {
  dispatchEvent(EVENT.PREVIEW_CLOSE)
}

export function updateDone() {
  const editing = pickUpdatable(accountEditor.accountInfo)
  accountEditor.updateOrign(editing)
}

const DataSolver = [
  {
    match: gqRes('updateProfile'),
    action: () => {
      meteorState(accountEditor, 'success', 3)
      updateDone()
      cancleLoading()
      // communitiesContent.loadCommunities(data)
    },
  },
]

const cancleLoading = () => {
  accountEditor.markState({
    updating: false,
  })
}

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
      cancleLoading()
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      cancleLoading()
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      cancleLoading()
    },
  },
]

export function init(selectedStore) {
  accountEditor = selectedStore
  accountEditor.copyAccountInfo()
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
