import R from 'ramda'

import { Observable } from 'rxjs/Observable'

import { makeDebugger, notEmpty, ERR } from '../../utils'
import { TIMEOUT_THRESHOLD } from './setup'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

export const TimoutObservable = Observable.of({
  error: ERR.TIMEOUT,
  details: `server has no response in ${TIMEOUT_THRESHOLD} secs`,
})

export const formatGraphErrors = error => {
  const { graphQLErrors } = error
  // graphQLErrors may not catch in graph query (wrang sytax etc ...)
  // checkout this issue https://github.com/apollographql/apollo-client/issues/2810
  if (notEmpty(graphQLErrors)) {
    const details = []
    graphQLErrors.map(({ message, path, detail }) => {
      return details.push({
        detail: `${message} ${detail}`,
        path: path ? R.join(' |> ', path) : '',
      })
    })
    return { error: ERR.PARSE_CRAPHQL, details }
  }

  /* debug('maybe a network error') */
  return { error: ERR.NETWORK, details: 'checkout your server or network' }
}

export const getThenHandler = res => {
  switch (true) {
    case res.status >= 200 && res.status < 300:
      return Promise.resolve(res.text())
    case res.status === 404:
      return Promise.reject({
        error: ERR.NOT_FOUND,
        details: `${res.url}`,
      })
    default:
      debug('unhandle error: ', res)
      return Promise.reject({
        error: 10000,
        details: `${res.statusText}: unhandle`,
      })
  }
}

export const getCatchHandler = err => {
  switch (true) {
    case err.error === ERR.NOT_FOUND:
      return { error: err.error, details: err.details }
    default:
      return { error: err.error, details: err.details }
  }
}
