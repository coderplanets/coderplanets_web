import React from 'react'

import ImgFallback from '@/components/ImgFallback'

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
            fallback={<ImgFallback user={author} width={16} />}
          />
          <Title>{title}</Title>
        </BaseInfo>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ArticleBar)
