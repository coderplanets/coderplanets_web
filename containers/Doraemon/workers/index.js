import R from 'ramda'
import { Observable } from 'rxjs/Observable'
// import fetch from 'isomorphic-fetch'

import { pl, framework, cmd } from '../suggestions'
// import { makeDebugger } from '../../../utils/debug'

// const debug = makeDebugger('L:Doraemon:worker')

const ALL_SUGGESTIONS = R.mergeAll([pl, framework, cmd])
const lowerStartWith = R.compose(R.startsWith, R.toLower)
const LowerKeys = R.keys(ALL_SUGGESTIONS).map(R.toLower)

const suggestionStartWith = (val, ...source) =>
  R.filter(lowerStartWith(val), source)

const stripInput = R.ifElse(R.startsWith('/'), R.slice(1, Infinity), R.identity)

const getRelatedOptions = R.compose(
  R.partialRight(suggestionStartWith, LowerKeys),
  stripInput
)

const getSuggestionPromise = query => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(getRelatedOptions(query))
    })
  })
}

const formater = name => ({
  title: name,
  desc: '帖子: 233, 用户: 344',
})

const formatSuggestion = R.map(formater)

export const getSuggestions$ = query => {
  const promise = getSuggestionPromise(query)
  return Observable.fromPromise(promise).map(formatSuggestion)
}

export const startWithCmdPrefix = R.anyPass([
  R.startsWith('>'),
  R.startsWith('<'),
  R.startsWith('/'),
  R.startsWith('?'),
])

export const isEmptyValue = R.compose(R.isEmpty, R.trim)
/*
   const hasValueExceptSlash = R.compose(R.lte(2), R.length)
   const slashAndNotEmpty = R.allPass([
   R.startsWith('/'),
   isNotEmptyValue,
   hasValueExceptSlash,
   ])
 */
