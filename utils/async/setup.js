import { createClient, defaultExchanges } from 'urql/core'

/* import { onError } from 'apollo-link-error' */

import { GRAPHQL_ENDPOINT } from '@/config'

import { buildLog } from '../logger'
import BStore from '../bstore'

/* eslint-disable-next-line */
const log = buildLog('Async')

export const TIMEOUT_THRESHOLD = 10000 // 10 sec
export const GRAPHQL_TIMEOUT = 10000 // 10 sec
export const MUTIATION_TIMEOUT = 10000 // 10 sec
export const QUERY_TIMEOUT = 10000 // 10 sec

const token = BStore.get('token') || ''
export const context = {
  headers: {
    special: 'Special header value',
    authorization: `Bearer ${token}`,
  },
}

// see setup https://formidable.com/open-source/urql/docs/basics/core/
export const client = createClient({
  url: GRAPHQL_ENDPOINT,
  fetchOptions: () => {
    return {
      headers: {
        special: 'Special header value',
        authorization: `Bearer ${token}`,
      },
    }
  },
  // the default:
  exchanges: defaultExchanges,
  // the same as:
  // exchanges: [dedupExchange, cacheExchange, fetchExchange],
})
