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
// import 'rxjs/add/operator/merge'

import { makeDebugger } from '../../utils/debug'
import { getSuggestions$, startWithCmdPrefix, isEmptyValue } from './workers'

const debug = makeDebugger('L:Doraemon:pocket')

export default class Pockect {
  constructor(store) {
    this.input$ = new Subject()
    this.stop$ = new Subject()

    this.store = store

    //  enter cmd
    debug('themeName', store.themeName)

    this.cmdInput$ = this.input$
      .debounceTime(200)
      .filter(startWithCmdPrefix)
      .distinctUntilChanged()
  }

  search(term) {
    debug('Doraemons search: ', term)
    this.input$.next(term)
  }

  stop() {
    debug('stop ...')
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
