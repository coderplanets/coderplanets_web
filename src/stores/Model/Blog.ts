import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const Blog = T.model('Blog', {
  ...articleFields(),
})

export const PagedBlogs = T.model('PagedBlogs', {
  entries: T.optional(T.array(Blog), []),
  ...pagiFields(),
})
