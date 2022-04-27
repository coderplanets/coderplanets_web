/*
 *
 * ArticleBaseStats
 *
 */

import { FC, memo } from 'react'

import type { TArticle, TContainer } from '@/spec'
import { scrollToComments } from '@/utils/dom'

import { Space } from '@/widgets/Common'
import {
  Wrapper,
  ViewsIcon,
  CommentWrapper,
  CommentIcon,
  Count,
  CommentCount,
} from './styles'

type TProps = {
  testid?: string
  article: TArticle
  container?: TContainer
}

const ArticleBaseStats: FC<TProps> = ({
  testid = 'article-base-stats',
  container = 'body',
  article,
}) => {
  return (
    <Wrapper testid={testid}>
      <ViewsIcon />
      <Count>{article.views}</Count>
      <Space left={18} />
      <CommentWrapper onClick={() => scrollToComments(container)}>
        <CommentIcon />
        <CommentCount>{article.commentsCount}</CommentCount>
      </CommentWrapper>
    </Wrapper>
  )
}

export default memo(ArticleBaseStats)
