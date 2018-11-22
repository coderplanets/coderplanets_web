/*
 * provide advise to Pocket
 */
import R from 'ramda'

import { from } from 'rxjs'

import { notEmpty } from '../../../utils'

const cmdSplit = R.compose(R.split('/'), R.slice(1, Infinity))
const cmdFull = R.compose(R.filter(notEmpty), cmdSplit)
const cmdHead = R.compose(R.head, cmdSplit)
const cmdLast = R.compose(R.last, cmdFull)
const cmdInit = R.compose(R.init, cmdFull)

export const startWithSlash = R.startsWith('/')

export const searchablePrefix = R.compose(
  R.not,
  R.anyPass([
    R.startsWith('/'),
    R.startsWith('?'),
    R.startsWith('#'),
    R.startsWith('@'),
    R.startsWith('>'),
    R.startsWith('<'),
  ])
)

export const startWithSpecialPrefix = R.anyPass([
  R.startsWith('?'),
  R.startsWith('#'),
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
    this.curSuggestions = store.allSuggestions
  }

  getSuggestionPath = p => {
    if (R.isEmpty(p)) {
      return R.path(p, this.curSuggestions)
    }
    const cmdChain = insertBetweenPath(p)
    this.store.markState({ cmdChain })
    return R.path(cmdChain, this.curSuggestions) || {}
  }

  suggestionPathInit = R.compose(this.getSuggestionPath, cmdInit)

  suggestionPath = R.compose(this.getSuggestionPath, cmdFull)

  suggestionPathThenStartsWith = val => {
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
    // sync with store allSuggestions
    this.curSuggestions = this.store.allSuggestions

    return {
      prefix: cmdSplit(val).length > 1 ? cmdHead(val) : '/',
      data: this.getSuggestion(val),
    }
  }

  relateSuggestions$ = q =>
    from(new Promise(resolve => resolve(this.relateSuggestions(q))))

  specialSuggestions = val => {
    // console.log('this.getSuggestionPath(val): ', this.getSuggestionPath(val))
    return {
      prefix: R.head(val),
      data: [
        {
          title: 'todo',
          desc: 'world',
          raw: 'javascript',
          logo:
            'https://coderplanets.oss-cn-beijing.aliyuncs.com/icons/pl/javascript.svg',
        },
      ],
    }
    /*
       return {
       prefix: '/',
       data: [this.getSuggestionPath(val)],
       }
     */
  }
}
