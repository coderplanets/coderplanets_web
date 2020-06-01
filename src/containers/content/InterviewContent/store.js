/*
 * InterviewContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:InterviewContent')

const InterviewContent = T.model('InterviewContent', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default InterviewContent
