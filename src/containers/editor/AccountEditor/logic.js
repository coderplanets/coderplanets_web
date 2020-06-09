import { useEffect } from 'react'
import { curry, isEmpty, clone, omit, reject, equals, merge } from 'ramda'

import { TYPE, EVENT, ERR } from '@/constant'
import {
  buildLog,
  asyncSuit,
  send,
  cast,
  meteorState,
  updateEditing,
  errRescue,
  nilOrEmpty,
} from '@/utils'

import { S, updateFields } from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:AccountEditor')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store = null
let sub$ = null

export const goBack = () =>
  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_VIEW })

export const inputOnChange = curry((part, e) => updateEditing(store, part, e))
/* eslint-disable no-unused-vars */
export const sexChange = curry((sex, e) => store.updateEditing({ sex }))

/* eslint-disable no-unused-vars */
export const socialOnChange = curry((part, e) => {
  const { editUserData: editUser } = store
  editUser.social[part] = e.target.value

  store.mark({ editUser })
})

export const updateBackground = curry((key, part, { target: { value } }) =>
  store.mark({ [key]: merge(store[key], { [part]: value }) }),
)

/* eslint-disable no-unused-vars */
export const addBackground = curry((type, e) => store.addBackground(type))

/* eslint-disable no-unused-vars */
export const removeWorkBackground = curry((company, title, e) => {
  const { editUserData } = store
  const { workBackgrounds } = editUserData
  const newWorkBackgrounds = reject(equals({ company, title }), workBackgrounds)
  store.updateEditing({ workBackgrounds: newWorkBackgrounds })
})

/* eslint-disable no-unused-vars */
export const removeEduBackground = curry((school, major, e) => {
  const { editUserData } = store
  const { educationBackgrounds } = editUserData
  const newEducationBackgrounds = reject(
    equals({ school, major }),
    educationBackgrounds,
  )
  store.updateEditing({ educationBackgrounds: newEducationBackgrounds })
})

export const updateConfirm = () => {
  if (!store.statusClean) return false
  let profile = cast(updateFields, store.editUserData)

  const educationBackgrounds = clone(profile.educationBackgrounds)
  const workBackgrounds = clone(profile.workBackgrounds)
  const social = reject(nilOrEmpty, clone(profile.social))

  profile = omit(['educationBackgrounds', 'workBackgrounds', 'social'], profile)

  const args = { profile }

  if (!isEmpty(educationBackgrounds)) {
    args.educationBackgrounds = educationBackgrounds
  }
  if (!isEmpty(workBackgrounds)) args.workBackgrounds = workBackgrounds
  if (!isEmpty(social)) args.social = social

  store.mark({ updating: true })
  log('args: ', args)
  sr71$.mutate(S.updateProfile, args)
}

export const cancelEdit = () => send(EVENT.PREVIEW_CLOSE)

export const updateDone = () => {
  const editing = cast(updateFields, store.editUserData)
  store.updateAccount(editing)
}

export const toggleSocials = () =>
  store.mark({ showSocials: !store.showSocials })

const cancelLoading = () => store.mark({ updating: false })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('updateProfile'),
    action: () => {
      meteorState(store, 'success', 3)
      updateDone()
      cancelLoading()
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancelLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      cancelLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'AccountEditor' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) =>
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
