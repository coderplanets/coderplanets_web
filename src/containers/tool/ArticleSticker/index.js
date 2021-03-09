//

/*
 *
 * ArticleSticker
 *
 */

import React from 'react'
import T from 'prop-types'

import { pluggedIn, buildLog } from '@/utils'

import Sticky from '@/components/Sticky'
import GotoTop from '@/components/GotoTop'

import LeftSticker from './LeftSticker/index'
import CommunitySticker from './CommunitySticker'
import ArticleSticker from './ArticleSticker'
import CommentSticker from './CommentSticker'

import { Wrapper, InnerWrapper, MainWrapper, GoTopWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleSticker')

const ArticleStickerContainer = ({ articleSticker: store, testid }) => {
  useInit(store)

  const {
    showLeftSticker,
    showCommunity,
    viewingData,
    isTocMenuOpened,
    showCommentSticker,
  } = store

  return (
    <React.Fragment>
      <LeftSticker
        show={showLeftSticker}
        title={viewingData.title}
        isTocMenuOpened={isTocMenuOpened}
      />

      <Sticky offsetTop={80}>
        <Wrapper testid={testid}>
          <InnerWrapper>
            <MainWrapper>
              {showCommunity && <CommunitySticker />}
              <ArticleSticker
                viewing={viewingData}
                show={!showCommentSticker}
              />
              <CommentSticker show={showCommentSticker} data={viewingData} />
            </MainWrapper>
            <GoTopWrapper>
              <GotoTop />
            </GoTopWrapper>
          </InnerWrapper>
        </Wrapper>
      </Sticky>
    </React.Fragment>
  )
}

ArticleStickerContainer.propTypes = {
  articleSticker: T.any.isRequired,
  testid: T.string,
}

ArticleStickerContainer.defaultProps = {
  testid: 'article-sticker',
}

export default pluggedIn(ArticleStickerContainer)
