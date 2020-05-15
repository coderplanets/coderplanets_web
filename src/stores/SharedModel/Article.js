import { types as T } from 'mobx-state-tree'

const Article = T.model('Article', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  desc: T.optional(T.string, ''),
})

export default Article
