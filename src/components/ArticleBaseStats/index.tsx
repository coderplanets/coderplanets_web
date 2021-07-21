/*
 *
 * ArticleBaseStats
 *
 */

import { FC, memo } from 'react'

import type { TArticle, TContainer } from '@/spec'
import { ICON } from '@/config'
import { buildLog, scrollToComments } from '@/utils'

import { Space } from '@/components/Common'
import {
  Wrapper,
  ViewsIcon,
  CommentWrapper,
  CommentIcon,
  Count,
  CommentCount,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleBaseStats:index')

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
      <ViewsIcon src={`${ICON}/article/viewed.svg`} />
      <Count>{article.views}</Count>
      <Space left={14} />
      <CommentWrapper onClick={() => scrollToComments(container)}>
        <CommentIcon src={`${ICON}/article/comment.svg`} />
        <CommentCount>{article.commentsCount}</CommentCount>
      </CommentWrapper>
    </Wrapper>
  )
}

export default memo(ArticleBaseStats)
