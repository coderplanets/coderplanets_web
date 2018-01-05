/* cool version */

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'

import network from './index'

const queryPromise = query => Observable.fromPromise(network.query(query))

const mutatePromise = ({ mutation, variables }) =>
  Observable.fromPromise(network.mutate(mutation, variables))

const restGetPromise = url => Observable.fromPromise(network.GET(url))

class SR71 {
  constructor() {
    this.getInput$ = new Subject()
    this.queryInput$ = new Subject()
    this.mutateInput$ = new Subject()
    this.stop$ = new Subject()

    this.query$ = this.queryInput$.debounceTime(300).switchMap(queryPromise)

    this.mutate$ = this.mutateInput$.debounceTime(300).switchMap(mutatePromise)
    this.restGet$ = this.getInput$
      .debounceTime(300)
      .switchMap(q => restGetPromise(q).takeUntil(this.stop$))

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
