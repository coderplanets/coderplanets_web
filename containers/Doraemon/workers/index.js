import R from 'ramda'
import { Observable } from 'rxjs/Observable'
// import fetch from 'isomorphic-fetch'

import { pl, framework, cmd } from '../suggestions'

// import { makeDebugger } from '../../../utils/debug'

// const debug = makeDebugger('L:Doraemon:worker')

const ALL_SUGGESTIONS = R.mergeAll([pl, framework, cmd])

const ALL_SUGGESTIONS2 = R.mergeAll([pl, cmd])

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
export const allSuggestions2 = mapKeys(R.toLower, ALL_SUGGESTIONS2)

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

// big fdrefactor start
export const startWithSlash = R.startsWith('/')

/*
R.anyPass([
  R.startsWith('>'),
  R.startsWith('<'),
  R.startsWith('/'),
  R.startsWith('?'),
])
 */

const notEmpty = R.compose(R.not, R.isEmpty)

const splitInput = R.compose(R.split('/'), R.slice(1, Infinity))

const cmdInPathFormat = R.compose(R.filter(notEmpty), splitInput)

const cmdLast = R.compose(R.last, cmdInPathFormat)

const getSuggestionPath = R.curry(p => R.path(p, allSuggestions2))

const cleanMetaInfo = R.omit(['desc', 'title', 'raw'])

const suggestionPathInit = R.compose(
  cleanMetaInfo,
  getSuggestionPath,
  R.init,
  cmdInPathFormat
)

const cmdStartsWith = val =>
  R.pickBy((_, k) => R.startsWith(cmdLast(val), k), suggestionPathInit(val))

const suggestionPath = R.compose(
  cleanMetaInfo,
  getSuggestionPath,
  cmdInPathFormat
)
const suggestionPathThenStartsWith = R.curry(cmdStartsWith)

// const endWithCmdOpt = R.anyPass([R.endsWith('/'), R.endsWith('>')])
export const giveSuggestion = R.ifElse(
  // endWithCmdOpt,
  R.endsWith('/'),
  suggestionPath,
  suggestionPathThenStartsWith
)

const suggestionMetas = R.compose(
  R.map(R.pick(['title', 'desc', 'raw'])),
  giveSuggestion
)

const getPrefix = R.compose(R.head, splitInput)

export const wrappedSuggestion = R.curry(val => ({
  prefix: splitInput(val).length > 1 ? getPrefix(val) : '/',
  data: suggestionMetas(val),
}))

const transfromSuggestion = R.evolve({
  prefix: R.identity,
  data: R.values,
})

export const relateSuggestions = R.compose(
  transfromSuggestion,
  wrappedSuggestion
)
