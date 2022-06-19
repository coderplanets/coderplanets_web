import { FC } from 'react'

import type { TPost, TCommunity } from '@/spec'
import { UPVOTE_LAYOUT, ARTICLE_CAT } from '@/constant'

import { cutRest } from '@/utils/helper'

import ArticleCatState from '@/widgets/ArticleCatState'
import Upvote from '@/widgets/Upvote'
import { Space, SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  Extra,
  UpvotesWrapper,
  BasicState,
  BodyDigest,
  ViewIcon,
  CommentIcon,
} from '../../styles/upvote_fist_layout/mobile_view/footer'

type TProps = {
  article: TPost
  curCommunity: TCommunity
}

const Footer: FC<TProps> = ({ article, curCommunity }) => {
  const { upvotesCount, meta, viewerHasUpvoted } = article

  return (
    <Wrapper>
      <BodyDigest>{cutRest(article.digest, 20)}</BodyDigest>
      <Extra>
        <UpvotesWrapper>
          <Upvote
            count={upvotesCount}
            avatarList={meta.latestUpvotedUsers}
            viewerHasUpvoted={viewerHasUpvoted}
            type={UPVOTE_LAYOUT.KANBAN}
            left={-2}
          />
        </UpvotesWrapper>

        {article.category !== ARTICLE_CAT.DEFAULT && (
          <ArticleCatState cat={article.category} state={article.state} />
        )}
        <SpaceGrow />

        <BasicState>
          <ViewIcon />
          <div>{article.views}</div>
          <Space right={12} />
          <CommentIcon />
          <div>{article.commentsCount}</div>
        </BasicState>
      </Extra>
    </Wrapper>
  )
}

export default Footer
