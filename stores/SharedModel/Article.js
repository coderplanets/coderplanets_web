import { types as t } from 'mobx-state-tree'

const Article = t.model('Article', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  desc: t.optional(t.string, ''),
})

export default Article
