import { TimeoutError } from 'promise-timeout'
import { ERR } from '../constants'

import { searchRepoPromise, repoTransForm } from './repo_search'

const githubApi = {
  searchRepo: (owner, name) => searchRepoPromise(owner, name),
  transFormRepo: values => repoTransForm(values),

  parseError: e => {
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
