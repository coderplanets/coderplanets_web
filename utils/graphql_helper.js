import R from 'ramda'

export const asyncRes = R.curry((key, obj) => R.and(obj[key], R.has(key, obj)))
export const asyncErr = key => R.pathEq(['error'], key)
