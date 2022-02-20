import { FC } from 'react'

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
import { toJS as toJSON } from 'mobx'

import type { TEditValue } from '@/spec'
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
 * NOTE:  consider use useAccount or useViewing in @/hooks if you want to access those spec store
 * 注意: 如果是获取 account 或 viewing 的数据，考虑使用 @/hooks 中的 useAccount 或者 useViewing
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
): FC => {
  let subStoreName = ''
  if (store) {
    subStoreName = store
  } else {
    const cname = head(split('Container', container.name))
    subStoreName = toLower(head(cname)) + cname.slice(1)
  }

  return inject(storeFilter(subStoreName))(observer(container))
}

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

export const toJS = (obj: any): any => {
  if (!obj) return obj
  return toJSON(obj)
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
  v: TEditValue,
): void => {
  if (!store) return
  if (!store.updateEditing) {
    // eslint-disable-next-line no-console
    return console.warn('Error: updateEditing not found in store: ', store)
  }

  let value = v
  // @ts-ignore
  if (isObject(v) && has('target', v)) {
    /* eslint-disable prefer-destructuring */
    // @ts-ignore
    value = v.target.value
    /* eslint-enable prefer-destructuring */
  }

  store.updateEditing({ [part]: value })
}
