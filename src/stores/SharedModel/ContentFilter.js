import { types as T } from 'mobx-state-tree'

import { FILTER } from '@/constant'

export const ContentFilter = T.model('ContentFilter', {
  when: T.optional(
    T.enumeration('when', [
      '',
      FILTER.TODAY,
      FILTER.THIS_WEEK,
      FILTER.THIS_MONTH,
      FILTER.THIS_YEAR,
    ]),
    ''
  ),

  sort: T.optional(
    T.enumeration('sort', [
      '',
      FILTER.MOST_VIEWS,
      FILTER.MOST_FAVORITES,
      FILTER.MOST_STARS,
      FILTER.MOST_COMMENTS,
      FILTER.MOST_GITHUB_STAR,
      FILTER.MOST_GITHUB_FORK,
      FILTER.MOST_GITHUB_WATCH,
    ]),
    ''
  ),
  length: T.optional(
    T.enumeration('length', ['', FILTER.MOST_WORDS, FILTER.LEAST_WORDS]),
    ''
  ),
  // job
  salary: T.optional(T.string, ''),
  exp: T.optional(T.string, ''),
  education: T.optional(T.string, ''),
  field: T.optional(T.string, ''),
  finance: T.optional(T.string, ''),
  scale: T.optional(T.string, ''),
  // video
  source: T.optional(T.string, ''),
  read: T.optional(T.enumeration('read', ['', FILTER.READ, FILTER.UNREAD]), ''),
})

export const holder = 1
