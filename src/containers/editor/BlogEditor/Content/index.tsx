import { FC, memo } from 'react'

import type { TBlogRSS } from '@/spec'
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
}

const Content: FC<TProps> = ({
  step,
  rss,
  loading,
  rssInfo,
  filterTitle,
  validState,
}) => {
  switch (step) {
    case 'STEP_2': {
      return <FeedList rssInfo={rssInfo} filterTitle={filterTitle} />
    }

    case 'STEP_3': {
      return <AuthorInputer rssInfo={rssInfo} />
    }

    default: {
      return <RSSInputer rss={rss} loading={loading} validState={validState} />
    }
  }
}

export default memo(Content)
