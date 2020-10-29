/*
 * ArticleFooter store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:ArticleFooter')

const ArticleFooter = T.model('ArticleFooter', {
  showActionPanel: T.optional(T.boolean, false),
  actionPanelType: T.optional(
    T.enumeration(['reference-list', 'operation-list']),
    'operation-list',
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewingData() {
      return self.root.viewingData
    },
    get showReferenceList() {
      const { showActionPanel, actionPanelType } = self

      return showActionPanel && actionPanelType === 'reference-list'
    },
    get showOperationList() {
      const { showActionPanel, actionPanelType } = self

      return showActionPanel && actionPanelType === 'operation-list'
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleFooter
