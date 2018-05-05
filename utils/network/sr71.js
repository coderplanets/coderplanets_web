import R from 'ramda'
import PubSub from 'pubsub-js'
import { Subject } from 'rxjs/Subject'

import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromEventPattern'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/timeoutWith'

import { TimoutObservable } from './handler'
import { TIMEOUT_THRESHOLD } from './setup'

import { queryPromise, mutatePromise, restGetPromise } from './index'

class SR71 {
  constructor(opts = { resv_event: '' }) {
    this.getInput$ = new Subject()
    this.queryInput$ = new Subject()
    this.mutateInput$ = new Subject()
    this.stop$ = new Subject()
    this.eventInput$ = new Subject()
    this.resv_event = opts.resv_event

    this.initEventSubscription()
    this.query$ = this.queryInput$.debounceTime(300).switchMap(q =>
      queryPromise(q)
        .timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
        .takeUntil(this.stop$)
    )

    this.mutate$ = this.mutateInput$.debounceTime(300).switchMap(q =>
      mutatePromise(q)
        .timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
        .takeUntil(this.stop$)
    )

    this.restGet$ = this.getInput$.debounceTime(300).switchMap(q =>
      restGetPromise(q)
        .timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
        .takeUntil(this.stop$)
    )

    this.event$ = this.eventInput$.debounceTime(100)
    /* this.event$ = this.eventInput$ */

    this.graphql$ = this.query$.merge(this.mutate$)
    this.data$ = this.graphql$.merge(this.restGet$, this.event$)
  }

  // Private
  initEventSubscription() {
    if (Array.isArray(this.resv_event)) {
      R.forEach(event => {
        this.subscriptEvent(event)
      }, this.resv_event)
    } else {
      this.subscriptEvent(this.resv_event)
    }
  }

  // Private
  subscriptEvent(event) {
    // if (isEmptyValue(event)) return false
    // PubSub.unsubscribe(event)
    // avoid duplicate subscribe caused by HMR
    PubSub.subscribe(event, (event, data) =>
      this.eventInput$.next({ [event]: data })
    )
  }

  stop() {
    this.stop$.next()
  }

  restGet(url) {
    this.getInput$.next(url)
  }

  query(query, variables = {}) {
    this.queryInput$.next({ query, variables })
  }

  mutate(mutation, variables) {
    this.mutateInput$.next({ mutation, variables })
  }

  data() {
    return this.data$
  }
}

/* const sr71$ = new SR71() */
export default SR71
// export default new SR71()
