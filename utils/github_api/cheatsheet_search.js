import { timeout } from 'promise-timeout'
import { TIMEOUT_SEC, contentEndpoint } from './config'

import { restClient } from './client'

export const searchCheatsheeetPromise = raw => {
  // /javascript_wiki.md
  const api = `${contentEndpoint}/cps_cheatsheets/master/${raw}.md`

  return timeout(restClient(`${api}`), TIMEOUT_SEC)
}

export const holder = 1
