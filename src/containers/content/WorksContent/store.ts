/*
 * WorksContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
import { findIndex, propEq, values } from 'ramda'

import type { TPagedWorks } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { PagedWorks, emptyPagi } from '@/model'

import { VIEW } from './constant'

const WorksContent = T.model('WorksContent', {
  pagedWorks: T.optional(PagedWorks, emptyPagi),
  showSidebar: T.optional(T.boolean, false),
  activeView: T.optional(T.enumeration(values(VIEW)), VIEW.WORKS),
})
  .views((self) => ({
    get pagedWorksData(): TPagedWorks {
      return toJS(self.pagedWorks)
    },
  }))
  .actions((self) => ({
    setViewedFlag(id): void {
      const { entries } = self.pagedWorksData
      const index = findIndex(propEq('id', id), entries as Record<'id', any>[])
      if (index >= 0) {
        self.pagedWorks.entries[index].viewerHasViewed = true
      }
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof WorksContent>
export default WorksContent
