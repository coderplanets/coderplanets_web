import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const SocialInfo = T.model('SocialInfo', {
  platform: T.optional(T.string, ''),
  link: T.optional(T.string, ''),
})

export const TechStack = T.model('TechStack', {
  raw: T.optional(T.string, ''),
  title: T.optional(T.string, ''),
  logo: T.optional(T.string, ''),
  category: T.optional(T.string, ''),
})

export const Works = T.model('Works', {
  ...articleFields(),

  desc: T.maybeNull(T.string),
  homeLink: T.maybeNull(T.string),
  profitMode: T.optional(T.string, ''),
  workingMode: T.optional(T.string, ''),
  socialInfo: T.optional(T.array(SocialInfo), []),
  techstacks: T.optional(T.array(TechStack), []),
})

export const PagedWorks = T.model('PagedWorks', {
  entries: T.optional(T.array(Works), []),
  ...pagiFields(),
})
