/*
* ErrorBox store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, ERR } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:ErrorBox')

const ErrorBox = t
  .model('ErrorBox', {
    show: t.optional(t.boolean, false),
    type: t.optional(
      t.enumeration('type', [ERR.GRAPHQL, ERR.NETWORK, ERR.TIMEOUT]),
      ERR.GRAPHQL
    ),
    operation: t.optional(t.string, '--'),
  })
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
