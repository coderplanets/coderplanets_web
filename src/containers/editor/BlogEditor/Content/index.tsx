import { FC, memo } from 'react'

import type { TBlogRSS, TBlog, TEditMode, TRSSAuthor } from '@/spec'
import type { TValidState, TStep } from '../spec'

import FeedList from './FeedList'
import RSSInputer from './RSSInputer'
import AuthorInputer from './AuthorInputer'

type TProps = {
  mode: TEditMode
  step: TStep
  rss: string
  loading: boolean
  rssInfo: TBlogRSS
  filterTitle: string
  validState: TValidState
  activeBlog: TBlog
  authorInfo: TRSSAuthor
}

const Content: FC<TProps> = ({
  mode,
  step,
  rss,
  loading,
  rssInfo,
  filterTitle,
  validState,
  activeBlog,
  authorInfo,
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
      return (
        <AuthorInputer
          rssInfo={rssInfo}
          activeBlog={activeBlog}
          mode={mode}
          authorInfo={authorInfo}
          loading={loading}
        />
      )
    }

    default: {
      return <RSSInputer rss={rss} loading={loading} validState={validState} />
    }
  }
}

export default memo(Content)
