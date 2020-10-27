//

/*
 *
 * ArticleSticker
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog, scrollToHeader } from '@/utils'
import { ICON, ICON_BASE } from '@/config'

import Sticky from '@/components/Sticky'
import { Button } from '@/components/Buttons'
import { Br } from '@/components/Common'

import LeftSticker from './LeftSticker/index'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  ItemWrapper,
  ItemHint,
  CommunityIcon,
  LikeIcon,
  CollectIcon,
  ShareIcon,
  AirBalloonIcon,
  CommunityTitle,
  Number,
  Text,
  Divider,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleSticker')

const ArticleStickerContainer = ({ articleSticker: store, testId }) => {
  useInit(store)

  const {
    showLeftSticker,
    showCommunity,
    viewingData,
    isTocMenuOpened,
    isLeftStickerLocked,
  } = store

  log('isLeftStickerLocked: ', isLeftStickerLocked)

  return (
    <React.Fragment>
      <LeftSticker
        show={showLeftSticker}
        title={viewingData.title}
        isTocMenuOpened={isTocMenuOpened}
      />

      <Sticky offsetTop={100}>
        <Wrapper testId={testId}>
          <InnerWrapper>
            <MainWrapper>
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
                  {viewingData.starredCount}&nbsp;<Text>喜欢</Text>
                </Number>
              </ItemWrapper>
              <Br top="15px" />
              <ItemWrapper>
                <CollectIcon src={`${ICON}/collect-solid.svg`} />
                <ItemHint>收藏</ItemHint>
              </ItemWrapper>
              <Br top="16px" />
              <ItemWrapper>
                <ShareIcon src={`${ICON}/share.svg`} />
                <ItemHint bottom="-2px">分享</ItemHint>
              </ItemWrapper>
            </MainWrapper>
            <ItemWrapper onClick={scrollToHeader}>
              <AirBalloonIcon src={`${ICON}/shape/air-balloon.svg`} />
              <ItemHint right="-28px" bottom="-2px">
                回到顶部
              </ItemHint>
            </ItemWrapper>
          </InnerWrapper>
        </Wrapper>
      </Sticky>
    </React.Fragment>
  )
}

ArticleStickerContainer.propTypes = {
  articleSticker: T.any.isRequired,
  testId: T.string,
}

ArticleStickerContainer.defaultProps = {
  testId: 'article-sticker',
}

export default connectStore(ArticleStickerContainer)
