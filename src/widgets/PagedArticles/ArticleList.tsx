/* eslint-disable react/display-name */

import { Fragment, memo } from 'react'

import { THREAD, TYPE } from '@/constant'
import PostItem from '@/widgets/PostItem'
import JobItem from '@/widgets/JobItem'
import BlogItem from '@/widgets/BlogItem'
import RadarItem from '@/widgets/RadarItem'

import MasonryCards from '@/widgets/MasonryCards'
import { LavaLampLoading, EmptyThread } from './dynamic'

const ArticleList = (props) => {
  const { thread, resState, entries, c11n } = props

  // switch between threads
  if (resState === TYPE.RES_STATE.LOADING && entries.length === 0) {
    return <LavaLampLoading top={20} left={30} />
  }

  if (resState === TYPE.RES_STATE.EMPTY) {
    return <EmptyThread thread={thread} />
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
