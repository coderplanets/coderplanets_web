import R from 'ramda'
import PubSub from 'pubsub-js'

import { makeDebugger } from './debug'

import {
  pl,
  framework,
  database, //  cmds,
} from '../../stores/DoraemonStore/suggestions'

const plKeys = R.map(R.toLower, R.keys(pl))
const frameworkKeys = R.map(R.toLower, R.keys(framework))
const databaseKeys = R.map(R.toLower, R.keys(database))
// const cmdsKeys = R.map(R.toLower, R.keys(cmds))

export { makeDebugger } from './debug'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('U:functions')
/* eslint-enable no-unused-vars */

/* eslint-disable */
// TODO: document ?
export const Global = typeof window !== 'undefined' ? window : global

/*
   mobx 中的 object 是封装过后的 observable 结构, 如果 obsered-object 被用于 containers 中的子组件,
   data 不会及时响应,需要处理成 toJSON 的 raw 结构
   需要在 store 的"端点"去除 mobx 的数据结构
   注意！ 该函数只应用户 store -> UI 的最后一个环节， store 内部之间的数据关联需要这种 obserable data
 */
export const stripMobx = obj =>
  R.map(v => {
    if (isObject(v) && R.has('$mobx')) {
      return v.toJSON()
    }
    return v
  }, obj)

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

export const storeSelector = R.curry((wantedStore, props) => ({
  [wantedStore]: R.path(['store', wantedStore], props),
}))

const matchResolver = (resolveArray, data) => {
  for (let i = 0; i < resolveArray.length; i += 1) {
    if (resolveArray[i].match(data)) {
      return resolveArray[i].action(data)
    }
  }
  console.log('unMatched resovle data: ', data)
}

/*
 * a helper to easly deal with sr71$ return data/error
 * example: sub$ = sr71$.data().subscribe($solve(dataResolver, errResovler))
*/
export const $solver = R.curry((dataResolver, errResolver, data) => {
  if (data.error) {
    return matchResolver(errResolver, data)
  }
  return matchResolver(dataResolver, data)
})

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

export const markStates = (sobj, self) => {
  if (!isObject(sobj)) {
    throw new Error('markState get invalid object, exepect a object')
  }
  const selfKeys = R.keys(self)
  R.forEachObjIndexed((val, key) => {
    if (R.contains(key, selfKeys)) {
      self[key] = val
    }
  }, sobj)
}

/*
   can't put this in store, because this method is async
   only boolean now
 */
export const meteorState = (store, state, secs, statusMsg = '') => {
  if (!R.has(state, store)) {
    /* eslint-disable */
    console.error(`Error: meteorState not found ${state}`)
    /* eslint-enable */
    return false
  }

  store.markState({
    [state]: true,
    statusMsg,
  })

  setTimeout(() => {
    store.markState({
      [state]: false,
      statusMsg: '',
    })
  }, secs * 1000)
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

export const holdPage = () => {
  /* eslint-disable no-undef */
  const el = document.getElementById('body')
  /* eslint-enable no-undef */
  el.style.overflowY = 'hidden'
}

export const unholdPage = () => {
  /* eslint-disable no-undef */
  const el = document.getElementById('body')
  /* eslint-enable no-undef */

  el.style.overflowY = 'auto'
}
