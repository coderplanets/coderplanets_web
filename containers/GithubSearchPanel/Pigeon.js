import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import 'rxjs/add/observable/of'
import 'rxjs/add/observable/fromPromise'

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'

import R from 'ramda'
import fetch from 'isomorphic-fetch'

export const fuck = 1
const QUERY_REPOS =
  'https://api.github.com/search/repositories?sort=stars&order=desc&q='

const getReposPromise = query => {
  const url = `${QUERY_REPOS}${query}`
  return fetch(url).then(res => res.json())
}

const getRepos = query => {
  const promise = getReposPromise(query)
  return Observable.fromPromise(promise)
}

const getGithubRepos = R.curry(getRepos)

const isEmptyValue = R.compose(R.isEmpty, R.trim)
const isNotEmptyValue = R.compose(R.not, isEmptyValue)

export class SearchService {
  constructor() {
    this.searchTerm = new Subject()
    //     this.doSearch = R.curry(this.githubQuery)
  }

  search(term) {
    this.searchTerm.next(term)
  }

  get() {
    return this.searchTerm
      .debounceTime(400)
      .filter(isNotEmptyValue)
      .distinctUntilChanged()
      .switchMap(getGithubRepos)
      .catch(error => {
        console.error(error)
        return Observable.of([])
      })
  }

  emptyInput() {
    return this.searchTerm.filter(isEmptyValue)
  }
}
