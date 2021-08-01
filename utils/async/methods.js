import { from } from 'rxjs'

import { buildLog } from '../logger'
import { client } from './setup2'

import { getThenHandler, getCatchHandler, formatGraphErrors } from './handler'

/* eslint-disable-next-line */
const log = buildLog('Async')

const doQuery = (query, variables) => {
  console.log('do query: ', query)

  return client
    .query(query, variables)
    .toPromise()
    .then((res) => {
      if (res.errors) return formatGraphErrors(res.errors)
      return res.data
    })
    .catch(formatGraphErrors)
}

const doMutate = (mutation, variables) => {
  return client
    .mutate(mutation, variables)
    .toPromise()
    .then((res) => {
      // once login user has mutation to server
      // then clear all the cache store in Apollo client.
      // client.clearStore()
      return res.data
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
