import R from 'ramda'

export const gqRes = R.curry((key, obj) => R.and(obj[key], R.has(key, obj)))
export const gqErr = key => R.pathEq(['error'], key)
