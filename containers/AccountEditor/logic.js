import R from 'ramda'
import { useEffect } from 'react'

import { TYPE, EVENT, ERR } from '@constant'
import {
  buildLog,
  asyncSuit,
  dispatchEvent,
  cast,
  meteorState,
  updateEditing,
  errRescue,
  nilOrEmpty,
} from '@utils'

import { S, updateFields } from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:AccountEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store = null
let sub$ = null

export const goBack = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_VIEW })

export const inputOnChange = R.curry((part, e) => updateEditing(store, part, e))
/* eslint-disable no-unused-vars */
export const sexChange = R.curry((sex, e) => store.updateEditing({ sex }))

/* eslint-disable no-unused-vars */
export const socialOnChange = R.curry((part, e) => {
  const { editUserData: editUser } = store
  editUser.social[part] = e.target.value

  store.markState({ editUser })
})

export const updateBackground = R.curry((key, part, { target: { value } }) =>
  store.markState({ [key]: R.merge(store[key], { [part]: value }) })
)

/* eslint-disable no-unused-vars */
export const addBackground = R.curry((type, e) => store.addBackground(type))

/* eslint-disable no-unused-vars */
export const removeWorkBackground = R.curry((company, title, e) => {
  const { editUserData } = store
  const { workBackgrounds } = editUserData
  const newWorkBackgrounds = R.reject(
    R.equals({ company, title }),
    workBackgrounds
  )
  store.updateEditing({ workBackgrounds: newWorkBackgrounds })
})

/* eslint-disable no-unused-vars */
export const removeEduBackground = R.curry((school, major, e) => {
  const { editUserData } = store
  const { educationBackgrounds } = editUserData
  const newEducationBackgrounds = R.reject(
    R.equals({ school, major }),
    educationBackgrounds
  )
  store.updateEditing({ educationBackgrounds: newEducationBackgrounds })
})

export const updateConfirm = () => {
  if (!store.statusClean) return false
  let profile = cast(updateFields, store.editUserData)

  const educationBackgrounds = R.clone(profile.educationBackgrounds)
  const workBackgrounds = R.clone(profile.workBackgrounds)
  const social = R.reject(nilOrEmpty, R.clone(profile.social))

  profile = R.omit(
    ['educationBackgrounds', 'workBackgrounds', 'social'],
    profile
  )

  const args = { profile }

  if (!R.isEmpty(educationBackgrounds))
    args.educationBackgrounds = educationBackgrounds
  if (!R.isEmpty(workBackgrounds)) args.workBackgrounds = workBackgrounds
  if (!R.isEmpty(social)) args.social = social

  store.markState({ updating: true })
  log('args: ', args)
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

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    store.copyAccountInfo()

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
