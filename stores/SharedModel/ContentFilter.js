import { types as t } from 'mobx-state-tree'

import { FILTER } from '../../utils'

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
    ]),
    ''
  ),
  wordLength: t.optional(
    t.enumeration('length', ['', FILTER.MOST_WORDS, FILTER.LEAST_WORDS]),
    ''
  ),
  readState: t.optional(
    t.enumeration('readState', ['', FILTER.READED, FILTER.UNREAD]),
    ''
  ),
  jobSalary: t.optional(t.string, ''),
  jobExp: t.optional(t.string, ''),
  jobEducation: t.optional(t.string, ''),
  jobField: t.optional(t.string, ''),
  jobFinace: t.optional(t.string, ''),
  jobScale: t.optional(t.string, ''),
})

export const holder = 1
