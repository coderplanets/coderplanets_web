import React from 'react'

import type { TArticle } from '@/spec'
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

type TProps = {
  show: boolean
  viewing: TArticle
}

const ArticleSticker: React.FC<TProps> = ({ show, viewing }) => {
  return (
    <Wrapper show={show}>
      <ItemWrapper>
        <LikeIcon src={`${ICON}/article/heart-solid.svg`} />
        <Number>
          {viewing.starredCount}&nbsp;<Text>喜欢</Text>
        </Number>
      </ItemWrapper>
      <Br top={16} />
      <ItemWrapper>
        <CollectIcon src={`${ICON}/article/collect.svg`} />
        <ItemHint>收藏</ItemHint>
      </ItemWrapper>
      <Br top={18} />
      <ItemWrapper>
        <ShareIcon src={`${ICON}/share.svg`} />
        <ItemHint bottom={-2}>分享</ItemHint>
      </ItemWrapper>
    </Wrapper>
  )
}

export default React.memo(ArticleSticker)
