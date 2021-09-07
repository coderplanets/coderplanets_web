import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const Radar = T.model('Radar', {
  ...articleFields(),
})

export const PagedRadars = T.model('PagedRadars', {
  entries: T.optional(T.array(Radar), []),
  ...pagiFields(),
})
