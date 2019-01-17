/* cool version */

import { Subject } from 'rxjs'

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/timeoutWith'

import { TimoutObservable } from './handler'
import { TIMEOUT_THRESHOLD } from './setup'

import { queryPromise, mutatePromise, restGetPromise } from './index'

// import network from './index'
const getInput$ = new Subject()
const queryInput$ = new Subject()
const mutateInput$ = new Subject()
const stop$ = new Subject()

const query$ = queryInput$
  .debounceTime(300)
  .switchMap(q =>
    queryPromise(q).timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
  )

const mutate$ = mutateInput$
  .debounceTime(300)
  .switchMap(q =>
    mutatePromise(q).timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
  )

const restGet$ = getInput$.debounceTime(300).switchMap(q =>
  restGetPromise(q)
    .timeoutWith(TIMEOUT_THRESHOLD, TimoutObservable)
    .takeUntil(stop$)
)

const data$ = query$.merge(restGet$, mutate$)

/*
* those are functions to handle the query/mutate/restGet ...
*/

const stop = () => stop$.next()

const restGet = url => getInput$.next(url)

const query = (query, variables = {}) => queryInput$.next({ query, variables })

const mutate = (mutation, variables) =>
  mutateInput$.next({ mutation, variables })

const data = () => data$

/*
* export those functions
*/
const sr71$ = {
  stop,
  restGet,
  query,
  mutate,
  data,
}

export default sr71$
