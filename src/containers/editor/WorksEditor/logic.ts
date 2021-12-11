import { useEffect } from 'react'
import Router from 'next/router'
import { isEmpty, uniqBy, prop, reject } from 'ramda'

import type {
  TSelectOption,
  TEditValue,
  TInput,
  TCommunity,
  TTechStackCategory,
  TUser,
} from '@/spec'
import { ERR, HCN } from '@/constant'

import { scrollToTop } from '@/utils/dom'
import {
  selectCommunity,
  errRescue,
  classifyTechstack,
  authWarn,
} from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { updateEditing } from '@/utils/mobx'
import { getParameterByName } from '@/utils/route'

import { STEP, DEFAULT_SOCIAL_INFO } from './constant'
import type { TStore } from './store'
import type { TStep } from './spec'

import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:WorksEditor')

// 当前添加的技术栈类别，因为 CommunitySetter 是一个 container, 只有一个
export const setActiveTechCategory = (c: TTechStackCategory): void => {
  store.mark({ activeTechCategory: c })
  selectCommunity(c)
}

export const addTechStack = (tech: TCommunity): void => {
  const { activeTechCategory, techCommunities } = store

  const techstacks = uniqBy(
    prop('raw'),
    techCommunities[activeTechCategory].concat(tech),
  )

  store.mark({ [activeTechCategory]: techstacks })
}

export const removeTechStack = (tech: TCommunity): void => {
  const { activeTechCategory, techCommunities } = store

  const techstacks = reject(
    (t: TCommunity) => t.raw === tech.raw,
    techCommunities[activeTechCategory],
  )

  store.mark({ [activeTechCategory]: techstacks })
}

export const inputOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const citiesOnChange = (options: TSelectOption[]): void => {
  store.mark({ cities: options.map((o) => ({ raw: o.value })) })
}

// Radio style checker hanlder
export const checkerOnChange = (key: string, value: string): void => {
  store.mark({ [key]: value })
}

export const socialLabelOnChange = (
  platform: string,
  option: TSelectOption,
): void => {
  store.updateSocialLabel(platform, option)
}

export const socialValueOnChange = (platform: string, e: TInput): void => {
  store.updateSocialValue(platform, e.target.value)
}

export const removeSocial = (platform: string): void => {
  store.removeSocialInfo(platform)
}

export const addSocial = (): void => {
  const { inputData, socialOptions } = store
  const { socialInfo } = inputData
  const platform = socialOptions[0].value

  const newSocialInfo = [
    ...socialInfo,
    { platform, link: store.getSocialPrefix(platform) },
  ]

  store.mark({ socialInfo: newSocialInfo })
}

export const previousStep = (): void => {
  const { step } = store
  if (step === STEP.FOUR) return

  setTimeout(scrollToTop, 300)

  switch (step) {
    case STEP.ONE: {
      return store.mark({ step: STEP.ZERO })
    }
    case STEP.TWO: {
      return store.mark({ step: STEP.ONE })
    }
    case STEP.THREE: {
      return store.mark({ step: STEP.TWO })
    }
    case STEP.FOUR: {
      return store.mark({ step: STEP.THREE })
    }
    default:
      // eslint-disable-next-line no-useless-return
      return
  }
}

// to next launch step
export const nextStep = (): void => {
  const { step, isCurrentStepValid, isLogin } = store
  if (!isLogin) return authWarn()

  if (!isCurrentStepValid) {
    return store.setErrorMsgIfNeed()
  }

  setTimeout(scrollToTop, 300)

  switch (step) {
    case STEP.ZERO: {
      setDefaultTeammate()
      return store.mark({ step: STEP.ONE })
    }

    case STEP.ONE: {
      return store.mark({ step: STEP.TWO })
    }
    case STEP.TWO: {
      return store.mark({ step: STEP.THREE })
    }
    case STEP.THREE: {
      return store.mark({ step: STEP.FOUR })
    }
    default:
      // eslint-disable-next-line no-useless-return
      return
  }
}

