import { types as T } from 'mobx-state-tree'

import { FILTER } from '@/constant'

export const ArticlesFilter = T.model('ArticlesFilter', {
  when: T.optional(
    T.enumeration('when', [
      '',
      FILTER.TODAY,
      FILTER.THIS_WEEK,
      FILTER.THIS_MONTH,
      FILTER.THIS_YEAR,
    ]),
    '',
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
    '',
  ),
  length: T.optional(
    T.enumeration('length', ['', FILTER.MOST_WORDS, FILTER.LEAST_WORDS]),
    '',
  ),
  read: T.optional(T.enumeration('read', ['', FILTER.READ, FILTER.UNREAD]), ''),
})

export const holder = 1
