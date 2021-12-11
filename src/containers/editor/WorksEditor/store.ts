/*
 * WorksEditor store
 *
 */

import { types as T, Instance, getParent } from 'mobx-state-tree'
import { pick, reject, includes, findIndex, keys } from 'ramda'

import type {
  TWorks,
  TSelectOption,
  TCommunity,
  TTechStack,
  TSubmitState,
  TAccount,
  TRootStore,
  TTechCommunities,
  TSocialInfo,
  TUser,
} from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { nilOrEmpty, isURL } from '@/utils/validator'
import { toast } from '@/utils/helper'

import { SocialInfo, Community, User } from '@/model'

import type { TInputData } from './spec'
import {
  STEP,
  PROFIT_MODE,
  WORKING_MODE,
  SOCIAL_OPTIONS,
  DEFAULT_SOCIAL_INFO,
} from './constant'

const communities2Techs = (communities: TCommunity[]): TTechStack[] => {
  return communities.map((c) => ({
    title: c.title,
    raw: c.raw,
    logo: c.logo,
  }))
}

const WorksEditor = T.model('WorksEditor', {
  mode: T.optional(T.enumeration(['publish', 'update']), 'publish'),
  step: T.optional(
    T.enumeration([STEP.ZERO, STEP.ONE, STEP.TWO, STEP.THREE, STEP.FOUR]),
    STEP.ZERO,
  ),

  author: T.optional(User, {}),
  community: T.optional(Community, {}),

  id: T.maybeNull(T.string),
  cover: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  body: T.optional(T.string, '{}'),
  desc: T.optional(T.string, ''),
  homeLink: T.optional(T.string, 'https://'),
  profitMode: T.optional(T.string, PROFIT_MODE.FREEMIUM),
  workingMode: T.optional(T.string, WORKING_MODE.SIDE_PROJECT),
  socialInfo: T.optional(T.array(SocialInfo), DEFAULT_SOCIAL_INFO),
  cities: T.optional(T.array(Community), []),
  // cities: T.optional(T.array(T.string), []),
  teammates: T.optional(T.array(User), []),

  // used techstacks
  activeTechCategory: T.optional(T.string, 'lang'),
  lang: T.optional(T.array(Community), []),
  framework: T.optional(T.array(Community), []),
  database: T.optional(T.array(Community), []),
  devOps: T.optional(T.array(Community), []),
  design: T.optional(T.array(Community), []),

  // teammates
  searchedUsers: T.optional(T.array(User), []),

  // sumbmit & step states
  publishing: T.optional(T.boolean, false),
  publishDone: T.optional(T.boolean, false),
  wordsCountReady: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get viewingArticle(): TWorks {
      const root = getParent(self) as TRootStore
      return root.viewingArticle as TWorks
    },
    get allowEdit(): boolean {
      const slf = self as TStore
      const { mode, accountInfo, author } = slf
      if (mode === 'publish') return true

      return accountInfo.login === author.login
    },
    get searchedUsersData(): TUser[] {
      return toJS(self.searchedUsers)
    },
    get previewData(): TWorks {
      const slf = self as TStore
      const { techCommunities } = slf
      const basic = pick(['cover', 'title', 'desc'], slf)

      const { lang, framework, database, devOps, design } = techCommunities

      const techstacks = []
        .concat(communities2Techs(lang).slice(0, 2))
        .concat(communities2Techs(framework).slice(0, 2))
        .concat(communities2Techs(database).slice(0, 2))
        .concat(communities2Techs(devOps).slice(0, 2))
        .concat(communities2Techs(design).slice(0, 2))

      return {
        id: '0',
        upvotesCount: 66,
        commentsCount: 99,
        techstacks,
        ...basic,
      }
    },

    get techstacks(): string[] {
      const slf = self as TStore
      const { techCommunities } = slf

      let techstacks = []

      keys(techCommunities).forEach((key) => {
        const tech = techCommunities[key].map((t) => t.raw)
        techstacks = techstacks.concat(tech)
      })

      return techstacks
    },

    get inputData(): TInputData {
      const slf = self as TStore
      const { socialInfo, cities, techstacks, teammates, community } = slf
      const basic = pick(
        [
          'cover',
          'title',
          'desc',
          'body',
          'homeLink',
          'profitMode',
          'workingMode',
        ],
        slf,
      )

      return {
        communityId: community.id,
        techstacks,
        socialInfo: toJS(socialInfo),
        cities: toJS(cities).map((c) => c.raw),
        teammates: toJS(teammates),
        ...basic,
      }
    },

    get socialOptions(): TSelectOption[] {
      const socialInfo = toJS(self.socialInfo)
      const selectedPlatforms = socialInfo.map((s) => s.platform)

      // @ts-ignore
      return reject((o) => includes(o.value, selectedPlatforms), SOCIAL_OPTIONS)
    },

    get techCommunities(): TTechCommunities {
      return {
        lang: toJS(self.lang),
        framework: toJS(self.framework),
        database: toJS(self.database),
        devOps: toJS(self.devOps),
        design: toJS(self.design),
      }
    },

    get isCurrentStepValid(): boolean {
      const slf = self as TStore
      const { step } = slf
      switch (step) {
        case STEP.ZERO: {
          return slf.isNameValid && slf.isLogin
        }
        case STEP.ONE: {
          return slf.isBasicInfoValid
        }
        case STEP.TWO: {
          return true // slf.isTechStackValid
        }
        case STEP.THREE: {
          return slf.isArticleValid
        }
        default: {
          return false
        }
      }
    },
    get isNameValid(): boolean {
      return !nilOrEmpty(self.title)
    },
    get isBasicInfoValid(): boolean {
      const { cover, homeLink, desc } = self

      return !nilOrEmpty(cover) && !nilOrEmpty(desc) && isURL(homeLink)
    },
    get isTechStackValid(): boolean {
      const slf = self as TStore
      const { techstacks } = slf

      return techstacks.length > 0
    },
    get isArticleValid(): boolean {
      const { wordsCountReady } = self

      return wordsCountReady
    },
    get isReady(): boolean {
      const slf = self as TStore
      const { isNameValid, isBasicInfoValid, isArticleValid } = slf

      return isNameValid && isBasicInfoValid && isArticleValid
    },
    get submitState(): TSubmitState {
      const slf = self as TStore
      const {
        isNameValid,
        isBasicInfoValid,
        isTechStackValid,
        isArticleValid,
      } = slf

      const basic = pick(['publishing', 'publishDone', 'isReady'], slf)

      const stepReady = [
        isNameValid,
        isBasicInfoValid,
        isTechStackValid,
        isArticleValid,
      ]

      return { ...basic, stepReady }
    },
  }))
  .actions((self) => ({
    setErrorMsgIfNeed(): void {
      const slf = self as TStore
      const { step, submitState, cover, homeLink, desc } = slf
      const { stepReady } = submitState

      switch (step) {
        case STEP.ONE: {
          if (stepReady[1]) return

          const toastTitle = '请完善必填项'
          let toastDesc = ''

          if (nilOrEmpty(cover)) toastDesc = toastDesc.concat('封面图片')
          if (!isURL(homeLink)) toastDesc = toastDesc.concat('、主页地址')
          if (nilOrEmpty(desc)) toastDesc = toastDesc.concat('、一句话简介')

          if (!!toastDesc) {
            toast('info', toastTitle, toastDesc)
          }
        }

        // eslint-disable-next-line no-fallthrough
        default: {
          // eslint-disable-next-line no-useless-return
          return
        }
      }
    },
    addTeammates(user: TUser): void {
      // @ts-ignore
      self.teammates = [user].concat(toJS(self.teammates))
    },
    removeTeammates(user: TUser): void {
      const teammates = toJS(self.teammates)
      // @ts-ignore
      self.teammates = reject((t) => t.login === user.login, teammates)
    },
    getSocialPrefix(platform: string): string {
      switch (platform) {
        case 'github': {
          return 'https://github.com/'
        }
        case 'twitter': {
          return 'https://twitter.com/'
        }
        case 'weibo': {
          return 'https://weibo.com/u/'
        }
        default: {
          return ''
        }
      }
    },
    cleanupEmptySocial(): TSocialInfo {
      const slf = self as TStore
      const { socialInfo, getSocialPrefix } = slf

      // @ts-ignore
      return reject(
        // @ts-ignore
        (s) => s.link.trim() === getSocialPrefix(s.platform),
        socialInfo,
      )
    },
    removeSocialInfo(platform: string): void {
      const slf = self as TStore
      const { inputData } = slf
      const { socialInfo } = inputData

      // @ts-ignore
      slf.socialInfo = reject((s) => s.platform === platform, socialInfo)
    },
    updateSocialLabel(platform: string, option: TSelectOption): void {
      const slf = self as TStore
      const { inputData } = slf
      const { socialInfo } = inputData

      const index = findIndex((s) => s.platform === platform, socialInfo)
      if (index < 0) return

      slf.socialInfo[index].platform = option.value
      slf.socialInfo[index].link = slf.getSocialPrefix(option.value)
    },

    updateSocialValue(platform: string, value: string): void {
      const slf = self as TStore
      const { inputData } = slf
      const { socialInfo } = inputData

      const index = findIndex((s) => s.platform === platform, socialInfo)
      if (index < 0) return

      slf.socialInfo[index].link = value
    },

    reset(): void {
      self.mode = 'publish'
      self.cover = null
      self.title = ''
      self.body = '{}'

      self.publishing = false
      self.publishDone = false
    },
    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof WorksEditor>
export default WorksEditor
