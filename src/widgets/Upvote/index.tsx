/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser, TUpvoteLayout } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'
import { buildLog } from '@/utils/logger'

import DefaultLayout from './DefaultLayout'
import CommentLayout from './CommentLayout'
import PostListLayout from './PostListLayout'
import GuideListLayout from './GuideListLayout'
import BlogListLayout from './BlogListLayout'
import ArticleLayout from './ArticleLayout'
import WorksArticleLayout from './WorksArticleLayout'
import WorksCardLayout from './WorksCardLayout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  type?: TUpvoteLayout
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
  onAction?: (did: boolean) => void
}

const Upvote: FC<TProps> = ({ type = UPVOTE_LAYOUT.DEFAULT, ...restProps }) => {
  switch (type) {
    case UPVOTE_LAYOUT.COMMENT: {
      return <CommentLayout {...restProps} />
    }
    case UPVOTE_LAYOUT.POST_LIST: {
      return <PostListLayout {...restProps} />
    }
    case UPVOTE_LAYOUT.GUIDE_LIST: {
      return <GuideListLayout {...restProps} />
    }
    case UPVOTE_LAYOUT.BLOG_LIST: {
      return <BlogListLayout {...restProps} />
    }
    case UPVOTE_LAYOUT.WORKS_ARTICLE: {
      return <WorksArticleLayout {...restProps} />
    }
    case UPVOTE_LAYOUT.WORKS_CARD: {
      return <WorksCardLayout {...restProps} />
    }
    case UPVOTE_LAYOUT.ARTICLE: {
      return <ArticleLayout {...restProps} />
    }
    default: {
      return <DefaultLayout {...restProps} />
    }
  }
}

export default memo(Upvote)
