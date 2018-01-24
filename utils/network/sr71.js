/* cool version */

import { Subject } from 'rxjs/Subject'

import 'rxjs/add/observable/of'
/* import 'rxjs/add/observable/fromPromise' */
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/timeoutWith'

import { TimoutObservable } from './handler'
import { TIMEOUT_THRESHOLD } from './setup'

// import network from './index'

import { queryPromise, mutatePromise, restGetPromise } from './index'

class SR71 {
  constructor() {
    this.getInput$ = new Subject()
    this.queryInput$ = new Subject()
    this.mutateInput$ = new Subject()
    this.stop$ = new Subject()

    this.query$ = this.queryInput$
      .debounceTime(300)
      .switchMap(q =>
        queryPromise(q).timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
      )

    this.mutate$ = this.mutateInput$
      .debounceTime(300)
      .switchMap(q =>
        mutatePromise(q).timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
      )

    this.restGet$ = this.getInput$.debounceTime(300).switchMap(q =>
      restGetPromise(q)
        .timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
        .takeUntil(this.stop$)
    )

    // this.gql$ = this.query$.merge(this.mutate$)
    // this.data$ = this.gql$.merge(this.restGet$)
    this.data$ = this.query$.merge(this.restGet$, this.mutate$)
  }

  stop() {
    console.log('should stop')
    this.stop$.next()
  }

  restGet(url) {
    this.getInput$.next(url)
  }

  query(query) {
    this.queryInput$.next(query)
  }

  mutate(mutation, variables) {
    this.mutateInput$.next({ mutation, variables })
  }

  data() {
    return this.data$
  }
}

const sr71$ = new SR71()

export default sr71$
