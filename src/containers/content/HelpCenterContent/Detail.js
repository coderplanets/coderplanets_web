import React from 'react'

import CollapseMenu from '@/components/CollapseMenu'

import { Wrapper, ArticleWrapper, MenuWrapper } from './styles/detail'

const Detail = () => {
  return (
    <Wrapper>
      <ArticleWrapper>帮助详情</ArticleWrapper>
      <MenuWrapper>
        <CollapseMenu />
      </MenuWrapper>
    </Wrapper>
  )
}

export default Detail
