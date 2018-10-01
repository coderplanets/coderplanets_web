import { TimeoutError } from 'promise-timeout'
import { ERR } from '../constants'

import { searchRepoPromise, transformRepo } from './repo_search'
import { searchUserPromise, ransformUser } from './user_search'

const githubApi = {
  searchRepo: (owner, name) => searchRepoPromise(owner, name),
  transformRepo: res => transformRepo(res),

  searchUser: login => searchUserPromise(login),
  transformUser: res => ransformUser(res),

  parseError: e => {
    // console.log('parseError e: ', e)
    if (e instanceof TimeoutError) return ERR.TIMEOUT
    if (!e || !e.response) return ERR.UNKOWN
    switch (e.response.status) {
      case 200: {
        return ERR.NOT_FOUND
      }
      case 401: {
        return ERR.AUTH
      }
      default: {
        return ERR.UNKOWN
      }
    }
  },
}

export default githubApi
