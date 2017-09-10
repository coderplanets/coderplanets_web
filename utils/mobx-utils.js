/*
 *  make life easier by using the redux like connent syntax
 *  inject allows function see: https://github.com/mobxjs/mobx-react/blob/master/README.md
 *  inspired by https://gist.github.com/mostr/e8366c9fb64d23b96f5fc05ce23b572c
 */

import { inject, observer } from 'mobx-react'

const observerHoc = (selector, Component) => {
  const injectPlus =
    typeof selector === 'function' ? inject(selector) : inject(...selector)
  return injectPlus(observer(Component))
}

export default observerHoc
