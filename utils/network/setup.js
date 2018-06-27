import { ApolloLink } from 'apollo-link'
import { RetryLink } from 'apollo-link-retry'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

/* import { onError } from 'apollo-link-error' */

import { makeDebugger, BStore } from '..'
import { GRAPHQL_ENDPOINT } from '../../config'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

const graphLink = new HttpLink({ uri: GRAPHQL_ENDPOINT, fetch })

export const TIMEOUT_THRESHOLD = 15000 // 5 sec
export const GRAPHQL_TIMEOUT = 15000
export const MUTIATION_TIMEOUT = 15000
export const QUERY_TIMEOUT = 15000

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 3,
    /* retryIf: error => !!error, */
  },
})

/* const errorLink = onError(({ operation, graphQLErrors }) => { */
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    /* graphQLErrors.map(({ message, path, detail }) => */
    debug('[GraphQL error happend]')
    /*
       graphQLErrors.map(({ message }) =>
       debug(`[error detail]: ${operation.operationName} ${message}`)
       )
     */
  }
  // if (networkError) {
  // debug(`[Network error]: ${networkError}`)
  // }
})

let token = ''
const user = BStore.get('user')

if (user) {
  token = BStore.get('user').token || ''
}

/* const token = */
/* 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtYXN0YW5pX3NlcnZlciIsImV4cCI6MTUyNTI2Nzc3NCwiaWF0IjoxNTI0MDU4MTc0LCJpc3MiOiJtYXN0YW5pX3NlcnZlciIsImp0aSI6IjdiNjdhYzJmLTIwMjYtNDMzNy04MjcyLTVmYjY0ZDMxMGVjNyIsIm5iZiI6MTUyNDA1ODE3Mywic3ViIjoiMTEyIiwidHlwIjoiYWNjZXNzIn0.mm0GuOhzs8UYikPZGnIKQpnGYJQiwzEtCx2xeRn1qcT3sOT6Yg3GvM303OxDoGHnrNf72HSjwVxiCO6mXkq8mg' */

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
// single-instance-pattern
// see: https://k94n.com/es6-modules-single-instance-pattern
export const client = new ApolloClient({
  link,
  /* cache: new InMemoryCache(), */
  cache: new InMemoryCache(),
  connectToDevTools: true,
  /* shouldBatch: false, */
  defaultOptions,
})
