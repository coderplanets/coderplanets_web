/*
 * ErrorBox store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import type { TGQError } from '@/spec'
import { ERR } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

const Message = T.model('Message', {
  message: T.string,
  key: T.optional(T.string, ''),
  path: T.optional(T.string, ''),
  code: T.optional(T.number, 0),
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
  changesetError: T.maybeNull(T.array(Message)),
})
  .views((self) => ({
    get changesetErrorData(): TGQError[] {
      return toJS(self.changesetError)
    },
    get customErrorData(): TGQError[] {
      return toJS(self.customError)
    },
    get parseErrorData(): TGQError[] {
      return toJS(self.parseError)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ErrorBox>
export default ErrorBox
