import R from 'ramda'
import PubSub from 'pubsub-js'

import { Subject, of } from 'rxjs'

import {
  catchError,
  switchMap,
  debounceTime,
  takeUntil,
  map,
  filter,
  merge,
} from 'rxjs/operators'

import { EVENT } from '@/constant'
import { buildLog, isEmptyValue } from '@/utils'
import {
  searchablePrefix,
  startWithSpecialPrefix,
  startWithSlash,
  Advisor,
} from './advisor'

/* eslint-disable-next-line */
const log = buildLog('L:Doraemon:pocket')

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
    this.generalInput$ = this.input$.pipe(debounceTime(200)) // .distinctUntilChanged()

    PubSub.subscribe(EVENT.LOGIN_PANEL, () => {
      this.store.handleLogin()
      this.input$.next('/login/')
    })

    /* this.search$ = this.generalInput$.pipe(filter(v => !searchablePrefix(v))) */
    this.search$ = this.generalInput$.pipe(filter(searchablePrefix))
    this.searchUser$ = this.generalInput$.pipe(filter(R.startsWith('@')))

    this.cmdSuggestionCommon = this.generalInput$.pipe(
      filter(startWithSlash),
      switchMap(q =>
        this.advisor.relateSuggestions$(q).pipe(takeUntil(this.stop$))
      ),
      catchError(() => of([]))
    )

    this.cmdSuggestionSpecial = this.generalInput$.pipe(
      filter(startWithSpecialPrefix),
      map(this.advisor.specialSuggestions)
    )

    this.cmdSuggesttion$ = this.cmdSuggestionCommon.pipe(
      merge(this.cmdSuggestionSpecial)
    )
  }

  query(term) {
    // log('inputForOtherUse: ', this.store.inputForOtherUse)
    if (!this.store.inputForOtherUse) {
      this.input$.next(term)
    }
  }

  stop() {
    //    log('stop ...')
    this.stop$.next()
  }

  search() {
    return this.search$
  }

  searchUser() {
    return this.searchUser$
  }

  cmdSuggesttion() {
    return this.cmdSuggesttion$
  }

  emptyInput() {
    return this.input$.pipe(filter(isEmptyValue))
  }
}
