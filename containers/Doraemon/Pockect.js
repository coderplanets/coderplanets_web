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
  //   startWithCmdPrefix,
  relateSuggestions$,
  startWithSlash,
} from './workers'

import { isEmptyValue } from '../../utils/functions'

const debug = makeDebugger('L:Doraemon:pocket')
// const RLog = x => debug('child : ', x)

export default class Pockect {
  constructor(store) {
    this.store = store

    this.input$ = new Subject()
    this.stop$ = new Subject() // esc, pageClick  ...
    this.cmdInput$ = this.input$.debounceTime(200).distinctUntilChanged()

    // TODO: 1. support > < ? history
    //       2. cmd chian for trace
    //       3. promise style to cancle             ... done
    //       4. Icon display refactor
    //       5. optimise code in worker             ... done
    //       6. tab completion -- need cmd-china    ... done
    //       7. shortcuts  esc / c-p ...

    this.suggesttion$ = this.cmdInput$
      .filter(startWithSlash)
      // .map(relateSuggestions)
      .switchMap(q => relateSuggestions$(q).takeUntil(this.stop$))
    // .do(val => debug('refactor haha: ', val))
    // .catch(() => Observable.of([]))
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
    return this.suggesttion$.catch(e => {
      debug(e)
      return Observable.of([])
    })
  }

  emptyInput() {
    return this.input$.filter(isEmptyValue)
  }
}