export const gotoStep = (step: TStep): void => {
  // if target step is the last launchpart, , can't go
  if (step === STEP.FOUR) return
  store.mark({ step })
}

export const setWordsCountState = (wordsCountReady: boolean): void => {
  store?.mark({ wordsCountReady })
}

export const searchUser = (name: string): void => {
  sr71$.query(S.searchUsers, { name })
}

export const addTeammate = (user: TUser): void => {
  store.addTeammates(user)
}

export const removeTeammate = (user: TUser): void => {
  store.removeTeammates(user)
}

export const closeSearchedUsers = (): void => store.mark({ searchedUsers: [] })

export const onPublish = (): void => {
  const { mode } = store

  store.mark({ publishing: true })
  return mode === 'publish' ? doCreate() : doUpdate()
}

const doCreate = (): void => {
  const { inputData } = store
  const { teammates, ...args } = inputData

  sr71$.mutate(S.createWorks, {
    ...args,
    teammates: teammates.map((t) => t.login),
    socialInfo: store.cleanupEmptySocial(),
  })
}

const doUpdate = (): void => {
  const { id, inputData } = store
  const { teammates, ...args } = inputData

  sr71$.mutate(S.updateWorks, {
    id,
    ...args,
    teammates: teammates.map((t) => t.login),
    socialInfo: store.cleanupEmptySocial(),
  })
}

export const gotoMarket = () => Router.push('/works')
export const gotoArticleDetail = () => {
  const { id } = store

  Router.push(`/works/${id}`)
}

// ###############################
// init & uninit handlers
// ###############################

const loadWorks = () => {
  const { id } = store.viewingArticle
  const userHasLogin = store.isLogin

  sr71$.query(S.works, { id, userHasLogin })
}

const loadCommunity = (): void => {
  // const { mode } = store
  // if (mode !== 'publish') return
  const raw = getParameterByName('community')?.toLowerCase() || HCN

  sr71$.query(S.community, { raw })
}

// 这里有一个坑，不能再 useInit 里调用，因为这是 Footer 里的用户信息还没有回来
const setDefaultTeammate = (): void => {
  const { accountInfo, inputData } = store

  if (inputData.teammates.length === 0) {
    store.mark({ teammates: [accountInfo] })
  }
}

const DataSolver = [
  {
    match: asyncRes('createWorks'),
    action: ({ createWorks }) => {
      log('created works: ', createWorks)
      store.mark({ id: createWorks.id, publishing: false, publishDone: true })
      setTimeout(() => nextStep(), 500)
    },
  },
  {
    match: asyncRes('updateWorks'),
    action: ({ updateWorks }) => {
      store.mark({ id: updateWorks.id, publishing: false, publishDone: true })
      gotoArticleDetail()
    },
  },
  {
    match: asyncRes('works'),
    action: ({ works }) => {
      log('load works: ', works)
      const { body } = works.document
      const socialInfo = !isEmpty(works.socialInfo)
        ? works.socialInfo
        : DEFAULT_SOCIAL_INFO

      const worksData = {
        ...works,
        ...classifyTechstack(works),
        body,
        socialInfo,
        author: works.author,
      }
      store.mark({ ...worksData })
    },
  },
  {
    match: asyncRes('community'),
    action: ({ community }) => store.mark({ community }),
  },
  {
    match: asyncRes('searchUsers'),
    action: ({ searchUsers }) => {
      console.log('searchUsers.entries: ', searchUsers.entries)
      store.mark({ searchedUsers: searchUsers.entries })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      store.mark({ publishing: false })
      errRescue({ type: ERR.GRAPHQL, details, path: 'publishWorks' })
      //
    },
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    loadCommunity()
    // if (store.mode === 'publish') {
    //   setDefaultTeammate()
    // }

    if (store.mode === 'update') {
      loadWorks()
    }

    return () => {
      sr71$.stop()
      // sub$.unsubscribe()
      sub$ = null
      store.reset()
    }
  }, [_store])
}
