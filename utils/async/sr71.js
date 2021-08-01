import { forEach } from 'ramda'
import PubSub from 'pubsub-js'
import { Subject, timer } from 'rxjs'

// debounceTime,
import {
  switchMap,
  takeUntil,
  debounce,
  merge,
  timeoutWith,
} from 'rxjs/operators'

import { TimeoutObservable } from './handler'
import { TIMEOUT_THRESHOLD } from './setup2'

import { queryPromise, mutatePromise, restGetPromise } from './methods'

// import { debounceTime, switchMap, merge, timeoutWith } from 'rxjs/operator'

class SR71 {
  constructor(opts = { receive: '' }) {
    this.getInput$ = new Subject()
    this.queryInput$ = new Subject()
    this.mutateInput$ = new Subject()
    this.stop$ = new Subject()
    this.eventInput$ = new Subject()
    this.receive = opts.receive

    this.initEventSubscription()
    this.query$ = this.queryInput$.pipe(
      debounce(() => timer(300)),
      switchMap((q) =>
        queryPromise(q).pipe(
          timeoutWith(TIMEOUT_THRESHOLD, TimeoutObservable),
          takeUntil(this.stop$),
        ),
      ),
    )

    this.mutate$ = this.mutateInput$.pipe(
      debounce(() => timer(300)),
      switchMap((q) =>
        mutatePromise(q).pipe(
          timeoutWith(TIMEOUT_THRESHOLD, TimeoutObservable),
          takeUntil(this.stop$),
        ),
      ),
    )

    this.restGet$ = this.getInput$.pipe(
      debounce(() => timer(300)),
      switchMap((q) =>
        restGetPromise(q).pipe(
          timeoutWith(TIMEOUT_THRESHOLD, TimeoutObservable),
          takeUntil(this.stop$),
        ),
      ),
    )

    /* this.event$ = this.eventInput$.debounceTime(100) */
    this.event$ = this.eventInput$

    this.graphql$ = this.query$.pipe(merge(this.mutate$))
    this.data$ = this.graphql$.pipe(merge(this.restGet$, this.event$))
  }

  // Private
  initEventSubscription() {
    if (Array.isArray(this.receive)) {
      forEach((event) => {
        this.subscriptEvent(event)
      }, this.receive)
    } else {
      this.subscriptEvent(this.receive)
    }
  }

  // Private
  subscriptEvent(event) {
    // if (isEmptyValue(event)) return false
    // PubSub.unsubscribe(event)
    // avoid duplicate subscribe caused by HMR
    PubSub.subscribe(event, (event, data) =>
      this.eventInput$.next({ [event]: data }),
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
