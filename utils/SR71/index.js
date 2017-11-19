// import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import fetch from 'isomorphic-fetch'

import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Doraemon:pocket')
/* eslint-enable no-unused-vars */

// https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master/go.md

const CheatsheetCDN =
  'https://raw.githubusercontent.com/mydearxym/mastani-cheatsheets/master'

const getReposPromise = which =>
  fetch(`${CheatsheetCDN}/${which}.md`).then(res => res.text())

const getData = which =>
  Observable.fromPromise(getReposPromise(which)).catch(error =>
    Observable.of(`Error: ${error}`)
  )

class SR71 {
  constructor() {
    this.input$ = new Subject()
    // this.input$.do(val => debug('input: ', val))
  }

  getCheatsheet(which) {
    // debug('inputForOtherUse: ', this.store.inputForOtherUse)
    this.input$.next(which)
  }

  /*
  staticAsset(type = 'cheatsheet', options = {}) {
    console.log('staticAsset: ', type)
    console.log('staticAsset: ', options)
  }
  */

  cheatsheet() {
    return this.input$
      .switchMap(q => getData(q))
      .catch(error => Observable.of(`Error: ${error}`))
  }
}

const SR71$ = new SR71()

export default SR71$
