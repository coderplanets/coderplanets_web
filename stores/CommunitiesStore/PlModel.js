import { types as t } from 'mobx-state-tree'

const Thread = t.model('Thread', {
  title: t.string,
})

const PlModel = t.model('PlModel', {
  title: t.string,
  desc: t.string,
  raw: t.string,
  logo: t.string,

  threads: t.optional(t.array(Thread), []),
})

export default PlModel
