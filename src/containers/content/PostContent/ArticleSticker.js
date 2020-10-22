import React from 'react'

import { ICON } from '@/config'
import { Br } from '@/components/Common'

import {
  Wrapper,
  ItemWrapper,
  LikeIcon,
  CollectIcon,
  ShareIcon,
  Number,
  Text,
} from './styles/article_sticker'

const ArticleSticker = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <LikeIcon src={`${ICON}/shape/heart.svg`} />
        <Number>
          45&nbsp;<Text>喜欢</Text>
        </Number>
      </ItemWrapper>
      <Br top="18px" />
      <ItemWrapper>
        <CollectIcon src={`${ICON}/collect-solid.svg`} />
      </ItemWrapper>
      <Br top="15px" />
      <ItemWrapper>
        <ShareIcon src={`${ICON}/share.svg`} />
      </ItemWrapper>
    </Wrapper>
  )
}

export default ArticleSticker
