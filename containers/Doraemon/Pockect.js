import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
// import R from 'ramda'

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/merge'

import { makeDebugger } from '../../utils/debug'
import {
  getSuggestions$,
  startWithCmdPrefix,
  isEmptyValue,
  relateSuggestions,
  startWithSlash,
} from './workers'

const debug = makeDebugger('L:Doraemon:pocket')
// const RLog = x => debug('child : ', x)

export default class Pockect {
  constructor(store) {
    this.store = store

    this.input$ = new Subject()
    this.stop$ = new Subject() // esc, pageClick  ...
    this.cmdInput$ = this.input$.debounceTime(200).distinctUntilChanged()

    this.thiredGuess$ = this.cmdInput$
      .filter(startWithSlash)
      .map(relateSuggestions)
    // .do(val => debug('refactor haha: ', val))
    // .catch(() => Observable.of([]))

    this.firstGuess$ = this.cmdInput$
      // .takeUntil(this.secondGuess$)
      .filter(startWithCmdPrefix)
      .switchMap(q => getSuggestions$(q).takeUntil(this.stop$))
  }

  search(term) {
    // debug('Doraemons search: ', term)
    this.input$.next(term)
  }

  stop() {
    //    debug('stop ...')
    this.stop$.next()
  }

  suggestion() {
    return (
      this.firstGuess$
        // .switchMap(q => getSuggestions$(q).takeUntil(this.stop$))
        .catch(e => {
          debug(e)
          return Observable.of([])
        })
    )
  }

  accessPathTest() {
    return this.thiredGuess$
  }

  emptyInput() {
    return this.input$.filter(isEmptyValue)
  }
}
