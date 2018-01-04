import { ApolloLink } from 'apollo-link'
import { RetryLink } from 'apollo-link-retry'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

import { TimeoutError } from 'promise-timeout'

import { makeDebugger, notEmpty } from '../functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

const graphLink = new HttpLink({ uri: 'http://localhost:4001/graphiql' })

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

const link = ApolloLink.from([errorLink, retryLink, graphLink])

export const formatGraphErrors = error => {
  if (error instanceof TimeoutError) {
    return {
      error: 'TimeoutError',
      message: `TimeoutError in ${MUTIATION_TIMEOUT / 1000} secs`,
    }
  }
  const { graphQLErrors } = error
  // graphQLErrors may not catch in graph query (wrang sytax etc ...)
  // checkout this issue https://github.com/apollographql/apollo-client/issues/2810
  if (notEmpty(graphQLErrors)) {
    let details = ''
    graphQLErrors.map(
      ({ message, path, detail }) =>
        path
          ? (details = `${path} ${message} ${detail}`)
          : (details = `${message}`)
    )
    return { error: 'GraphQLError', details }
  }

  /* debug('maybe a network error') */
  return { error: 'NetworkError', details: 'checkout your server or network' }
}

export const context = {
  headers: {
    special: 'Special header value',
    authorization: 'Bearer autk',
  },
}

// single-instance-pattern
// see: https://k94n.com/es6-modules-single-instance-pattern
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
