import { curry, reduce, keys, sort, uniq, tap, endsWith } from 'ramda'
import PubSub from 'pubsub-js'
import { limit, length } from 'stringz'

import type {
  TGQLError,
  TReportType,
  TAttInfo,
  TArticle,
  TPaymentUsage,
} from '@/spec'
import { TAG_COLOR_ORDER } from '@/config'
import { TYPE, EVENT, THREAD } from '@/constant'

import { scrollToHeader } from './dom'
import { isString } from './validator'

type TSORTABLE_ITEMS = {
  color?: string
  index?: number
  id?: string
  title?: string
  raw: string
  logo?: string
}[]

export const Global: any = typeof window !== 'undefined' ? window : {}

// those two function used to encode/decode the value in element dataset
export const o2s = JSON.stringify
export const s2o = JSON.parse

// see https://github.com/ramda/ramda/issues/1361
export const mapKeys = curry((fn, obj) => {
  return reduce(
    (acc, key) => {
      acc[fn(key)] = obj[key]
      return acc
    },
    {},
    keys(obj),
  )
})

/**
 * sort the array by it's color
 */
export const sortByColor = (source: TSORTABLE_ITEMS): TSORTABLE_ITEMS =>
  sort(
    (t1, t2) => TAG_COLOR_ORDER[t1.color] - TAG_COLOR_ORDER[t2.color],
    source,
  )

/**
 * sort the array by it's index
 */
export const sortByIndex = (source: TSORTABLE_ITEMS): TSORTABLE_ITEMS =>
  sort((a, b) => a.index - b.index, source)

/* eslint-disable */
const log = (...args) => (data) => {
  console.log.apply(null, args.concat([data]))
  return data
}
/* eslint-enable */

// reference: https://blog.carbonfive.com/2017/12/20/easy-pipeline-debugging-with-curried-console-log/
export const Rlog = (arg = 'Rlog: ') => tap(log(arg))

/**
 * cut extra length of a string
 * 截取固定长度字符串，并添加省略号（...）
 * @param {*string} str 需要进行处理的字符串，可含汉字
 * @param {*number} len 需要显示多少个汉字，两个英文字母相当于一个汉字
 */
export const cutRest = (str: string, len = 20): string => {
  if (!str || !isString(str)) return '...'
  return len >= length(str) ? str : `${limit(str, len, '')}...`
}

/**
 * prettyNum with human format
 * @see @link https://stackoverflow.com/questions/9461621/how-to-format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900-in-javascrip
 * e.g:
 * console.log(prettyNum(1200)) // => 1.2k
 *
 * @param {number} num
 * @param {number} [digits=1]
 * @returns {string}
 */
export const prettyNum = (num: number, digits = 1): string => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = si.length - 1; i > 0; i -= 1) {
    if (num >= si[i].value) {
      break
    }
  }
  /* eslint-disable */
  if (num < 1000) {
    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
  }
  return (
    (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol + '+'
  )
  /* eslint-enable  */
}

/**
 * number with commas foramt
 * @see @link https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 *
 * @param {*} x
 */
export const numberWithCommas = (x: number): string =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

/**
 * count both chinese-word and english-words
 * @see @link https://stackoverflow.com/questions/20396456/how-to-do-word-counts-for-a-mixture-of-english-and-chinese-in-javascript
 *
 * @param {string} str
 * @returns {number}
 */
export const countWords = (str: string): number => {
  const matches = str.match(/[\u00ff-\uffff]|\S+/g)
  return matches ? matches.length : 0
}

/**
 * publish event message, 'send' inspired by Elixir
 */
export const send = (msg: string, data = {}): void => {
  // TODO: check the msg is valid
  // PubSub.publishSync(msg, data)
  PubSub.publish(msg, data)
}

/**
 * shortcut for close Drawer
 *
 */
export const closeDrawer = (type = ''): void =>
  send(EVENT.DRAWER.CLOSE, { type })

/**
 * shortcut for call cashier
 *
 */
export const checkout = (amount: number, usage: TPaymentUsage): void =>
  send(EVENT.CALL_CASHIER, { amount, usage })
/**
 * share articles
 */
export const shareTo = (): void => send(EVENT.SHARE, {})

/**
 * report content
 */
export const report = (type: TReportType, data?: TAttInfo): void => {
  send(EVENT.REPORT, { type, data })
}

/**
 * hepler for call the JoinModal Container to show wechatQRCode or mail scriscribe list etc ..
 *
 */
export const joinUS = (type?: string, data = {}): void => {
  send(EVENT.JOIN_US, { type, data })
}

export const moveToCommunity = (): void => {
  send(EVENT.MOVE_TO_COMMUNITY, {})
}

export const mirrorToCommunity = (): void => {
  send(EVENT.MIRROR_TO_COMMUNITY, {})
}

export const setTag = (): void => {
  send(EVENT.SET_TAG, {})
}

/**
 * send preview article singal to Drawer
 */
export const previewArticle = (article: TArticle): void => {
  const type = TYPE.DRAWER[`${article.meta.thread}_VIEW`]
  const data = article

  send(EVENT.DRAWER.OPEN, { type, data })
}

export const errRescue = ({
  type,
  operation,
  details,
  path,
}: TGQLError): void =>
  send(EVENT.ERR_RESCUE, { type, data: { operation, details, path } })

// errRescue({type: ERR.GRAPHQL, operation: operationName, details: graphQLErrors})

export const debounce = (fn, ms = 0) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

/**
 * extract mention format from markdown str into list
 */
