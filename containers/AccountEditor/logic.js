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
  store.updateEditing({ [part]: e.target.value })
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
  store.updateEditing({ workBackgrounds: newWorkBackgrounds })
}

export const removeEduBg = (school, major) => {
  const { editingUserData } = store
  const { educationBackgrounds } = editingUserData
  const newEducationBackgrounds = R.reject(
    R.equals({ school, major }),
    educationBackgrounds
  )
  store.updateEditing({ educationBackgrounds: newEducationBackgrounds })
}

export function sexChange(sex) {
  store.updateEditing({ sex })
}

export const updateConfirm = () => {
  if (!store.statusClean) return false
  const editing = cast(updateFields, store.editingUserData)
  const origin = cast(updateFields, store.accountOrigin)

  if (R.equals(editing, origin)) return meteorState(store, 'warn', 3)

  store.markState({ updating: true })

  console.log('editing: ', editing)
  sr71$.mutate(S.updateProfile, { profile: editing })
}

export function cancleEdit() {
  dispatchEvent(EVENT.PREVIEW_CLOSE)
}

export function updateDone() {
  const editing = cast(updateFields, store.editingUserData)
  store.updateAccount(editing)
}

export function toggleSocials() {
  store.markState({ showSocials: !store.showSocials })
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

const encodeGqError = errObj => {
  return JSON.stringify(errObj)
}

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      meteorState(store, 'error', 5, encodeGqError(details))
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
