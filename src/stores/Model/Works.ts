import { types as T } from 'mobx-state-tree'

import { SimpleUser } from './User'

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
  category: T.maybeNull(T.string),
})

export const City = T.model('City', {
  title: T.optional(T.string, ''),
  logo: T.optional(T.string, ''),
  desc: T.optional(T.string, ''),
  link: T.optional(T.string, ''),
})

export const Works = T.model('Works', {
  ...articleFields(),

  desc: T.maybeNull(T.string),
  cover: T.maybeNull(T.string),
  homeLink: T.maybeNull(T.string),
  profitMode: T.maybeNull(T.string),
  workingMode: T.maybeNull(T.string),
  teammates: T.optional(T.array(SimpleUser), []),
  socialInfo: T.optional(T.array(SocialInfo), []),
  techstacks: T.optional(T.array(TechStack), []),
  cities: T.optional(T.array(City), []),
})

export const PagedWorks = T.model('PagedWorks', {
  entries: T.optional(T.array(Works), []),
  ...pagiFields(),
})
