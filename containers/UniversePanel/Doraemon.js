import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromPromise'

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'

import R from 'ramda'

import { langs } from './suggestions'
// import fetch from 'isomorphic-fetch'

const isEmptyValue = R.compose(R.isEmpty, R.trim)
const isNotEmptyValue = R.complement(isEmptyValue)

const hasValueExceptSlash = R.compose(R.lte(2), R.length)
const slashAndNotEmpty = R.allPass([
  R.startsWith('/'),
  isNotEmptyValue,
  hasValueExceptSlash,
])

const lowerStartWith = R.compose(R.startsWith, R.toLower)
const LowerKeys = R.keys(langs).map(R.toLower)

const startWithFilter = (val, ...source) =>
  R.filter(lowerStartWith(val), source)

const getRelatedOptions = R.compose(
  R.partialRight(startWithFilter, LowerKeys),
  R.slice(1, Infinity)
)

export default class Doraemon {
  constructor() {
    this.input$ = new Subject()
    //     this.doSearch = R.curry(this.githubQuery)
  }

  search(term) {
    console.log('Doraemons search: ', term)
    this.input$.next(term)
  }

  get() {
    return (
      this.input$
        .debounceTime(200)
        .filter(slashAndNotEmpty)
        //       .do(value => console.log('after:', value))
        .distinctUntilChanged()
        .map(getRelatedOptions)
        .do(x => console.log('after:', x))
        .catch(error => {
          console.error(error)
          return Observable.of([])
        })
    )
  }

  emptyInput() {
    return this.input$.filter(isEmptyValue)
  }
}
