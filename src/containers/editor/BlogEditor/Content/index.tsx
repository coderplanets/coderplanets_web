import { FC, memo } from 'react'

import type { TBlog } from '@/spec'

import FeedList from './FeedList'
import RSSInputer from './RSSInputer'
import AuthorInputer from './AuthorInputer'

type TProps = {
  step: 'STEP_1' | 'STEP_2' | 'STEP_3'
  rss: string
  feeds: TBlog[]
}

const Content: FC<TProps> = ({ step, rss, feeds }) => {
  switch (step) {
    case 'STEP_2': {
      return <FeedList rss={rss} feeds={feeds} />
    }

    case 'STEP_3': {
      return <AuthorInputer rss={rss} />
    }

    default: {
      return <RSSInputer rss={rss} />
    }
  }
}

export default memo(Content)
