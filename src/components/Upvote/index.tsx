/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser, TUpvote } from '@/spec'
import { buildLog } from '@/utils'

import DefaultLayout from './DefaultLayout'
import CommentLayout from './CommentLayout'
import ArticleLayout from './ArticleLayout'
import WorksArticleLayout from './WorksArticleLayout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  type?: TUpvote
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
}

const Upvote: FC<TProps> = ({ type = 'default', ...restProps }) => {
  switch (type) {
    case 'comment': {
      return <CommentLayout {...restProps} />
    }
    case 'works-article': {
      return <WorksArticleLayout {...restProps} />
    }
    case 'article': {
      return <ArticleLayout {...restProps} />
    }
    default: {
      return <DefaultLayout {...restProps} />
    }
  }
}

export default memo(Upvote)
