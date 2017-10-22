/*
 * provide advise to Pocket
 */
import R from 'ramda'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'

import { notEmpty } from '../../../utils/functions'

const cleanMetaInfo = R.omit(['desc', 'title', 'raw', 'parent'])

const cmdSplit = R.compose(R.split('/'), R.slice(1, Infinity))
const cmdFull = R.compose(R.filter(notEmpty), cmdSplit)
const cmdHead = R.compose(R.head, cmdSplit)
const cmdLast = R.compose(R.last, cmdFull)
const cmdInit = R.compose(R.init, cmdFull)

export const startWithSlash = R.startsWith('/')

export const startWithSpecialPrefix = R.anyPass([
  R.startsWith('?'),
  R.startsWith('>'),
  R.startsWith('<'),
])

export class Advisor {
  constructor(store) {
    this.store = store
    this.allSuggestions = store.allSuggestions
  }

  getSuggestionPath = R.curry(p => R.path(p, this.allSuggestions))
  suggestionPathInit = R.compose(cleanMetaInfo, this.getSuggestionPath, cmdInit)
  suggestionPath = R.compose(cleanMetaInfo, this.getSuggestionPath, cmdFull)

  suggestionPathThenStartsWith = R.curry(val =>
    R.pickBy(
      (_, k) => R.startsWith(cmdLast(val), k),
      this.suggestionPathInit(val)
    )
  )

  walkSuggestion = R.ifElse(
    R.endsWith('/'),
    this.suggestionPath,
    this.suggestionPathThenStartsWith
  )

  suggestionBreif = R.compose(
    R.values,
    R.map(R.pick(['title', 'desc', 'raw'])),
    this.walkSuggestion
  )

  getSuggestion = R.ifElse(
    R.compose(R.startsWith('/'), R.tail), // avoid multi /, like /////
    R.curry(() => R.identity([])),
    this.suggestionBreif
  )

  relateSuggestions = R.curry(val => {
    return {
      prefix: cmdSplit(val).length > 1 ? cmdHead(val) : '/',
      data: this.getSuggestion(val),
    }
  })

  relateSuggestions$ = q =>
    Observable.fromPromise(
      new Promise(resolve => resolve(this.relateSuggestions(q)))
    )

  specialSuggestions = R.curry(val => ({
    prefix: '/',
    data: [this.getSuggestionPath(val)],
  }))
}
