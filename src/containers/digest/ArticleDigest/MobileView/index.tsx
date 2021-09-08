/*
 *
 * ArticleDigest
 *
 */

import { FC } from 'react'
import { isNil } from 'ramda'

import type { TScrollDirection } from '@/spec'
import useScroll from '@/hooks/useScroll'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import ArticleBaseStats from '@/components/ArticleBaseStats'
import ViewportTracker from '@/components/ViewportTracker'
import ReadableDate from '@/components/ReadableDate'

import type { TStore } from '../store'
import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  PublishDateInfo,
  Title,
  Brief,
} from '../styles/mobile_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  articleDigest?: TStore
}

const ArticleDigestContainer: FC<TProps> = ({ articleDigest: store }) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection as TScrollDirection)

  const { viewingArticle: article } = store

  if (isNil(article.id)) return null

  return (
    <Wrapper>
      <InnerWrapper>
        <BannerContent>
          <Brief>
            <PublishDateInfo>
              <ReadableDate date={article.insertedAt} fmt="absolute" />
            </PublishDateInfo>
            <Title>{article.title}</Title>
            <ArticleBaseStats article={article} />
          </Brief>
        </BannerContent>
      </InnerWrapper>
      <ViewportTracker onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

export default pluggedIn(ArticleDigestContainer) as FC<TProps>
