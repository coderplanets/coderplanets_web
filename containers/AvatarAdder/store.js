/*
 * AvatarAdder store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { GithubUser } from '../../stores/SharedModel'
import { markStates, makeDebugger, stripMobx } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AvatarAdder')
/* eslint-enable no-unused-vars */

const fakeUser = {
  avatar: 'https://avatars3.githubusercontent.com/u/7498434?s=40&v=4',
  htmlUrl: 'https://avatars3.githubusercontent.com/u/7498434?s=40&v=4',
  bio:
    "everyday is the opportunity you don't get back, so live life to the fullest",
  nickname: 'nickname',
  location: 'location',
  company: 'company info',
}

const AvatarAdder = t
  .model('AvatarAdder', {
    githubUser: t.optional(GithubUser, fakeUser),
    searchValue: t.optional(t.string, ''),
    searching: t.optional(t.boolean, false),
    error: t.optional(t.boolean, false),
    /* ERR_TYPE:  */
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get githubUserData() {
      return stripMobx(self.githubUser)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AvatarAdder
