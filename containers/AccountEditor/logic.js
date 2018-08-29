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
  cast,
  meteorState,
} from '../../utils'

import { updateFields } from './metrics'

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

export const profileChange = R.curry((part, e) =>
  store.updateUser({ [part]: e.target.value })
)

export const updateBg = (key, part, { target: { value } }) =>
  store.markState({
    [key]: R.merge(store[key], { [part]: value }),
  })

export const addBg = type => store.addBg(type)

export const removeWorkBg = (company, title) => {
  const { editingUserData } = store
  const { workBackgrounds } = editingUserData
  const newWorkBackgrounds = R.reject(
    R.equals({ company, title }),
    workBackgrounds
  )
  store.updateUser({ workBackgrounds: newWorkBackgrounds })
}

export const removeEduBg = (school, major) => {
  const { editingUserData } = store
  const { educationBackgrounds } = editingUserData
  const newEducationBackgrounds = R.reject(
    R.equals({ school, major }),
    educationBackgrounds
  )
  store.updateUser({ educationBackgrounds: newEducationBackgrounds })
}

export function sexChange(sex) {
  store.updateUser({ sex })
}

export const updateConfirm = () => {
  if (!store.statusClean) return false
  const editing = cast(updateFields, store.editingUserData)
  const origin = cast(updateFields, store.accountOrigin)
  // debug('editing: ', editing)
  // debug('origin: ', origin)
  if (R.equals(editing, origin)) {
    meteorState(store, 'warn', 3)
    return false
  }

  store.markState({ updating: true })

  console.log('editing: ', editing)
  sr71$.mutate(S.updateProfile, { profile: editing })
}

export function cancleEdit() {
  dispatchEvent(EVENT.PREVIEW_CLOSE)
}

export function updateDone() {
  const editing = cast(updateFields, store.editingUserData)
  store.updateOrign(editing)
}

export function toggleSocials() {
  store.markState({
    showSocials: !store.showSocials,
  })
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
