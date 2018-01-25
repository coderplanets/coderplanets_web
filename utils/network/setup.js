import { ApolloLink } from 'apollo-link'
import { RetryLink } from 'apollo-link-retry'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'
import { onError } from 'apollo-link-error'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

export const USE_CACHE = false

const graphLink = new HttpLink({ uri: 'http://localhost:4001/graphiql', fetch })

export const TIMEOUT_THRESHOLD = 5000 // 5 sec
export const GRAPHQL_TIMEOUT = 5000
export const MUTIATION_TIMEOUT = 5000
export const QUERY_TIMEOUT = 5000

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

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(
      ({ message, path, detail }) =>
        path
          ? debug(`[GraphQL error]: ${path} ${message} ${detail}`)
          : debug(`[GraphQL error]: ${message}`)
    )
  }
  /*
  if (networkError) {
    debug(`[Network error]: ${networkError}`)
  }
  */
})

export const context = {
  headers: {
    special: 'Special header value',
    authorization: 'Bearer autk',
  },
}

const link = ApolloLink.from([errorLink, retryLink, graphLink])
// single-instance-pattern
// see: https://k94n.com/es6-modules-single-instance-pattern
export const client = new ApolloClient({
  link,
  /* cache: new InMemoryCache(), */
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
