//

/*
 *
 * ArticleSticker
 *
 */

import { FC, Fragment } from 'react'

import type { TMetric } from '@/spec'
import { pluggedIn, buildLog } from '@/utils'
import { METRIC } from '@/constant'

import Sticky from '@/components/Sticky'
import GotoTop from '@/components/GotoTop'

import type { TStore } from './store'

import LeftSticker from './LeftSticker/index'
// import CommunitySticker from './CommunitySticker'
// import ArticleSticker from './ArticleSticker'
import WorksSticker from './WorksSticker/index'
import CommentSticker from './CommentSticker'

import { Wrapper, InnerWrapper, MainWrapper, GoTopWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleSticker')

type TProps = {
  articleSticker?: TStore
  testid?: string
  metric?: TMetric
}

const ArticleStickerContainer: FC<TProps> = ({
  articleSticker: store,
  testid = 'article-sticker',
  metric = METRIC.ARTICLE,
}) => {
  useInit(store)

  const {
    showLeftSticker,
    // showCommunity,
    viewingData,
    isTocMenuOpened,
    showCommentSticker,
  } = store

  return (
    <Fragment>
      <LeftSticker
        show={showLeftSticker}
        title={viewingData.title}
        isTocMenuOpened={isTocMenuOpened}
      />

      <Sticky offsetTop={80}>
        <Wrapper testid={testid} metric={metric}>
          <InnerWrapper>
            <MainWrapper>
              {/* {showCommunity && <CommunitySticker />} */}
              <WorksSticker viewing={viewingData} show={!showCommentSticker} />
              {/* <ArticleSticker
                viewing={viewingData}
                show={!showCommentSticker}
              /> */}
              <CommentSticker show={showCommentSticker} data={viewingData} />
            </MainWrapper>
            <GoTopWrapper>
              <GotoTop />
            </GoTopWrapper>
          </InnerWrapper>
        </Wrapper>
      </Sticky>
    </Fragment>
  )
}

export default pluggedIn(ArticleStickerContainer) as FC<TProps>
