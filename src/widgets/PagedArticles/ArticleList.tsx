/* eslint-disable react/display-name */

import { Fragment, memo } from 'react'

import { THREAD, TYPE } from '@/constant'
import PostItem from '@/widgets/PostItem'
import JobItem from '@/widgets/JobItem'
import BlogItem from '@/widgets/BlogItem'
import RadarItem from '@/widgets/RadarItem'

import MasonryCards from '@/widgets/MasonryCards'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'
import { EmptyThread } from './dynamic'

const ArticleList = (props) => {
  const { curCommunity, thread, resState, entries, c11n } = props

  // switch between threads
  if (resState === TYPE.RES_STATE.LOADING && entries.length === 0) {
    return <LavaLampLoading top={20} left={30} />
  }

  // 加入 length 的判断是因为 Graphql 客户端如果有缓存的话会导致 RES_STATE 没有更新（因为没有请求）
  if (
    (resState === TYPE.RES_STATE.EMPTY && entries.length === 0) ||
    (resState === TYPE.RES_STATE.DONE && entries.length === 0)
  ) {
    // @ts-ignore
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
            <BlogItem
              key={entry.id}
              entry={entry}
              c11n={c11n}
              curCommunity={curCommunity}
            />
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
      // return <h3>PostItems</h3>
      return (
        <Fragment>
          {entries.map((entry) => (
            <PostItem
              key={entry.id}
              entry={entry}
              c11n={c11n}
              curCommunity={curCommunity}
            />
          ))}
        </Fragment>
      )
  }
}

export default memo(ArticleList)
