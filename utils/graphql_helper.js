import R from 'ramda'
import { request } from 'graphql-request'

import { GRAPHQL_ENDPOINT } from '../config'

export const asyncRes = R.curry((key, obj) => R.and(obj[key], R.has(key, obj)))
export const asyncErr = key => R.pathEq(['error'], key)

export const gqRequest = (schema, query) =>
  request(GRAPHQL_ENDPOINT, schema, query)
