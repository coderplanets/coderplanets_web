import React from 'react'

import AvatarFallback from '@/components/AvatarFallback'

import {
  Wrapper,
  InnerWrapper,
  BaseInfo,
  Title,
  Avatar,
} from '../../../styles/top_bar/mobile_view/article_bar'

const ArticleBar = ({ visiable, viewingArticle }) => {
  const { author, title } = viewingArticle

  return (
    <Wrapper visiable={visiable}>
      <InnerWrapper>
        <BaseInfo>
          <Avatar
            src={`${author.avatar}`}
            fallback={<AvatarFallback width="16px" />}
          />
          <Title>{title}</Title>
        </BaseInfo>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ArticleBar)
