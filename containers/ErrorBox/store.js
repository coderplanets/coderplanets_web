/*
* ErrorBox store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:ErrorBox')


// NOTE: add me to ../../stores/index && ../../stores/RootStore/index
const ErrorBox = t
  .model('ErrorBox', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ErrorBox
