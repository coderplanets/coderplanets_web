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
  updateEditing,
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

export const goBack = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_VIEW })

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export const updateBg = (key, part, { target: { value } }) =>
  store.markState({
    [key]: R.merge(store[key], { [part]: value }),
  })

export const addBg = type => store.addBg(type)

export const removeWorkBg = (company, title) => {
  const { editUserData } = store
  const { workBackgrounds } = editUserData
  const newWorkBackgrounds = R.reject(
    R.equals({ company, title }),
    workBackgrounds
  )
  store.updateEditing({ workBackgrounds: newWorkBackgrounds })
}

export const removeEduBg = (school, major) => {
  const { editUserData } = store
  const { educationBackgrounds } = editUserData
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
  let profile = cast(updateFields, store.editUserData)
  // const origin = cast(updateFields, store.accountOrigin)
  // if (R.equals(editing, origin)) return meteorState(store, 'warn', 3)
  const educationBackgrounds = R.clone(profile.educationBackgrounds)
  const workBackgrounds = R.clone(profile.workBackgrounds)

  profile = R.omit(['educationBackgrounds', 'workBackgrounds'], profile)

  const args = { profile }

  if (!R.isEmpty(educationBackgrounds))
    args.educationBackgrounds = educationBackgrounds
  if (!R.isEmpty(workBackgrounds)) args.workBackgrounds = workBackgrounds

  store.markState({ updating: true })
  debug('profile: ', args)
  sr71$.mutate(S.updateProfile, args)
}

export function cancleEdit() {
  dispatchEvent(EVENT.PREVIEW_CLOSE)
}

export function updateDone() {
  const editing = cast(updateFields, store.editUserData)
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
  store = _store

  store.copyAccountInfo()

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  // if (store.loading) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
