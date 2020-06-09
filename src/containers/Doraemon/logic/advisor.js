/*
 * provide advise to Pocket
 */
import {
  not,
  compose,
  split,
  filter,
  init,
  head,
  last,
  slice,
  startsWith,
  endsWith,
  anyPass,
  append,
  insert,
  isEmpty,
  path as pathFn,
  ifElse,
  identity,
  tail,
  values,
  pick,
  map,
  pickBy,
} from 'ramda'

import { from } from 'rxjs'

import { ICON_CMD } from '@/config'
import { notEmpty } from '@/utils'

const cmdSplit = compose(split('/'), slice(1, Infinity))
const cmdFull = compose(filter(notEmpty), cmdSplit)
const cmdHead = compose(head, cmdSplit)
const cmdLast = compose(last, cmdFull)
const cmdInit = compose(init, cmdFull)

export const startWithSlash = startsWith('/')

export const searchablePrefix = compose(
  not,
  anyPass([
    startsWith('/'),
    startsWith('?'),
    startsWith('#'),
    startsWith('@'),
    startsWith('>'),
    startsWith('<'),
  ]),
)

export const startWithSpecialPrefix = anyPass([
  startsWith('?'),
  startsWith('#'),
  startsWith('>'),
  startsWith('<'),
])

// TODO need refactor
export const insertBetweenPath = (path, word = 'threads') => {
  switch (path.length) {
    case 2:
      return append(word, insert(1, word, path))
    // case 3:
    //  return R.append(word, R.insert(1, word, path))
    default:
      return append(word, path)
  }
}

export class Advisor {
  constructor(store) {
    this.store = store
    this.curSuggestions = store.allSuggestions
  }

  getSuggestionPath = (p) => {
    if (isEmpty(p)) {
      return pathFn(p, this.curSuggestions)
    }
    const cmdChain = insertBetweenPath(p)
    this.store.mark({ cmdChain })
    return pathFn(cmdChain, this.curSuggestions) || {}
  }

  suggestionPathInit = compose(this.getSuggestionPath, cmdInit)

  suggestionPath = compose(this.getSuggestionPath, cmdFull)

  suggestionPathThenStartsWith = (val) => {
    const init = this.suggestionPathInit(val)
    return pickBy((_, k) => startsWith(cmdLast(val), k), init)
  }

  walkSuggestion = ifElse(
    endsWith('/'),
    this.suggestionPath,
    this.suggestionPathThenStartsWith,
  )

  suggestionBrief = compose(
    values,
    map(pick(['title', 'desc', 'raw', 'logo', 'cmd'])),
    this.walkSuggestion,
  )

  getSuggestion = ifElse(
    compose(startsWith('/'), tail), // avoid multi /, like /////
    () => identity([]),
    this.suggestionBrief,
  )

  relateSuggestions = (val) => {
    // sync with store allSuggestions
    this.curSuggestions = this.store.allSuggestions

    return {
      prefix: cmdSplit(val).length > 1 ? cmdHead(val) : '/',
      data: this.getSuggestion(val),
    }
  }

  relateSuggestions$ = (q) =>
    from(new Promise((resolve) => resolve(this.relateSuggestions(q))))

  specialSuggestions = (val) => {
    return {
      prefix: head(val),
      data: [
        {
          title: '关于本站',
          desc: 'coderplanets 是什么?',
          raw: 'help_1',
          logo: `${ICON_CMD}/shell_help.svg`,
        },
        {
          title: 'CPS 内容发布守则白皮书',
          desc: '社区守则，价值观等等',
          raw: 'help_37',
          logo: `${ICON_CMD}/shell_help.svg`,
        },
        {
          title: 'Home 社区指南',
          desc: 'Home 社区即 coderplanets 首页社区..',
          raw: 'help_38',
          logo: `${ICON_CMD}/shell_help.svg`,
        },
        {
          title: 'CPS 个性化设置指南',
          desc: '主题设置，阅读设置，等..',
          raw: 'help_43',
          logo: `${ICON_CMD}/shell_help.svg`,
        },
        {
          title: 'CPS 社区订阅指南',
          desc: '子社区订阅，展现形式等',
          raw: 'help_40',
          logo: `${ICON_CMD}/shell_help.svg`,
        },
        {
          title: 'CPS 内容搜索指南',
          desc: '怎样使用多功能搜索框',
          raw: 'help_41',
          logo: `${ICON_CMD}/shell_help.svg`,
        },
        {
          title: 'CPS 开发者指南',
          desc: '参与 CPS 本站或第三方客户端的开发',
          raw: 'help_42',
          logo: `${ICON_CMD}/shell_help.svg`,
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
