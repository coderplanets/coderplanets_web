import { memo, FC } from 'react'

import type { TArticle } from '@/spec'
import { ICON } from '@/config'

import { IconButton } from '@/components/Buttons'
import DotDivider from '@/components/DotDivider'
import { Space } from '@/components/Common'
import Upvote from '@/components/Upvote'

import {
  Wrapper,
  BaseWrapper,
  ViewIcon,
  Count,
  UpvoteWrapper,
} from '../styles/post_viewer/article_info'

type TProps = {
  article: TArticle
}

const ArticleInfo: FC<TProps> = ({ article }) => {
  return (
    <Wrapper>
      <BaseWrapper>
        <ViewIcon src={`${ICON}/article/viewed.svg`} />{' '}
        <Count>{article.views}</Count>
        <Space right={14} />
        <IconButton path="article/comment.svg" mRight={6} />
        <Count>{article.commentsCount}</Count>
        <DotDivider space={10} />
        <IconButton path="article/collect-solid.svg" />
        <IconButton path="article/report.svg" />
      </BaseWrapper>
      <UpvoteWrapper>
        <Upvote />
      </UpvoteWrapper>
    </Wrapper>
  )
}

export default memo(ArticleInfo)
