import { FC, memo } from 'react'

import FeedList from './FeedList'
import RSSInputer from './RSSInputer'
import AuthorInputer from './AuthorInputer'

type TProps = {
  step: 'STEP_1' | 'STEP_2' | 'STEP_3'
}

const Content: FC<TProps> = ({ step }) => {
  switch (step) {
    case 'STEP_2': {
      return <FeedList />
    }

    case 'STEP_3': {
      return <AuthorInputer />
    }

    default: {
      return <RSSInputer />
    }
  }
}

export default memo(Content)
