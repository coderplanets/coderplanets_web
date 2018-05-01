import { types as t } from 'mobx-state-tree'

const Article = t.model('Article', {
  id: t.maybe(t.string),
  title: t.maybe(t.string),
  desc: t.optional(t.string, ''),
})

export default Article
