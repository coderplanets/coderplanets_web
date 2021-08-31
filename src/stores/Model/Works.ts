import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const Works = T.model('Works', {
  ...articleFields(),
  favoritedCategoryId: T.maybeNull(T.string),
})

export const PagedWorks = T.model('PagedWorks', {
  entries: T.optional(T.array(Works), []),
  ...pagiFields(),
})