export const extractMentions = (str: string): string[] => {
  const mentionsRegex = new RegExp('@([a-zA-Z0-9_.-]+)', 'gim')

  let matches = str.match(mentionsRegex)
  if (matches?.length) {
    matches = matches.map((match) => {
      return match.slice(1)
    })
    return uniq(matches)
  }
  return []
}

/**
 * extract markdown attachments from str
 * @see @link https://blogs.sap.com/2017/07/15/use-regular-expression-to-parse-the-image-reference-in-the-markdown-sourcre-code/
 */
export const extractAttachments = (str: string): string[] => {
  let m
  const regex = /!\[(.*?)\]\((.*?)\)/g

  const urls = []
  /* eslint-disable */
  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex += 1
    }
    urls.push(m[2])
  }
  /* eslint-enable */
  return urls
}

// checkout if the site is running on cypress container
export const isCypressRunning = (): boolean => {
  // @ts-ignore
  if (typeof window !== 'undefined') return !!window.Cypress

  return false
}

/**
 * handle click and doubleClick safely
 * see: https://github.com/facebook/react/issues/3185#issuecomment-75138124
 *
 * @param {function} onClick A callback function for single click events
 * @param {function} onDoubleClick A callback function for double click events
                     scroll to header by default
 * @param {number} [latency=300] The amount of time (in milliseconds) to
 *                 wait before differentiating a single from a double click
 * example:
 * before: onClick={() => openMenu(TYPE.MM_TYPE.GLOBAL_MENU)}
 * after:  onClick={multiClick(openMenu(TYPE.MM_TYPE.GLOBAL_MENU))}
 */
export const multiClick = (
  onClick: (HTMLElementEventMap) => void,
  onDoubleClick: (e: HTMLElementEventMap) => void = scrollToHeader,
  latency = 250,
): ((event: HTMLElementEventMap) => void) => {
  let timeoutID = null

  return (event) => {
    if (!timeoutID) {
      timeoutID = setTimeout(() => {
        onClick?.(event)
        timeoutID = null
      }, latency)
    } else {
      timeoutID = clearTimeout(timeoutID)
      onDoubleClick?.(event)
    }
  }
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 *
 * see: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * find key=value in array or object
 *
 * see original version:
 * https://stackoverflow.com/a/15524326
 * @param {object or Array} data
 * @param {String} key
 * @param {String} value
 * @returns
 */
export const findDeepMatch = (data, key, value) => {
  let result = null
  if (data instanceof Array) {
    for (let i = 0; i < data.length; i += 1) {
      // console.log('> the data[i]', data[i])
      result = findDeepMatch(data[i], key, value)
      // end the recursive function
      if (result) return result
    }
    // console.log('-- d --')
  } else {
    const theKeys = keys(data)
    for (let index = 0; index < theKeys.length; index += 1) {
      const prop = theKeys[index]
      if (prop === key && data[prop] === value) {
        return data
      }
      if (data[prop] instanceof Object || data[prop] instanceof Array) {
        result = findDeepMatch(data[prop], key, value)
      }
    }
  }

  return result
}

/**
 * groupByKey
 * see @link: https://stackoverflow.com/a/47385953/4050784
 * NOTE: type this is diffcult for me, need help
 * 有人能做得来这个类型体操吗。。。
 *
 * @param {Array} - array
 * @param {String} - key
 * @returns {Object}
 */
export const groupByKey = (array, key) => {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash
    return Object.assign(hash, {
      // @ts-ignore
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    })
  }, {})
}

/**
 *  titlize a string
 */
export const titleCase = (str: string): string => {
  return str.replace(/\w\S*/g, (t) => {
    return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  })
}

type TShareParam = {
  url?: string
  title?: string
  text?: string
  subject?: string
  body?: string
  u?: string
  href?: string
  name?: string
}
export const openShareWindow = (
  platformUrl: string,
  param: TShareParam,
): void => {
  const safeParam = []

  /* eslint-disable */
  for (const i in param) {
    safeParam.push(`${i}=${encodeURIComponent(param[i] || '')}`)
  }
  /* eslint-enable */
  const targetUrl = `${platformUrl}?${safeParam.join('&')}`

  Global.open(targetUrl, '_blank', 'height=500, width=600')
}

// https://stackoverflow.com/a/2627482/4050784
export const daysBetween = (date1, date2) => {
  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1 - date2)

  // Convert back to days and return
  return Math.round(differenceMs / ONE_DAY)
}

// birthday is a Date
const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export const siteBirthDay = (birthday: string): string => {
  const year = calculateAge(new Date(birthday))
  const days = daysBetween(new Date(birthday), Date.now()) - 365 * year

  return `${year}年${days}天`
}

type TCovert = 'titleCase' | null
const doCovert = (value: string, opt: TCovert): string => {
  switch (opt) {
    case 'titleCase': {
      return titleCase(value)
    }
    default: {
      return value
    }
  }
}

/**
 * mainly used for url -> thread convert
 *
 * e.g:
 * posts -> post
 */
export const singular = (value: string, opt = null): string => {
  switch (value) {
    case THREAD.WORKS: {
      return doCovert(THREAD.WORKS, opt)
    }

    default: {
      const singularValue = endsWith('s', value) ? value.slice(0, -1) : value
      return doCovert(singularValue, opt)
    }
  }
}

/**
 * mainly used for thread -> url convert
 *
 * e.g:
 * post -> posts
 */
export const plural = (value: string, opt = null): string => {
  switch (value) {
    case THREAD.WORKS: {
      return doCovert(THREAD.WORKS, opt)
    }

    default: {
      return doCovert(`${value}s`, opt)
    }
  }
}
