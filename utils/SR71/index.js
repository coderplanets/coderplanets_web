import { ApolloLink } from 'apollo-link'
import { RetryLink } from 'apollo-link-retry'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

/* import gql from 'graphql-tag' */

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import fetch from 'isomorphic-fetch'

import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'

import { makeDebugger, notEmpty } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf: error => !error,
  },
})

const graphLink = new HttpLink({ uri: 'http://localhost:4001/graphiql' })

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(
      ({ message, path, detail }) =>
        path
          ? debug(`[GraphQL error -]: ${path} ${message} ${detail}`)
          : debug(`[GraphQL error -]: ${message}`)
    )
  }
})

const link = ApolloLink.from([errorLink, retryLink, graphLink])
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const context = {
  headers: {
    special: 'Special header value',
    authorization: 'Bearer autk',
  },
}

// TODO: put it to utils
const formatGraphErrors = error => {
  const { graphQLErrors } = error

  /* debug('graphQLErrors: ', graphQLErrors) */
  if (notEmpty(graphQLErrors)) {
    let errMsg = ''
    graphQLErrors.map(
      ({ message, path, detail }) =>
        path
          ? (errMsg = `[GraphQL error]: ${path} ${message} ${detail}`)
          : (errMsg = `[GraphQL error]: ${message}`)
    )
    return errMsg
  }

  return []
}

const queryPromise = query =>
  Observable.fromPromise(
    client.query({
      query,
      context,
    })
  ).catch(error => Observable.of(`${formatGraphErrors(error)}`))

const mutationPromise = ({ mutation, variables }) =>
  Observable.fromPromise(
    client.mutate({
      mutation,
      variables,
      context,
    })
  ).catch(error => Observable.of(`${formatGraphErrors(error)}`))

// https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master/go.md
const CheatsheetCDN =
  'https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master'

const getReposPromise = which =>
  fetch(`${CheatsheetCDN}/${which}.md`).then(res => res.text())

const getData = which =>
  Observable.fromPromise(getReposPromise(which)).catch(error =>
    Observable.of(`Error: ${error}`)
  )

class SR71 {
  constructor() {
    this.input$ = new Subject()
    this.query$ = new Subject()
    this.mutation$ = new Subject()

    this.doQuery$ = this.query$.switchMap(q => queryPromise(q))
    this.doMutation$ = this.mutation$.switchMap(q => mutationPromise(q))

    this.network$ = this.doQuery$.merge(this.doMutation$)
    // this.input$.do(val => debug('input: ', val))
  }

  getCheatsheet(which) {
    // debug('inputForOtherUse: ', this.store.inputForOtherUse)
    this.input$.next(which)
  }

  cheatsheet() {
    return this.input$
      .switchMap(q => getData(q))
      .catch(error => Observable.of(`Error: ${error}`))
  }

  /* getQuery() { */
  /* return this.query$.switchMap(q => queryPromise(q)) */
  /* } */

  query(gql) {
    this.query$.next(gql)
  }

  mutation(mutation, variables) {
    this.mutation$.next({ mutation, variables })
  }

  network() {
    return this.network$
  }
}

const SR71$ = new SR71()

export default SR71$
