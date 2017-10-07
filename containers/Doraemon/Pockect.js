import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import R from 'ramda'

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
  firstLevelSuggest,
  isEmptyValue,
  accessPath,
  allSuggestions,
} from './workers'

const debug = makeDebugger('L:Doraemon:pocket')

/*

/theme/
/th -- [tab]
/th -- [enter]
/theme -- [enter]

/theme/cyan [enter]

 key: endWith

 */

// const RLog = x => debug('child : ', x)

export default class Pockect {
  constructor(store) {
    this.input$ = new Subject()
    this.stop$ = new Subject() // esc, pageClick  ...
    this.firstLevelSuggestStop$ = new Subject()

    this.firstGuessStop$ = this.stop$.merge(this.firstLevelSuggestStop$)

    this.store = store

    //  enter cmd
    // debug('themeName', store.themeName)

    this.cmdInput$ = this.input$.debounceTime(200).distinctUntilChanged()
    // .filter(startWithCmdPrefix)

    /*
     this.secondGuess$ = this.cmdInput$.switchMap(q =>
       getSuggestions$(q).takeUntil(this.stop$)
     )
     */

    this.secondGuess$ = this.cmdInput$
      .filter(firstLevelSuggest)
      .map(accessPath) // TODO: rename
      //       .do(val => console.log('hello: ', val))
      .do(() => this.firstLevelSuggestStop$.next())
      //    .do(val => console.log('path val: ', R.path([val], allSuggestions)))
      .map(val => ({
        prefix: val,
        data: R.values(R.path([val], allSuggestions)),
      }))

    this.firstGuess$ = this.cmdInput$
      // .takeUntil(this.secondGuess$)
      .filter(startWithCmdPrefix)
      //      .do(q => console.log('see ', q)) // now is /theme/c
      .switchMap(q => getSuggestions$(q).takeUntil(this.firstGuessStop$))
    // .map(R.forEach(formatSuggestion), R.prop('data'))
    // .do(res => console.log('after: ', res))
    // .switchMap(q => getSuggestions$(q).takeUntil(this.secondGuess$)) // TODO
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

  suggestion2() {
    return this.secondGuess$
    //     return this.suggestion2$
  }

  emptyInput() {
    return this.input$.filter(isEmptyValue)
  }

  /* doCmd(store) { */
  /* */
  /* } */
}
