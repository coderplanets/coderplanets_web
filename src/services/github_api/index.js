import { TimeoutError } from 'promise-timeout'

import { ERR } from '@constant'

import { searchRepoPromise, transformRepo } from './repo_search'
import { searchUserPromise, ransformUser } from './user_search'
import { searchWikiPromise } from './wiki_search'
import { searchCheatsheeetPromise } from './cheatsheet_search'

const githubAPI = {
  // search repo
  searchRepo: (owner, name) => searchRepoPromise(owner, name),
  transformRepo: res => transformRepo(res),
  // search user
  searchUser: login => searchUserPromise(login),
  transformUser: res => ransformUser(res),
  // search wiki
  searchWiki: raw => searchWikiPromise(raw),
  searchCheatsheet: raw => searchCheatsheeetPromise(raw),

  parseError: e => {
    if (e instanceof TimeoutError) return ERR.TIMEOUT
    if (!e || !e.response) return ERR.UNKOWN
    switch (e.response.status) {
      case 200:
        return ERR.NOT_FOUND

      case 401:
        return ERR.AUTH

      default:
        return ERR.UNKOWN
    }
  },
}

export default githubAPI
