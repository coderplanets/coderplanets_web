import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import PubSub from 'pubsub-js'

// import 'rxjs/add/observable/of'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/takeUntil'
// import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/merge'

import { makeDebugger, isEmptyValue, EVENT } from '../../utils'
import {
  startWithSpecialPrefix,
  startWithSlash,
  Advisor,
} from './helper/advisor'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Doraemon:pocket')
/* eslint-enable no-unused-vars */

export default class Pockect {
  constructor(store) {
    this.store = store
    // if only pass down the store.allSuggestions, it will not reactive
    // because store.allSuggestions is only json, has no mobx magic
    // this.advisor = new Advisor(store.allSuggestions)
    this.advisor = new Advisor(store)

    this.input$ = new Subject()

    this.stop$ = new Subject() // esc, pageClick  ...
    // TODO: netfix search use throttle
    // see: https://www.youtube.com/watch?v=XRYN2xt11Ek
    this.cmdInput$ = this.input$.debounceTime(200) // .distinctUntilChanged()

    PubSub.subscribe(EVENT.LOGIN_PANEL, () => {
      this.store.handleLogin()
      this.input$.next('/login/')
    })

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

  query(term) {
    // debug('inputForOtherUse: ', this.store.inputForOtherUse)
    if (!this.store.inputForOtherUse) {
      this.input$.next(term)
    }
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
