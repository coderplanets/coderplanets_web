/*
 * WorksEditor store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
import { pick, reject, includes, findIndex } from 'ramda'

import type { TWorks, TSelectOption } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { nilOrEmpty } from '@/utils/validator'

import { SocialInfo } from '@/model'

import type { TInputData } from './spec'
import { STEP, PROFIT_MODE, WORKING_MODE } from './constant'

const SOCIAL_OPTIONS = [
  { value: 'github', label: 'Github' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'blog', label: 'Blog' },
  { value: 'wechat', label: '微信' },
  { value: 'weibo', label: '微博' },
  { value: '邮箱', label: 'E-mail' },
]

const WorksEditor = T.model('WorksEditor', {
  step: T.optional(
    T.enumeration([STEP.ZERO, STEP.ONE, STEP.TWO, STEP.THREE, STEP.FOUR]),
    STEP.ZERO,
  ),
  useTemplate: T.optional(T.boolean, true),

  title: T.maybeNull(T.string),
  desc: T.maybeNull(T.string), // backend TODO
  homeLink: T.optional(T.string, 'https://'),
  profitMode: T.optional(T.string, PROFIT_MODE.FREEMIUM),
  workingMode: T.optional(T.string, WORKING_MODE.SIDE_PROJECT),
  socialInfo: T.optional(T.array(SocialInfo), [
    { platform: 'github', link: 'https://github.com/' },
  ]),
  cities: T.optional(T.array(T.string), []),
})
  .views((self) => ({
    get previewData(): TWorks {
      const basic = pick(['title', 'desc'], self)

      return { id: '0', upvotesCount: 66, commentsCount: 99, ...basic }
    },
    get inputData(): TInputData {
      const basic = pick(
        ['title', 'desc', 'homeLink', 'profitMode', 'workingMode'],
        self,
      )
      const socialInfo = toJS(self.socialInfo)
      const cities = toJS(self.cities)

      return { socialInfo, cities, ...basic }
    },
    get socialOptions(): TSelectOption[] {
      const socialInfo = toJS(self.socialInfo)
      const selectedPlatforms = socialInfo.map((s) => s.platform)

      return reject((o) => includes(o.value, selectedPlatforms), SOCIAL_OPTIONS)
    },
    get isCurrentStepValid(): boolean {
      const slf = self as TStore
      const { step, title } = slf
      switch (step) {
        case STEP.ZERO: {
          return !nilOrEmpty(title)
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
