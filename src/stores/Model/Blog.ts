import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const Blog = T.model('Blog', {
  ...articleFields(),
  updated: T.maybeNull(T.string),
  published: T.maybeNull(T.string),
  rss: T.optional(T.string, ''),
})

export const PagedBlogs = T.model('PagedBlogs', {
  entries: T.optional(T.array(Blog), []),
  ...pagiFields(),
})

export const BlogRSSInfo = T.model('BlogRSSInfo', {
  title: T.optional(T.string, ''),
  subtitle: T.optional(T.string, ''),
  link: T.optional(T.string, ''),
  updated: T.optional(T.string, ''),
  historyFeed: T.optional(T.array(Blog), []),
})
