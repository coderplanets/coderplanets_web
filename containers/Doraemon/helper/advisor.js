/*
 * provide advise to Pocket
 */
import R from 'ramda'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'

import { notEmpty } from '../../../utils'

import { ICON_ASSETS } from '../../../config'

const allSuggestions2 = {
  theme: {
    title: 'theme',
    desc: 'theme desc..',
    raw: 'theme',
    logo: `${ICON_ASSETS}/cmd/themes.svg`,

    threads: {
      cyan: {
        title: 'cyan theme',
        desc: `cyan desc`,
        raw: `cyan`,
        cmd: 'theme',
      },
      solarized: {
        title: 'solarizedDark theme',
        desc: `solarizedDark desc`,
        raw: `solarized`,
        cmd: 'theme',
      },
    },
  },
  user: {
    title: 'user',
    desc: 'user desc..',
    raw: 'user',
    logo: `${ICON_ASSETS}/cmd/users.svg`,
  },
  cheatsheet: {
    title: 'cheatsheet',
    desc: 'Cheatsheet desc',
    raw: 'cheatsheet',
    logo: `${ICON_ASSETS}/cmd/cheatsheet.svg`,
    threads: {
      react: {
        title: 'javascript',
        desc: 'javascript cheatsheet',
        raw: 'javascript',
        logo: `${ICON_ASSETS}/pl/javascript.svg`,
        threads: {
          react2: {
            title: 'javascript2',
            desc: 'javascript2 cheatsheet',
            raw: 'javascript2',
            logo: `${ICON_ASSETS}/pl/javascript.svg`,
          },
        },
      },
    },
  },
  login: {
    title: '登陆',
    desc: '登陆 desc',
    raw: 'login',
    logo: `${ICON_ASSETS}/cmd/login.svg`,

    threads: {
      github: {
        title: 'github 登陆',
        desc: '使用 github open id 登陆',
        raw: 'login--github',
        logo: `${ICON_ASSETS}/cmd/github.svg`,
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
    R.map(R.pick(['title', 'desc', 'raw', 'logo', 'cmd'])),
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
