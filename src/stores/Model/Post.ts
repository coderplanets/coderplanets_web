import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const Post = T.model('Post', {
  ...articleFields(),
  isQuestion: T.maybeNull(T.boolean),
})

export const PagedPosts = T.model('PagedPosts', {
  entries: T.optional(T.array(Post), []),
  ...pagiFields(),
})
