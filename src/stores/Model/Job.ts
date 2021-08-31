import { types as T } from 'mobx-state-tree'

import { articleFields, pagiFields } from './helper'

export const Job = T.model('Job', {
  ...articleFields(),
  company: T.optional(T.string, ''),
  companyLink: T.maybeNull(T.string),

  // viewerHasUpvoted: T.optional(T.boolean, false),
  favoritedCategoryId: T.maybeNull(T.string),
})

export const PagedJobs = T.model('PagedJobs', {
  entries: T.optional(T.array(Job), []),
  ...pagiFields(),
})
