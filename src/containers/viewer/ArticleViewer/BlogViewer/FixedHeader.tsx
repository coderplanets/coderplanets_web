import { FC, memo } from 'react'
import type { TArticle } from '@/spec'

import Upvote from '@/widgets/Upvote'
import { Wrapper, ArticleTitle } from '../styles/blog_viewer/fixed_header'

type TProps = {
  article: TArticle
  visible?: boolean
}

const FixedHeader: FC<TProps> = ({ article, visible }) => {
  const { upvotesCount, meta } = article

  return (
    <Wrapper visible={visible}>
      <ArticleTitle>{article.title}</ArticleTitle>
      <Upvote count={upvotesCount} avatarList={meta.latestUpvotedUsers} />
    </Wrapper>
  )
}

export default memo(FixedHeader)
