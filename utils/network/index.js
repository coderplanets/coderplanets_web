import fetch from 'isomorphic-fetch'

import { from } from 'rxjs/observable/from'

/* import { makeDebugger } from '../../utils' */
import { client, context } from './setup'

import { getThenHandler, getCatchHandler, formatGraphErrors } from './handler'

/* eslint-disable-next-line */
/* const debug = makeDebugger('Network') */

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
  from(doQuery(query, variables))

export const mutatePromise = ({ mutation, variables }) =>
  from(doMutate(mutation, variables))

export const restGetPromise = url => from(GET(url))

/*

const network = {
  query,
  mutate,
  GET,
}

export default network
*/
