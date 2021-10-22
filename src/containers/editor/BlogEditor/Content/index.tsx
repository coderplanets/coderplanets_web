import { FC, memo } from 'react'

import type { TBlogRSS, TBlog } from '@/spec'
import type { TValidState } from '../spec'

import FeedList from './FeedList'
import RSSInputer from './RSSInputer'
import AuthorInputer from './AuthorInputer'

type TProps = {
  step: 'STEP_1' | 'STEP_2' | 'STEP_3'
  rss: string
  loading: boolean
  rssInfo: TBlogRSS
  filterTitle: string
  validState: TValidState
  activeBlog: TBlog
}

const Content: FC<TProps> = ({
  step,
  rss,
  loading,
  rssInfo,
  filterTitle,
  validState,
  activeBlog,
}) => {
  switch (step) {
    case 'STEP_2': {
      return (
        <FeedList
          rssInfo={rssInfo}
          filterTitle={filterTitle}
          activeBlog={activeBlog}
        />
      )
    }

    case 'STEP_3': {
      return <AuthorInputer rssInfo={rssInfo} activeBlog={activeBlog} />
    }

    default: {
      return <RSSInputer rss={rss} loading={loading} validState={validState} />
    }
  }
}

export default memo(Content)
