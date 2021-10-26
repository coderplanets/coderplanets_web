import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const SocialInfo = T.model('SocialInfo', {
  platform: T.optional(T.string, ''),
  link: T.optional(T.string, ''),
})

export const Works = T.model('Works', {
  ...articleFields(),

  homeLink: T.optional(T.string, ''),
  profitMode: T.optional(T.string, ''),
  workingMode: T.optional(T.string, ''),
  socialInfo: T.optional(T.array(SocialInfo), []),
})

export const PagedWorks = T.model('PagedWorks', {
  entries: T.optional(T.array(Works), []),
  ...pagiFields(),
})
