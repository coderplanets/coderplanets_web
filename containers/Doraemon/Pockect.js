import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromPromise'

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/merge'

import R from 'ramda'

import { makeDebugger } from '../../utils/debug'
import { pl, framework, cmd } from './suggestions'
// import fetch from 'isomorphic-fetch'

const debug = makeDebugger('L:Doraemon:pocket')

const isEmptyValue = R.compose(R.isEmpty, R.trim)
// const isNotEmptyValue = R.complement(isEmptyValue)

// const startWithSlash = R.allPass([R.startsWith('/'), isNotEmptyValue])

const startWithCmdOpt = R.anyPass([
  R.startsWith('>'),
  R.startsWith('<'),
  R.startsWith('/'),
  R.startsWith('?'),
])

/*
const hasValueExceptSlash = R.compose(R.lte(2), R.length)
const slashAndNotEmpty = R.allPass([
  R.startsWith('/'),
  isNotEmptyValue,
  hasValueExceptSlash,
])
 */

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

const getSuggestions$ = query => {
  const promise = getSuggestionPromise(query)
  return Observable.fromPromise(promise)
}

export default class Pockect {
  constructor() {
    this.input$ = new Subject()
    this.stop$ = new Subject()

    this.fuck$ = this.input$.merge(this.stop$)
    //  enter cmd

    this.cmdInput$ = this.input$
      .debounceTime(200)
      .filter(startWithCmdOpt)
      .distinctUntilChanged()
  }

  search(term) {
    debug('Doraemons search: ', term)
    this.input$.next(term)
  }

  stop() {
    console.log('stop ...')
    this.stop$.next()
  }

  suggestion() {
    return this.cmdInput$
      .switchMap(q => getSuggestions$(q).takeUntil(this.stop$))
      .catch(e => {
        debug(e)
        return Observable.of([])
      })
  }

  emptyInput() {
    return this.input$.filter(isEmptyValue)
  }

  /* doCmd(store) { */
  /* */
  /* } */
}
