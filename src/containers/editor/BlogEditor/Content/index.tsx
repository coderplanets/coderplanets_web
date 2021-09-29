import { FC, memo } from 'react'

import type { TBlogRSS } from '@/spec'

import FeedList from './FeedList'
import RSSInputer from './RSSInputer'
import AuthorInputer from './AuthorInputer'

type TProps = {
  step: 'STEP_1' | 'STEP_2' | 'STEP_3'
  rss: string
  loading: boolean
  rssInfo: TBlogRSS
  filterTitle: string
}

const Content: FC<TProps> = ({ step, rss, loading, rssInfo, filterTitle }) => {
  switch (step) {
    case 'STEP_2': {
      return <FeedList rssInfo={rssInfo} filterTitle={filterTitle} />
    }

    case 'STEP_3': {
      return <AuthorInputer rssInfo={rssInfo} />
    }

    default: {
      return <RSSInputer rss={rss} loading={loading} />
    }
  }
}

export default memo(Content)
