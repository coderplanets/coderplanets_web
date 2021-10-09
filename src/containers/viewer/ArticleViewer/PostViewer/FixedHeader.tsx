import { FC, memo } from 'react'
import type { TArticle } from '@/spec'

import Upvote from '@/components/Upvote'
import { Wrapper, ArticleTitle } from '../styles/post_viewer/fixed_header'
import { handleUpvote } from '../logic'

type TProps = {
  article: TArticle
  visible?: boolean
}

const FixedHeader: FC<TProps> = ({ article, visible }) => {
  const { upvotesCount, viewerHasUpvoted, meta } = article

  return (
    <Wrapper visible={visible}>
      <ArticleTitle>{article.title}</ArticleTitle>
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
