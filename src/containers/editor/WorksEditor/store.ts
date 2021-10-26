/*
 * WorksEditor store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
import { pick, reject, includes, findIndex } from 'ramda'

import type { TWorks, TSelectOption } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { nilOrEmpty } from '@/utils/validator'

import { STEP } from './constant'
import { SocialInfo } from '@/model'

import type { TInputData } from './spec'

const SOCIAL_OPTIONS = [
  { value: 'github', label: 'Github' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'blog', label: 'Blog' },
  { value: 'wechat', label: '微信' },
  { value: 'weibo', label: '微博' },
  { value: '邮箱', label: 'E-mail' },
]

const WorksItem = T.model('WorksItem', {
  title: T.maybeNull(T.string),
  desc: T.maybeNull(T.string),
  isOSS: T.optional(T.boolean, false),
  ossAddr: T.maybeNull(T.string),
})

const WorksEditor = T.model('WorksEditor', {
  works: T.optional(WorksItem, {}),
  step: T.optional(
    T.enumeration([STEP.ZERO, STEP.ONE, STEP.TWO, STEP.THREE, STEP.FOUR]),
    STEP.ZERO,
  ),
  useTemplate: T.optional(T.boolean, true),

  homeLink: T.optional(T.string, ''),
  profitMode: T.optional(T.string, ''),
  workingMode: T.optional(T.string, ''),
  socialInfo: T.optional(T.array(SocialInfo), [
    { platform: 'github', link: 'https://github.com/' },
  ]),
})
  .views((self) => ({
    get worksData(): TWorks {
      return toJS(self.works)
    },
    get inputData(): TInputData {
      const basic = pick(['homeLink', 'profitMode', 'workingMode'], self)
      const socialInfo = toJS(self.socialInfo)

      return { socialInfo, ...basic }
    },
    get socialOptions(): TSelectOption[] {
      const socialInfo = toJS(self.socialInfo)
      const selectedPlatforms = socialInfo.map((s) => s.platform)

      return reject((o) => includes(o.value, selectedPlatforms), SOCIAL_OPTIONS)
    },
    get isCurrentStepValid(): boolean {
      const slf = self as TStore
      const { step, worksData } = slf
      switch (step) {
        case STEP.ZERO: {
          return !nilOrEmpty(worksData.title)
        }

        default: {
          return true
        }
      }
    },
  }))
  .actions((self) => ({
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
    removeSocialInfo(platform: string): void {
      const slf = self as TStore
      const { inputData } = slf
      const { socialInfo } = inputData

      // @ts-ignore
      slf.socialInfo = reject((s) => s.platform === platform, socialInfo)
    },
    updateSocialInfo(platform: string, option: TSelectOption): void {
      const slf = self as TStore
      const { inputData } = slf
      const { socialInfo } = inputData

      const index = findIndex((s) => s.platform === platform, socialInfo)
      if (index < 0) return

      slf.socialInfo[index].platform = option.value
      slf.socialInfo[index].link = slf.getSocialPrefix(option.value)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof WorksEditor>
export default WorksEditor
