/*
 * provide advise to Pocket
 */
import R from 'ramda'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'

import { notEmpty } from '../../../utils'

const allSuggestions2 = {
  theme: {
    title: 'theme',
    desc: 'theme desc..',
    raw: 'theme',

    threads: {
      cyan: {
        title: 'cyan theme',
        desc: `cyan desc`,
        raw: `cyan`,
      },
      solarized: {
        title: 'solarizedDark theme',
        desc: `solarizedDark desc`,
        raw: `solarized`,
      },
    },
  },
  user: {
    title: 'user',
    desc: 'user desc..',
    raw: 'user',
  },
  cheatsheet: {
    title: 'cheatsheet',
    desc: 'Cheatsheet desc',
    raw: 'cheatsheet',
    threads: {
      react: {
        title: 'react',
        desc: 'react cheatsheet',
        raw: 'cheatsheet--react',
        threads: {
          react2: {
            title: 'react2',
            desc: 'react2 cheatsheet',
            raw: 'cheatsheet--react',
          },
        },
      },
    },
  },
}

const cmdSplit = R.compose(R.split('/'), R.slice(1, Infinity))
const cmdFull = R.compose(R.filter(notEmpty), cmdSplit)
const cmdHead = R.compose(R.head, cmdSplit)
const cmdLast = R.compose(R.last, cmdFull)
const cmdInit = R.compose(R.init, cmdFull)

export const startWithSlash = R.startsWith('/')

export const startWithSpecialPrefix = R.anyPass([
  R.startsWith('?'),
  R.startsWith('>'),
  R.startsWith('<'),
])

// TODO need refactor
export const insertBetweenPath = (path, word = 'threads') => {
  switch (path.length) {
    case 2:
      return R.append(word, R.insert(1, word, path))
    // case 3:
    //  return R.append(word, R.insert(1, word, path))
    default:
      return R.append(word, path)
  }
}

export class Advisor {
  constructor(store) {
    this.store = store
    this.allSuggestions = store.allSuggestions
  }

  getSuggestionPath = p => {
    if (R.isEmpty(p)) {
      return R.path(p, allSuggestions2)
    }
    const cmdChain = insertBetweenPath(p)
    console.log('cmdChain', cmdChain)
    this.store.markState({ cmdChain })
    return R.path(cmdChain, allSuggestions2) || {}
  }

  suggestionPathInit = R.compose(this.getSuggestionPath, cmdInit)
  suggestionPath = R.compose(this.getSuggestionPath, cmdFull)

  suggestionPathThenStartsWith = val => {
    console.log('then val: ', val)
    console.log('------------------------------')
    const init = this.suggestionPathInit(val)
    return R.pickBy((_, k) => R.startsWith(cmdLast(val), k), init)
  }

  walkSuggestion = R.ifElse(
    R.endsWith('/'),
    this.suggestionPath,
    this.suggestionPathThenStartsWith
  )

  suggestionBreif = R.compose(
    R.values,
    R.map(R.pick(['title', 'desc', 'raw'])),
    this.walkSuggestion
  )

  getSuggestion = R.ifElse(
    R.compose(R.startsWith('/'), R.tail), // avoid multi /, like /////
    () => R.identity([]),
    this.suggestionBreif
  )

  relateSuggestions = val => {
    return {
      prefix: cmdSplit(val).length > 1 ? cmdHead(val) : '/',
      data: this.getSuggestion(val),
    }
  }

  relateSuggestions$ = q =>
    Observable.fromPromise(
      new Promise(resolve => resolve(this.relateSuggestions(q)))
    )

  specialSuggestions = val => ({
    prefix: '/',
    data: [this.getSuggestionPath(val)],
  })
}
