import R from 'ramda'
import { request } from 'graphql-request'

import { GRAPHQL_ENDPOINT } from '../config'

export const asyncRes = R.curry((key, obj) => R.and(obj[key], R.has(key, obj)))
export const asyncErr = key => R.pathEq(['error'], key)

export const gqRequest = (schema, query) =>
  request(GRAPHQL_ENDPOINT, schema, query)

// NOTE: this is a simple hack for send parallel requests in rxjs
// in rxjs, if you want to send parallel request you should use complex method
// like forkJoin .. which need to refactor whole sr71 part
// currently the simple later is fine
export const later = (func, time = 200) => setTimeout(func, time)
