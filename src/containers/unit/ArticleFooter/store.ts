/*
 * ArticleFooter store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TArticle, TRootStore } from '@/spec'
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
    get viewingData(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewingData
    },
    get showReferenceList(): boolean {
      const { showActionPanel, actionPanelType } = self

      return showActionPanel && actionPanelType === 'reference-list'
    },
    get showOperationList(): boolean {
      const { showActionPanel, actionPanelType } = self

      return showActionPanel && actionPanelType === 'operation-list'
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleFooter>
export default ArticleFooter
