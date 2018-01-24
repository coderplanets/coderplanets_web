import fetch from 'isomorphic-fetch'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/fromPromise'

import { makeDebugger } from '../functions'
import { client, context, USE_CACHE } from './setup'

import { getThenHandler, getCatchHandler, formatGraphErrors } from './handler'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

const query = query =>
  client
    .query({
      query,
      context,
    })
    .then(res => {
      if (!USE_CACHE) client.resetStore()
      return res.data
    })
    .catch(formatGraphErrors)

const mutate = (mutation, variables) =>
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

export const queryPromise = q => Observable.fromPromise(query(q))

export const mutatePromise = ({ mutation, variables }) =>
  Observable.fromPromise(mutate(mutation, variables))

export const restGetPromise = url => Observable.fromPromise(GET(url))

/*

const network = {
  query,
  mutate,
  GET,
}

export default network
*/
