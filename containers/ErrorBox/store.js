/*
 * ErrorBox store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { ERR } from '@constant'
import { markStates, buildLog, stripMobx } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:ErrorBox')

const Message = t.model('Message', {
  message: t.string,
  key: t.optional(t.string, ''),
  code: t.optional(t.number, 0),
})

const ChangesetError = t.model('ChangesetError', {
  code: t.maybeNull(t.number),
  message: t.array(Message),
})

const ErrorBox = t
  .model('ErrorBox', {
    show: t.optional(t.boolean, false),
    type: t.optional(
      t.enumeration('type', [ERR.GRAPHQL, ERR.NETWORK, ERR.TIMEOUT]),
      ERR.GRAPHQL
    ),
    operation: t.optional(t.string, '--'),
    path: t.maybeNull(t.string),

    timeoutError: t.optional(t.string, '--'),
    // spec type of ERR.GRAPHQL
    graphqlType: t.optional(
      t.enumeration('graphqlType', ['changeset', 'parse', 'custom']),
      'changeset'
    ),
    customError: t.maybeNull(t.array(Message)),
    parseError: t.maybeNull(t.array(Message)),
    changesetError: t.maybeNull(t.array(ChangesetError)),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get changesetErrorData() {
      return stripMobx(self.changesetError)
    },
    get customErrorData() {
      return stripMobx(self.customError)
    },
    get parseErrorData() {
      return stripMobx(self.parseError)
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ErrorBox
