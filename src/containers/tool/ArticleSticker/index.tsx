//

/*
 *
 * ArticleSticker
 *
 */

import { FC, Fragment } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import { METRIC } from '@/constant'

import Sticky from '@/components/Sticky'
import GotoTop from '@/components/GotoTop'

import type { TStore } from './store'

import LeftSticker from './LeftSticker/index'
import RightSticker from './RightSticker'
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
    viewingData,
    activeThread,
    isTocMenuOpened,
    isArticleDigestInViewport,
    showCommentSticker,
  } = store

  return (
    <Fragment>
      <LeftSticker
        show={showLeftSticker}
        title={viewingData.title}
        isTocMenuOpened={isTocMenuOpened}
      />

      <Sticky offsetTop={120}>
        <Wrapper testid={testid} metric={metric}>
          <InnerWrapper>
            <MainWrapper>
              <RightSticker
                show={!showCommentSticker}
                article={viewingData}
                thread={activeThread}
              />
              <CommentSticker show={showCommentSticker} data={viewingData} />
            </MainWrapper>
            <GoTopWrapper show={!isArticleDigestInViewport}>
              <GotoTop />
            </GoTopWrapper>
          </InnerWrapper>
        </Wrapper>
      </Sticky>
    </Fragment>
  )
}

export default pluggedIn(ArticleStickerContainer) as FC<TProps>
