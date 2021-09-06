/* eslint-disable react/display-name */

import { Fragment, memo } from 'react'
import { isEmpty } from 'ramda'

import { THREAD, TYPE } from '@/constant'
import { Trans } from '@/utils/i18n'

import EmptyThread from '@/components/EmptyThread'
import EmptyLabel from '@/components/EmptyLabel'
import MasonryCards from '@/components/MasonryCards'

import PostItem from '@/components/PostItem'
import JobItem from '@/components/JobItem'
import BlogItem from '@/components/BlogItem'
import RadarItem from '@/components/RadarItem'

const ArticleList = (props) => {
  const { thread, resState, community, emptyPrefix, entries, c11n } = props

  if (resState === TYPE.RES_STATE.EMPTY) {
    return (
      <Fragment>
        {isEmpty(emptyPrefix) ? (
          <EmptyThread community={community} thread={thread} />
        ) : (
          <EmptyLabel
            text={`${emptyPrefix}${Trans(thread)}信息`}
            size="large"
          />
        )}
      </Fragment>
    )
  }

  switch (thread) {
    case THREAD.JOB:
      return (
        <MasonryCards column={2}>
          {entries.map((entry) => (
            <JobItem key={entry.id} entry={entry} c11n={c11n} />
          ))}
        </MasonryCards>
      )

    case THREAD.BLOG:
      return (
        <Fragment>
          {entries.map((entry) => (
            <BlogItem key={entry.id} entry={entry} c11n={c11n} />
          ))}
        </Fragment>
      )

    case THREAD.RADAR:
      return (
        <MasonryCards column={2}>
          {entries.map((entry) => (
            <RadarItem key={entry.id} entry={entry} c11n={c11n} />
          ))}
        </MasonryCards>
      )

    default:
      // common post
      return (
        <Fragment>
          {entries.map((entry) => (
            <PostItem key={entry.id} entry={entry} c11n={c11n} />
          ))}
        </Fragment>
      )
  }
}

export default memo(ArticleList)
