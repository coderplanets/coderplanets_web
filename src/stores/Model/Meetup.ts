import { types as T } from 'mobx-state-tree'

import { articleFields } from './helper/article'
import { pagiFields } from './helper/common'

export const Meetup = T.model('Meetups', {
  ...articleFields(),
})

export const PagedMeetups = T.model('PagedMeetups', {
  entries: T.optional(T.array(Meetup), []),
  ...pagiFields(),
})
