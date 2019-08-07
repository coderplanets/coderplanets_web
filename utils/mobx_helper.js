import R from 'ramda'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import { isObject } from './validator'

/*
 * select sub store from root store
 * by design, one container should only access it's own store
 *
 * see: https://github.com/mobxjs/mobx-react Customizing inject
 *
 * 从根状态树中选出子状态树
 * 一个容器组件只能连接到一个和它相关的子状态树
 *
 */
const storeFilter = R.curry((selectedStore, props) => ({
  [selectedStore]: R.path(['store', selectedStore], props),
}))

// TODO: remove it
export const storePlug = R.curry((selectedStore, props) => ({
  [selectedStore]: R.path(['store', selectedStore], props),
}))

/*
 * inject sub-store to container
 * e.g: connectStore(HelloWorldContainer)
   will make HelloWorldContainer connect to 'helloWorld' sub-store
 *
 * 将传入的 container 链接到相对应的子状态树
 * 比如: onnectStore(HelloWorldContainer)
 * 会将 HelloWorldContainer 链接到 'helloWorld' 的子状态树
 *
 * NOTE: container should be naming as XxxContainer (end with Container)
 * 注意： 容器组件的命名需遵守 XxxContainer 的约定规则 (以 Container 结尾)
 *
 */
export const connectStore = (container, store) => {
  let subStoreName = ''
  // console.log('container displayName: ', container.displayName)
  if (store) {
    subStoreName = store
  } else {
    // const cname = R.head(R.split('Container', container.name))
    const cname = R.head(R.split('Container', container.displayName))
    subStoreName = R.toLower(R.head(cname)) + cname.slice(1)
  }

  return inject(storeFilter(subStoreName))(observer(container))
}

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

  console.warn('unMatched resovle data: ', data)
}

export const $solver = R.curry((dataResolver, errResolver, data) =>
  data.error
    ? matchResolver(errResolver, data)
    : matchResolver(dataResolver, data)
)

/*
 * a helper to update mobx state
 * just like setState in normal React component
 */
export const markStates = (sobj, self) => {
  if (!isObject(sobj)) {
    throw new Error('mark: invalid sobj, exepect a object')
  }
  const selfKeys = R.keys(self)

  R.forEachObjIndexed((val, key) => {
    if (!R.contains(key, selfKeys)) return false
    if (
      !R.isEmpty(val) &&
      !Array.isArray(val) &&
      isObject(val) &&
      self[key] !== null
    ) {
      // NOTE: had to use this syntax to update object val
      // because the normal one is NOT WORKING in production build
      // what a mother-fucking bug is this ??? TODO: check later
      self[key] = Object.assign(self[key], val)
    } else {
      self = Object.assign(self, { [key]: val })
    }
  }, sobj)

  return false
}

export const flashState = (store, state, value, secs = 5) => {
  store.mark({ [state]: value })
  setTimeout(() => {
    store.mark({ [state]: '' })
  }, secs * 1000)
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

  store.mark({
    [state]: true,
    statusMsg,
  })

  setTimeout(() => {
    store.mark({
      [state]: false,
      statusMsg: '',
    })
  }, secs * 1000)
  return false
}

export const stripMobx = obj => {
  if (!obj) return obj
  return toJS(obj)

  /*
  return R.map(v => {
    if (isObject(v) && R.has('$mobx')) {
      return v.toJSON()
    }
    return v
  }, obj)
  */
}

/*
 *
 * handle general form data change case
 * NOTE: this method require store has a updateEditing under the hook to do the real update
 *
 */
export const updateEditing = (store, part, e) => {
  if (!store) return false
  if (!store.updateEditing)
    return console.warn('Error: updateEditing not found in store: ', store)

  let value = e
  if (isObject(e) && R.has('target', e)) {
    /* eslint-disable prefer-destructuring */
    value = e.target.value
    /* eslint-enable prefer-destructuring */
  }

  store.updateEditing({ [part]: value })
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
