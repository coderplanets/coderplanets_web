import { inject, observer } from 'mobx-react'

import R from 'ramda'
import { isObject } from '../utils'

export const storePlug = R.curry((wantedStore, props) => ({
  [wantedStore]: R.path(['store', wantedStore], props),
}))

/*
 * a helper to easly deal with sr71$ return data/error
 * example: sub$ = sr71$.data().subscribe($solve(dataResolver, errResovler))
 */
const matchResolver = (resolveArray, data) => {
  for (let i = 0; i < resolveArray.length; i += 1) {
    if (resolveArray[i].match(data)) {
      return resolveArray[i].action(data)
    }
  }

  console.log('unMatched resovle data: ', data)
}

export const $solver = R.curry(
  (dataResolver, errResolver, data) =>
    data.error
      ? matchResolver(errResolver, data)
      : matchResolver(dataResolver, data)
)

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

export const stripMobx = obj => {
  if (!obj) return obj

  return R.map(v => {
    if (isObject(v) && R.has('$mobx')) {
      return v.toJSON()
    }
    return v
  }, obj)
}

/*
 *  make life easier by using the redux like connent syntax
 *  inject allows function see: https://github.com/mobxjs/mobx-react/blob/master/README.md
 *  inspired by https://gist.github.com/mostr/e8366c9fb64d23b96f5fc05ce23b572c
 */

/*
   mobx 中的 object 是封装过后的 observable 结构, 如果 obsered-object 被用于 containers 中的子组件,
   data 不会及时响应,需要处理成 toJSON 的 raw 结构
   需要在 store 的"端点"去除 mobx 的数据结构
   注意！ 该函数只应用户 store -> UI 的最后一个环节， store 内部之间的数据关联需要这种 obserable data
 */

export const observerHoc = (selector, Component) => {
  const injectPlus =
    typeof selector === 'function' ? inject(selector) : inject(...selector)
  return injectPlus(observer(Component))
}
