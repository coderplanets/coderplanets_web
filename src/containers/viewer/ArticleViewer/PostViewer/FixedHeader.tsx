import { FC, memo } from 'react'
import type { TArticle } from '@/spec'

import Upvote from '@/widgets/Upvote'
import GTDBadge from '@/widgets/GTDBadge'

import {
  Wrapper,
  LeftPart,
  ArticleTitle,
  GTDBadgeWrapper,
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
        <GTDBadgeWrapper>
          {article.id === '239' && <GTDBadge type="FEATURE" />}
          {article.id === '231' && <GTDBadge type="BUG" />}
          {article.id === '227' && <GTDBadge type="BUG" state="TODO" />}
          {article.id === '228' && <GTDBadge type="FEATURE" state="WIP" />}
        </GTDBadgeWrapper>
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
