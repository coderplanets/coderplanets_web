import { FC, memo } from 'react'
import type { TArticle } from '@/spec'

import Upvote from '@/widgets/Upvote'
import ArticleStateBadge from '@/widgets/ArticleStateBadge'

import {
  Wrapper,
  LeftPart,
  ArticleTitle,
  ArticleStateBadgeWrapper,
} from '../styles/post_viewer/fixed_header'
import { handleUpvote } from '../logic'

type TProps = {
  article: TArticle
  visible?: boolean
}

const FixedHeader: FC<TProps> = ({ article, visible }) => {
  const { upvotesCount, viewerHasUpvoted, meta } = article

  return (
    <Wrapper visible={visible}>
      <LeftPart>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleStateBadgeWrapper>
          {article.id === '239' && <ArticleStateBadge type="FEATURE" />}
          {article.id === '231' && <ArticleStateBadge type="BUG" />}
          {article.id === '227' && (
            <ArticleStateBadge type="BUG" state="TODO" />
          )}
          {article.id === '228' && (
            <ArticleStateBadge type="FEATURE" state="WIP" />
          )}
          {article.id === '226' && (
            <ArticleStateBadge type="QUESTION" state="RESOLVE" />
          )}
          {article.id === '225' && (
            <ArticleStateBadge type="LOCK" state="LOCK" />
          )}
        </ArticleStateBadgeWrapper>
      </LeftPart>
      <Upvote
        count={upvotesCount}
        avatarList={meta.latestUpvotedUsers}
        viewerHasUpvoted={viewerHasUpvoted}
        onAction={(viewerHasUpvoted) => handleUpvote(article, viewerHasUpvoted)}
      />
    </Wrapper>
  )
}

export default memo(FixedHeader)
