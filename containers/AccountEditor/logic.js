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
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import { S, updateFields } from './schema'

const sr71$ = new SR71()

/* eslint-disable-next-line */
const debug = makeDebugger('L:AccountEditor')

let store = null
let sub$ = null

export const goBack = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_VIEW })

export const inputOnChange = (part, e) => updateEditing(store, part, e)

export const socialOnChange = (part, e) => {
  const { editUserData: editUser } = store
  editUser.social[part] = e.target.value

  store.markState({ editUser })
}

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

export const sexChange = sex => store.updateEditing({ sex })

export const updateConfirm = () => {
  if (!store.statusClean) return false
  let profile = cast(updateFields, store.editUserData)

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

export const cancleEdit = () => dispatchEvent(EVENT.PREVIEW_CLOSE)

export const updateDone = () => {
  const editing = cast(updateFields, store.editUserData)
  store.updateAccount(editing)
}

export const toggleSocials = () =>
  store.markState({ showSocials: !store.showSocials })

const cancleLoading = () => store.markState({ updating: false })

// ###############################
// Data & Error handlers
// ###############################

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
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancleLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'AccountEditor' })
    },
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  store.copyAccountInfo()
}

export const uninit = () => {
  if (!sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
