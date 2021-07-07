import React from 'react'

import {
  path,
  has,
  curry,
  head,
  split,
  toLower,
  forEachObjIndexed,
  keys,
  isEmpty,
  contains,
} from 'ramda'

import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import { isObject } from './validator'

type TStore = {
  mark: (obj: Record<string, unknown>) => void
  updateEditing?: (obj: Record<string, unknown>) => void
}

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
const storeFilter = curry((selectedStore, props) => ({
  [selectedStore]: path(['store', selectedStore], props),
}))

// TODO: remove it
export const storePlug = curry((selectedStore, props) => ({
  [selectedStore]: path(['store', selectedStore], props),
}))

/*
 * inject sub-store to container
 * e.g: pluggedIn(HelloWorldContainer)
   will make HelloWorldContainer connect to 'helloWorld' sub-store
 *
 * 将传入的 container 链接到相对应的子状态树
 * 比如: onnectStore(HelloWorldContainer)
 * 会将 HelloWorldContainer 链接到 'helloWorld' 的子状态树
 *
 * NOTE: container should be naming as XxxContainer (end with Container)
 * 注意： 容器组件的命名需遵守 XxxContainer 的约定规则 (以 Container 结尾)
 *
 * NOTE:  consider use useMST in @/hooks if you want to use second param
 * 注意: 如果你要使用第二个参数链接命名规则以外的 store, 请考虑使用 @/hooks 中 的 useMST
 *
 * NOTE: KNOWN ISSUE:
 * because the type information of the incoming container cannot be obtained,
 * only an empty React.FC can be returned here, which will cause a type error in
 * the place where this container is used, and it needs to be manually exported where it
 * is used, such as:
 *
 * export default pluggedIn(HelpCenterContentContainer) as FC<TProps>
 * ---
 * 因为无法获取传入的 container 的类型信息，导致这里只能返回一个空的 React.FC,这
 * 会导致使用这个 container 的地方出现类型报错，需要在使用的地方手动导出，比如:
 *
 * export default pluggedIn(HelpCenterContentContainer) as FC<TProps>
 */
export const pluggedIn = (
  // container: React.FC<typeof container>,
  container: React.FC,
  store = '',
): React.FC => {
  let subStoreName = ''
  if (store) {
    subStoreName = store
  } else {
    const cname = head(split('Container', container.displayName))
    subStoreName = toLower(head(cname)) + cname.slice(1)
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

  // eslint-disable-next-line no-console
  console.warn('unMatched resovle data: ', data)
}

export const $solver = curry((dataResolver, errResolver, data) =>
  data.error
    ? matchResolver(errResolver, data)
    : matchResolver(dataResolver, data),
)

/*
 * a helper to update mobx state
 * just like setState in normal React component
 */
export const markStates = (sobj, self) => {
  if (!isObject(sobj)) {
    throw new Error('mark: invalid sobj, exepect a object')
  }
  const selfKeys = keys(self)

  forEachObjIndexed((val, key) => {
    if (!contains(key, selfKeys)) return false
    if (
      !isEmpty(val) &&
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

export const flashState = (
  store: TStore,
  state: string,
  value: string,
  secs = 5,
): void => {
  store.mark({ [state]: value })
  setTimeout(() => {
    store.mark({ [state]: '' })
  }, secs * 1000)
}

/*
   can't put this in store, because this method is async
   only boolean now
 */
export const meteorState = (
  store: TStore,
  state: string,
  secs: number,
  statusMsg = '',
): void => {
  if (!has(state, store)) {
    /* eslint-disable */
    console.error(`Error: meteorState not found ${state}`)
    /* eslint-enable */
    return
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
}

export const stripMobx = (obj: any): any => {
  if (!obj) return obj
  return toJS(obj)
}

/*
 *
 * handle general form data change case
 * NOTE: this method require store has a updateEditing under the hook to do the real update
 *
 */
export const updateEditing = (
  store: TStore,
  part: string,
  e: HTMLElement,
): void => {
  if (!store) return
  if (!store.updateEditing) {
    // eslint-disable-next-line no-console
    return console.warn('Error: updateEditing not found in store: ', store)
  }

  let value = e as HTMLElement
  // @ts-ignore
  if (isObject(e) && has('target', e)) {
    /* eslint-disable prefer-destructuring */
    // @ts-ignore
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
