import { timeout } from 'promise-timeout'
import fetch from 'isomorphic-fetch'

import { makeDebugger } from '../functions'
import {
  client,
  formatGraphErrors,
  context,
  MUTIATION_TIMEOUT,
  QUERY_TIMEOUT,
} from './setup'

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
    .then(res => res.data)
    .catch(err => formatGraphErrors(err))

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
    .catch(err => formatGraphErrors(err))

// TODO: add timeout feature
const GET = url =>
  fetch(`${url}`)
    .then(res => {
      debug('raw res: ', res)
      switch (true) {
        case res.status >= 200 && res.status < 300:
          return Promise.resolve(res.text())
        case res.status === 404:
          return Promise.reject(404)
        default:
          debug('unhandle error: ', res)
          return Promise.reject(new Error(res.status))
      }
    })
    .catch(err => {
      switch (err) {
        case 404:
          return { error: err, details: 'not found' }
        default:
          return { error: err, details: err }
      }
    })

const network = { query, mutate, GET }

export default network
