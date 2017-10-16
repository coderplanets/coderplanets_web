import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

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
  startWithSpecialPrefix,
  startWithSlash,
  Advisor,
} from './helper/advisor'

import { isEmptyValue } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Doraemon:pocket')
/* eslint-enable no-unused-vars */

export default class Pockect {
  constructor(store) {
    this.store = store
    this.advisor = new Advisor(store.allSuggestions)

    this.input$ = new Subject()
    // this.advanceCmd$ = new Subject()
    this.stop$ = new Subject() // esc, pageClick  ...
    this.cmdInput$ = this.input$.debounceTime(200) // .distinctUntilChanged()

    this.cmdSuggestionCommon = this.cmdInput$
      .filter(startWithSlash)
      .switchMap(q => this.advisor.relateSuggestions$(q).takeUntil(this.stop$))
      .catch(() => Observable.of([]))

    this.cmdSuggestionSpecial = this.cmdInput$
      .filter(startWithSpecialPrefix) // > < ?
      .map(this.advisor.specialSuggestions)

    this.cmdSuggesttion$ = this.cmdSuggestionCommon.merge(
      this.cmdSuggestionSpecial
    )
  }

  search(term) {
    this.input$.next(term)
  }

  stop() {
    //    debug('stop ...')
    this.stop$.next()
  }

  cmdSuggesttion() {
    return this.cmdSuggesttion$
  }

  emptyInput() {
    return this.input$.filter(isEmptyValue)
  }
}
