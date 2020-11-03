import React from 'react'

import { ICON } from '@/config'
import { Br } from '@/components/Common'

import {
  Wrapper,
  ItemWrapper,
  ItemHint,
  LikeIcon,
  CollectIcon,
  ShareIcon,
  Number,
  Text,
} from './styles/article_sticker'

const CommonSticker = ({ show, viewing }) => {
  return (
    <Wrapper show={show}>
      <ItemWrapper>
        <LikeIcon src={`${ICON}/article/heart-solid.svg`} />
        <Number>
          {viewing.starredCount}&nbsp;<Text>喜欢</Text>
        </Number>
      </ItemWrapper>
      <Br top="16px" />
      <ItemWrapper>
        <CollectIcon src={`${ICON}/article/collect.svg`} />
        <ItemHint>收藏</ItemHint>
      </ItemWrapper>
      <Br top="18px" />
      <ItemWrapper>
        <ShareIcon src={`${ICON}/share.svg`} />
        <ItemHint bottom="-2px">分享</ItemHint>
      </ItemWrapper>
    </Wrapper>
  )
}

export default React.memo(CommonSticker)
