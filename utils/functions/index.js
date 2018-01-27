import R from 'ramda'
import PubSub from 'pubsub-js'

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

/* eslint-disable */
// TODO: document ?
export const Global = typeof window !== 'undefined' ? window : global

export const isObject = value => {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}
/* eslint-enable */

export const storeSelector = R.curry((wantedStore, props) => ({
  [wantedStore]: R.path(['store', wantedStore], props),
}))

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
    throw new Error('markState get no object params')
  }
  R.forEachObjIndexed((val, key) => {
    self[key] = val
  }, sobj)
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
// export const notEmptyValue = R.compose(R.not, isEmptyValue)

/*
export const notEmptyArray = (value) => {
  return Array.isArray(this.resv_event) && this.resv_event.length > 0
}
*/

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
