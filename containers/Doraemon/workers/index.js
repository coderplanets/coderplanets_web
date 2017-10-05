import R from 'ramda'
import { Observable } from 'rxjs/Observable'
// import fetch from 'isomorphic-fetch'

import { pl, framework, cmd } from '../suggestions'
// import { makeDebugger } from '../../../utils/debug'

// const debug = makeDebugger('L:Doraemon:worker')

const ALL_SUGGESTIONS = R.mergeAll([pl, framework, cmd])

// see https://github.com/ramda/ramda/issues/1361
const mapKeys = R.curry((fn, obj) => {
  return R.reduce(
    (acc, key) => {
      acc[fn(key)] = obj[key]
      return acc
    },
    {},
    R.keys(obj)
  )
})

// TODO not expose
export const allSuggestions = mapKeys(R.toLower, ALL_SUGGESTIONS)

const lowerStartWith = R.compose(R.startsWith, R.toLower)
const allSuggestionKeys = R.keys(allSuggestions)

const suggestionStartWith = (val, ...source) =>
  R.filter(lowerStartWith(val), source)

const stripInput = R.ifElse(R.startsWith('/'), R.slice(1, Infinity), R.identity)

const getRelatedOptions = R.compose(
  R.partialRight(suggestionStartWith, allSuggestionKeys),
  stripInput
)

const formater = name => ({
  title: name,
  desc: '帖子: 233, 用户: 344',
})

// const formatSuggestion = R.map(formater)
export const formatSuggestion = R.map(formater)

const getSuggestionPromise = query => {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = {
        prefix: query,
        data: formatSuggestion(getRelatedOptions(query)),
      }
      // console.log('WTF: ', getRelatedOptions(query))
      return resolve(result)
      // return resolve(getRelatedOptions(query))
    })
  })
}

export const getSuggestions$ = query => {
  const promise = getSuggestionPromise(query)

  return Observable.fromPromise(promise)
}

export const startWithCmdPrefix = R.anyPass([
  R.startsWith('>'),
  R.startsWith('<'),
  R.startsWith('/'),
  R.startsWith('?'),
])

export const getStartPrefix = R.ifElse(
  startWithCmdPrefix,
  R.slice(0, 1),
  R.identity
)

export const isEmptyValue = R.compose(R.isEmpty, R.trim)

const hasValueExceptPrefix = R.compose(R.lte(2), R.length)

const endWithSlash = R.endsWith('/')

export const firstLevelSuggest = R.allPass([
  startWithCmdPrefix,
  // isNotEmptyValue,
  hasValueExceptPrefix,
  endWithSlash,
])

// convert /theme/  ->  theme
export const accessPath = R.compose(R.slice(0, -1), R.slice(1, Infinity))

// ALL_SUGGESTIONS
