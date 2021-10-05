import { from } from 'rxjs'

import { buildLog } from '../logger'
import gqClient from './gq_client'

import { getThenHandler, getCatchHandler, formatGraphErrors } from './handler'

/* eslint-disable-next-line */
const log = buildLog('Async')

const doQuery = (query, variables) => {
  return gqClient
    .query(query, variables)
    .toPromise()
    .then((res) => {
      if (res.error) return formatGraphErrors(res.error)
      return res.data
    })
    .catch((e) => {
      formatGraphErrors(e)
    })
}

const doMutate = (mutation, variables) => {
  return gqClient
    .mutation(mutation, variables)
    .toPromise()
    .then((res) => {
      if (res.error) return formatGraphErrors(res.error)
      return res.data
      // once login user has mutation to server
      // then clear all the cache store in Apollo client.
      // client.clearStore()
    })
    .catch(formatGraphErrors)
}

const GET = (url) => {
  return fetch(`${url}`).then(getThenHandler).catch(getCatchHandler)
}

export const queryPromise = ({ query, variables }) => {
  return from(doQuery(query, variables))
}

export const mutatePromise = ({ mutation, variables }) => {
  return from(doMutate(mutation, variables))
}

export const restGetPromise = (url) => from(GET(url))
