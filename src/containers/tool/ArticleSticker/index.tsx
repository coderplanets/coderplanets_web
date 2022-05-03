//

/*
 *
 * ArticleSticker
 *
 */

import { FC, Fragment } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { METRIC } from '@/constant'

import Sticky from '@/widgets/Sticky'
import GotoTop from '@/widgets/GotoTop'

import type { TStore } from './store'

// import LeftSticker from './LeftSticker/index'
import RightSticker from './RightSticker'

import { Wrapper, InnerWrapper, MainWrapper, GoTopWrapper } from './styles'
import { useInit } from './logic'

import LeftSticker from './LeftSticker'
import CommentSticker from './CommentSticker'

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
  const { commentsState } = store

  const {
    viewingArticle,
    activeThread,
    showArticleAction,
    isArticleDigestInViewport,
    showCommentSticker,
  } = store

  return (
    <Fragment>
      <LeftSticker show={showArticleAction} article={viewingArticle} />

      <Sticky offsetTop={105}>
        <Wrapper testid={testid} metric={metric}>
          <InnerWrapper>
            <MainWrapper>
              <RightSticker
                show={showArticleAction}
                article={viewingArticle}
                thread={activeThread}
              />
              <CommentSticker
                show={showCommentSticker}
                commentsState={commentsState}
              />
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

export default bond(ArticleStickerContainer, 'articleSticker') as FC<TProps>
