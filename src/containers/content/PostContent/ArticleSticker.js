import React from 'react'

import { ICON, ICON_BASE } from '@/config'

import { Button } from '@/components/Buttons'
import { Br } from '@/components/Common'

import {
  Wrapper,
  InnerWrapper,
  ItemWrapper,
  CommunityIcon,
  LikeIcon,
  CollectIcon,
  ShareIcon,
  CommunityTitle,
  Number,
  Text,
  Divider,
} from './styles/article_sticker'

const ArticleSticker = () => {
  const showCommunity = false
  return (
    <Wrapper>
      <InnerWrapper>
        {showCommunity && (
          <React.Fragment>
            <ItemWrapper>
              <CommunityIcon src={`${ICON_BASE}/pl/javascript.svg`} />
              <Number>
                <CommunityTitle>Elixir</CommunityTitle>
              </Number>
              <Button size="tiny" ghost>
                &nbsp;加&nbsp;&nbsp;入&nbsp;
              </Button>
            </ItemWrapper>
            <Divider />
          </React.Fragment>
        )}

        <ItemWrapper>
          <LikeIcon src={`${ICON}/shape/heart.svg`} />
          <Number>
            45&nbsp;<Text>喜欢</Text>
          </Number>
        </ItemWrapper>
        <Br top="15px" />
        <ItemWrapper>
          <CollectIcon src={`${ICON}/collect-solid.svg`} />
        </ItemWrapper>
        <Br top="16px" />
        <ItemWrapper>
          <ShareIcon src={`${ICON}/share.svg`} />
        </ItemWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ArticleSticker
