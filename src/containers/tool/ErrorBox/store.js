/*
 * ErrorBox store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { ERR } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

const Message = T.model('Message', {
  message: T.string,
  key: T.optional(T.string, ''),
  code: T.optional(T.number, 0),
})

const ChangesetError = T.model('ChangesetError', {
  code: T.maybeNull(T.number),
  message: T.array(Message),
})

const ErrorBox = T.model('ErrorBox', {
  show: T.optional(T.boolean, false),
  type: T.optional(
    T.enumeration('type', [ERR.GRAPHQL, ERR.NETWORK, ERR.TIMEOUT]),
    ERR.GRAPHQL,
  ),
  operation: T.optional(T.string, '--'),
  path: T.maybeNull(T.string),

  timeoutError: T.optional(T.string, '--'),
  // spec type of ERR.GRAPHQL
  graphqlType: T.optional(
    T.enumeration('graphqlType', ['changeset', 'parse', 'custom']),
    'changeset',
  ),
  customError: T.maybeNull(T.array(Message)),
  parseError: T.maybeNull(T.array(Message)),
  changesetError: T.maybeNull(T.array(ChangesetError)),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get changesetErrorData() {
      return toJS(self.changesetError)
    },
    get customErrorData() {
      return toJS(self.customError)
    },
    get parseErrorData() {
      return toJS(self.parseError)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ErrorBox