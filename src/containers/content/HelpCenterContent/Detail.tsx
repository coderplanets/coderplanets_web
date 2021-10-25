import { FC } from 'react'

import CollapseMenu from '@/widgets/CollapseMenu'

import type { TCommunity, TVisibles } from './spec'
import Footer from './Footer'

import {
  Wrapper,
  ContentWrapper,
  ArticleWrapper,
  MenuWrapper,
} from './styles/detail'

type TProps = {
  community: TCommunity
  visibles: TVisibles
}

const Detail: FC<TProps> = ({ community, visibles }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ArticleWrapper>帮助详情</ArticleWrapper>
        <Footer community={community} visibles={visibles} />
      </ContentWrapper>
      <MenuWrapper>
        <CollapseMenu />
      </MenuWrapper>
    </Wrapper>
  )
}

export default Detail
