import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const Job = T.model('Job', {
  ...articleFields(),
  company: T.optional(T.string, ''),
  companyLink: T.maybeNull(T.string),
})

export const PagedJobs = T.model('PagedJobs', {
  entries: T.optional(T.array(Job), []),
  ...pagiFields(),
})
