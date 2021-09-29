import { join, isEmpty } from 'ramda'

/* import { Observable } from 'rxjs/Observable' */
import { of } from 'rxjs'

import { ERR } from '@/constant'

import { TIMEOUT_THRESHOLD } from './config'
import { buildLog } from '../logger'

/* eslint-disable-next-line */
const log = buildLog('Async')

export const TimeoutObservable = of({
  error: ERR.TIMEOUT,
  details: `server has no-response in ${
    Math.round((TIMEOUT_THRESHOLD / 1000) * 100) / 100
  } secs`,
})

// refator later
const formatDetail = (errors) => {
  const details = []
  // NOTE:  eadge case, fix latter
  if (!errors) return {}

  errors.map(({ originalError }) => {
    const { message, path, code } = originalError

    return details.push({
      message,
      path: path ? join(' |> ', path) : '',
      code,
    })
  })
  return details
}

export const formatGraphErrors = (error) => {
  if (Array.isArray(error)) {
    return { error: ERR.GRAPHQL, details: formatDetail(error) }
  }

  const { graphQLErrors } = error
  if (!isEmpty(graphQLErrors)) {
    // graphQLErrors may not catch in graph query (wrang sytax etc ...)
    // checkout this issue https://github.com/apollographql/apollo-client/issues/2810
    return { error: ERR.GRAPHQL, details: formatDetail(graphQLErrors) }
  }
  return { error: ERR.NETWORK, details: 'checkout your server or network' }
}

export const getThenHandler = (res) => {
  switch (true) {
    case res.status >= 200 && res.status < 300:
      return Promise.resolve(res.text())
    case res.status === 404:
      return Promise.reject({
        error: ERR.NOT_FOUND,
        details: `${res.url}`,
      })
    default:
      log('unhandle error: ', res)
      return Promise.reject({
        error: 10000,
        details: `${res.statusText}: unhandle`,
      })
  }
}

export const getCatchHandler = (err) => {
  /*
  if (!navigator.onLine) {
    return { error: 'NET_OFFLINE', details: 'NET_OFFLINE' }
  }
  */

  switch (true) {
    case err.error === ERR.NOT_FOUND:
      return { error: err.error, details: err.details }
    default:
      return { error: err.error, details: err.details }
  }
}
