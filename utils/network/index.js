import { timeout } from 'promise-timeout'
import fetch from 'isomorphic-fetch'

import { makeDebugger } from '../functions'
import {
  client,
  context,
  MUTIATION_TIMEOUT,
  QUERY_TIMEOUT,
  USE_CACHE,
} from './setup'

import { getThenHandler, getCatchHandler, formatGraphErrors } from './handler'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

const query = query =>
  timeout(
    client.query({
      query,
      context,
    }),
    QUERY_TIMEOUT
  )
    .then(res => {
      if (!USE_CACHE) client.resetStore()
      return res.data
    })
    .catch(formatGraphErrors)

const mutate = (mutation, variables) =>
  timeout(
    client.mutate({
      mutation,
      variables,
      context,
    }),
    MUTIATION_TIMEOUT
  )
    .then(res => res.data)
    .catch(formatGraphErrors)

// TODO: add timeout feature
const GET = url =>
  timeout(fetch(`${url}`), MUTIATION_TIMEOUT)
    .then(getThenHandler)
    .catch(getCatchHandler)

const network = { query, mutate, GET }

export default network
