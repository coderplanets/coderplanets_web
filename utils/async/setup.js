import { ApolloLink } from 'apollo-link'
import { RetryLink } from 'apollo-link-retry'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

/* import { onError } from 'apollo-link-error' */

import { GRAPHQL_ENDPOINT } from '@config'
import { ERR } from '@constant'

import { errRescue } from '../functions'
import { buildLog } from '../logger'
import BStore from '../bstore'

/* eslint-disable-next-line */
const log = buildLog('Async')

const graphLink = new HttpLink({ uri: GRAPHQL_ENDPOINT, fetch })

/* // for log
   export const TIMEOUT_THRESHOLD = 10 // 10 sec
   export const GRAPHQL_TIMEOUT = 10 // 10 sec
   export const MUTIATION_TIMEOUT = 10 // 10 sec
   export const QUERY_TIMEOUT = 10 // 10 sec
 */

export const TIMEOUT_THRESHOLD = 10000 // 10 sec
export const GRAPHQL_TIMEOUT = 10000 // 10 sec
export const MUTIATION_TIMEOUT = 10000 // 10 sec
export const QUERY_TIMEOUT = 10000 // 10 sec

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 1,
    /* retryIf: error => !!error, */
  },
})

/* const errorLink = onError(({ operation, graphQLErrors }) => { */
const errorLink = onError(({ operation: { operationName }, graphQLErrors }) =>
  errRescue({
    type: ERR.GRAPHQL,
    operation: operationName,
    details: graphQLErrors,
  })
)

const token = BStore.get('token') || ''
export const context = {
  headers: {
    special: 'Special header value',
    authorization: `Bearer ${token}`,
  },
}

/* const link = ApolloLink.from([errorLink, retryLink, graphLink]) */
const link = ApolloLink.from([retryLink, errorLink, graphLink])
/* const link = ApolloLink.from([retryLink, graphLink]) */

// disable cache in apollo-client
// sse https://www.apollographql.com/docs/react/essentials/queries.html#graphql-config-options-fetchPolicy
// see https://stackoverflow.com/questions/47879016/how-to-disable-cache-in-apollo-link-or-apollo-client
/*
   const defaultOptions = {
   watchQuery: {
   fetchPolicy: 'network-only',
   errorPolicy: 'ignore',
   },
   query: {
   fetchPolicy: 'network-only',
   errorPolicy: 'all',
   },
   }
 */

// single-instance-pattern
// see: https://k94n.com/es6-modules-single-instance-pattern
export const client = new ApolloClient({
  link,
  /* cache: new InMemoryCache(), */
  cache: new InMemoryCache(),
  connectToDevTools: true,
  /* shouldBatch: false, */
  // defaultOptions,
})
