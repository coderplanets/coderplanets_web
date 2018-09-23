import fetch from 'isomorphic-fetch'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/of'

/* import { makeDebugger } from '../../utils' */
import { client, context } from './setup'

import { getThenHandler, getCatchHandler, formatGraphErrors } from './handler'

/* eslint-disable no-unused-vars */
/* const debug = makeDebugger('Network') */
/* eslint-enable no-unused-vars */

const doQuery = (query, variables) =>
  client
    .query({
      query,
      variables,
      context,
    })
    .then(res => {
      if (res.errors) return formatGraphErrors(res.errors)
      return res.data
    })
    .catch(formatGraphErrors)

const doMutate = (mutation, variables) =>
  client
    .mutate({
      mutation,
      variables,
      context,
    })
    .then(res => res.data)
    .catch(formatGraphErrors)

const GET = url =>
  fetch(`${url}`)
    .then(getThenHandler)
    .catch(getCatchHandler)

export const queryPromise = ({ query, variables }) =>
  Observable.fromPromise(doQuery(query, variables))

export const mutatePromise = ({ mutation, variables }) =>
  Observable.fromPromise(doMutate(mutation, variables))

export const restGetPromise = url => Observable.fromPromise(GET(url))

/*

const network = {
  query,
  mutate,
  GET,
}

export default network
*/
