import { curry, reduce, keys, sort, uniq, tap } from 'ramda'
import PubSub from 'pubsub-js'
import { limit, length } from 'stringz'

import { TAG_COLOR_ORDER } from '@/config'
import { EVENT } from '@/constant'

import { scrollToHeader } from './dom'
import { isString } from './validator'

/* eslint-disable */
// TODO: document ?
export const Global = typeof window !== 'undefined' ? window : global
/* eslint-enable */

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

export const sortByColor = (source) =>
  sort(
    (t1, t2) => TAG_COLOR_ORDER[t1.color] - TAG_COLOR_ORDER[t2.color],
    source,
  )

export const sortByIndex = (source) => sort((a, b) => a.index - b.index, source)

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
export const cutFrom = (str, len = 20) => {
  if (!str || !isString(str)) return '??...'
  return len >= length(str) ? str : `${limit(str, len, '')}...`
}

// https://stackoverflow.com/questions/9461621/how-to-format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900-in-javascrip
export const prettyNum = (num, digits = 1) => {
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

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// from https://stackoverflow.com/questions/20396456/how-to-do-word-counts-for-a-mixture-of-english-and-chinese-in-javascript
// count both chinese-word and english-words
export const countWords = (str) => {
  const matches = str.match(/[\u00ff-\uffff]|\S+/g)
  return matches ? matches.length : 0
}

// TODO remove
export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * publish event message
 *
 * @param {string} msg
 * @param {object} [data={}]
 */
export const send = (msg, data = {}) => {
  // TODO: check the msg is valid
  // PubSub.publishSync(msg, data)
  PubSub.publish(msg, data)
}

// TODO:  move to eventShortCuts

/**
 * shortcut for close Drawer
 *
 * @param {string} [type='']
 */
export const closeDrawer = (type = '') => send(EVENT.DRAWER.CLOSE, { type })

/**
 * hepler for call the JoinModal Container to show wechatQRCode or mail scriscribe list etc ..
 *
 * @param {string} type
 * @param {string} data
 */
export const joinUS = (type, data) => send(EVENT.JOIN_US, { type, data })

export const errRescue = ({ type, operation, details, path }) =>
  send(EVENT.ERR_RESCUE, { type, data: { operation, details, path } })

// errRescue({type: ERR.GRAPHQL, operation: operationName, details: graphQLErrors})

/* eslint-disable */
export const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
/* eslint-enable */

export const extractMentions = (text) => {
  const mentionsRegex = new RegExp('@([a-zA-Z0-9_.-]+)', 'gim')

  let matches = text.match(mentionsRegex)
  if (matches?.length) {
    matches = matches.map((match) => {
      return match.slice(1)
    })
    return uniq(matches)
  }
  return []
}

// https://blogs.sap.com/2017/07/15/use-regular-expression-to-parse-the-image-reference-in-the-markdown-sourcre-code/
export const extractAttachments = (str) => {
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
export const isCypressRunning = () => {
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
  onClick,
  onDoubleClick = scrollToHeader,
  latency = 250,
) => {
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
