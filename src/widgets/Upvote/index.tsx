/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser, TUpvoteLayout, TSpace } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'
import { buildLog } from '@/utils/logger'

import DefaultLayout from './DefaultLayout'
import KanbanLayout from './KanbanLayout'
import FixedHeaderLayout from './FixedHeaderLayout'
import CommentLayout from './CommentLayout'
import PostListLayout from './PostListLayout'
import GuideListLayout from './GuideListLayout'
import BlogListLayout from './BlogListLayout'
import ArticleLayout from './ArticleLayout'
// import WorksArticleLayout from './WorksArticleLayout'
// import WorksCardLayout from './WorksCardLayout'
import StickerLayout from './StickerLayout'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:Upvote:index')

type TProps = {
  testid?: string
  type?: TUpvoteLayout
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
  onAction?: (did: boolean) => void
} & TSpace

const Upvote: FC<TProps> = ({
  type = UPVOTE_LAYOUT.DEFAULT,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  ...restProps
}) => {
  let Layout = null

  switch (type) {
    case UPVOTE_LAYOUT.COMMENT: {
      Layout = CommentLayout
      break
    }
    case UPVOTE_LAYOUT.POST_LIST: {
      Layout = PostListLayout
      break
    }
    case UPVOTE_LAYOUT.GUIDE_LIST: {
      Layout = GuideListLayout
      break
    }
    case UPVOTE_LAYOUT.BLOG_LIST: {
      Layout = BlogListLayout
      break
    }
    // case UPVOTE_LAYOUT.WORKS_ARTICLE: {
    //   Layout = WorksArticleLayout
    //   break
    // }
    // case UPVOTE_LAYOUT.WORKS_CARD: {
    //   Layout = WorksCardLayout
    //   break
    // }
    case UPVOTE_LAYOUT.ARTICLE: {
      Layout = ArticleLayout
      break
    }
    case UPVOTE_LAYOUT.KANBAN: {
      Layout = KanbanLayout
      break
    }
    case UPVOTE_LAYOUT.FIXED_HEADER: {
      Layout = FixedHeaderLayout
      break
    }
    case UPVOTE_LAYOUT.STICKER: {
      Layout = StickerLayout
      break
    }
    default: {
      Layout = DefaultLayout
      break
    }
  }

  return (
    <Wrapper left={left} right={right} top={top} bottom={bottom}>
      <Layout {...restProps} />
    </Wrapper>
  )
}

export default memo(Upvote)
