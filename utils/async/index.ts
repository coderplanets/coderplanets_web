import { curry, and, has, pathEq } from 'ramda'

import SR71 from './sr71'

const asyncRes = curry((key, obj) => and(obj[key], has(key, obj)))
const asyncErr = (key: string): any => pathEq(['error'], key)

/*
 * a helper to easly deal with sr71$ return data/error
 * example: sub$ = sr71$.data().subscribe($solve(dataResolver, errResovler))
 */
const matchResolver = (resolveArray, data) => {
  for (let i = 0; i < resolveArray.length; i += 1) {
    if (resolveArray[i].match(data)) {
      return resolveArray[i].action(data)
    }
  }

  // eslint-disable-next-line no-console
  console.warn('unMatched resovle data: ', data)
}

const $solver = curry((dataResolver, errResolver, data) => {
  data.error
    ? matchResolver(errResolver, data)
    : matchResolver(dataResolver, data)
})

export default {
  SR71,
  asyncErr,
  asyncRes,
  $solver,
}
