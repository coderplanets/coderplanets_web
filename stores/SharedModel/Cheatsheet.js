import { types as t } from 'mobx-state-tree'
import { GithubUser } from './GithubUser'

const Cheatsheet = t.model('Cheatsheet', {
  id: t.maybeNull(t.string),
  readme: t.maybeNull(t.string),
  lastSync: t.maybeNull(t.string),
  views: t.maybeNull(t.number),
  contributors: t.optional(t.array(GithubUser), []),
})

export default Cheatsheet
