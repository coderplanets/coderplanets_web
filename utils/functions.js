import R from 'ramda'
import PubSub from 'pubsub-js'

import {
  pl,
  framework,
  database, //  cmds,
} from '../stores/DoraemonStore/suggestions'

const plKeys = R.map(R.toLower, R.keys(pl))
const frameworkKeys = R.map(R.toLower, R.keys(framework))
const databaseKeys = R.map(R.toLower, R.keys(database))
// const cmdsKeys = R.map(R.toLower, R.keys(cmds))

/* eslint-disable */
// TODO: document ?
export const Global = typeof window !== 'undefined' ? window : global

export const gqRes = R.curry((key, obj) => {
  if (R.and(obj[key], R.has(key, obj))) {
    return true
  }
  return false
})

export const getParameterByName = name => {
  /* if (!url) url = window.location.href;*/
  const url = Global.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const isObject = value => {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}
/* eslint-enable */

export const getSVGIconPath = key => {
  const iconKey = R.toLower(key)
  let path = 'langs'
  if (R.contains(iconKey, plKeys)) {
    path = 'langs'
  } else if (R.contains(iconKey, frameworkKeys)) {
    path = 'frameworks'
  } else if (R.contains(iconKey, databaseKeys)) {
    path = 'database'
  } else {
    path = 'cmd'
  }

  return `/static/nodeIcons/${path}/${iconKey}.svg`
}

// see https://github.com/ramda/ramda/issues/1361
export const mapKeys = R.curry((fn, obj) => {
  return R.reduce(
    (acc, key) => {
      acc[fn(key)] = obj[key]
      return acc
    },
    {},
    R.keys(obj)
  )
})

export const notEmpty = R.compose(R.not, R.isEmpty)
export const isEmptyValue = R.compose(R.isEmpty, R.trim)
/* eslint-disable */
const log = (...args) => data => {
  console.log.apply(null, args.concat([data]))
  return data
}
/* eslint-enable */

// reference: https://blog.carbonfive.com/2017/12/20/easy-pipeline-debugging-with-curried-console-log/
export const Rlog = (arg = 'Rlog: ') => R.tap(log(arg))

export const cutFrom = (val, cutnumber = 20) => {
  if (isEmptyValue(val)) {
    return ''
  } else if (val.length <= cutnumber) {
    return val
  }
  return `${R.slice(0, cutnumber, val)} ...`
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

// TODO remove
export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export const dispatchEvent = (msg, data = {}) => {
  // TODO: check the msg is valid
  // PubSub.publishSync(msg, data)
  PubSub.publish(msg, data)
}
