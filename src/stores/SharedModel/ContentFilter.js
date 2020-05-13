import { types as t } from 'mobx-state-tree'

import { FILTER } from '@/constant'

export const ContentFilter = t.model('ContentFilter', {
  when: t.optional(
    t.enumeration('when', [
      '',
      FILTER.TODAY,
      FILTER.THIS_WEEK,
      FILTER.THIS_MONTH,
      FILTER.THIS_YEAR,
    ]),
    ''
  ),

  sort: t.optional(
    t.enumeration('sort', [
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
  length: t.optional(
    t.enumeration('length', ['', FILTER.MOST_WORDS, FILTER.LEAST_WORDS]),
    ''
  ),
  // job
  salary: t.optional(t.string, ''),
  exp: t.optional(t.string, ''),
  education: t.optional(t.string, ''),
  field: t.optional(t.string, ''),
  finance: t.optional(t.string, ''),
  scale: t.optional(t.string, ''),
  // video
  source: t.optional(t.string, ''),
  read: t.optional(t.enumeration('read', ['', FILTER.READ, FILTER.UNREAD]), ''),
})

export const holder = 1
