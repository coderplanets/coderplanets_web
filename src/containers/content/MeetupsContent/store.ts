/*
 * MeetupsContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import type { TPagedMeetups } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { PagedMeetups, emptyPagi } from '@/model'

const MeetupsContent = T.model('MeetupsContent', {
  pagedMeetups: T.optional(PagedMeetups, emptyPagi),
})
  .views((self) => ({
    get pagedMeetupsData(): TPagedMeetups {
      return toJS(self.pagedMeetups)
    },
  }))
  // .views((self) => ({}))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof MeetupsContent>
export default MeetupsContent
