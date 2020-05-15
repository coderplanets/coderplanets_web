import { types as T } from 'mobx-state-tree'
import { GithubUser } from './GithubUser'

const Cheatsheet = T.model('Cheatsheet', {
  id: T.maybeNull(T.string),
  readme: T.maybeNull(T.string),
  lastSync: T.maybeNull(T.string),
  views: T.maybeNull(T.number),
  contributors: T.optional(T.array(GithubUser), []),
})

export default Cheatsheet
