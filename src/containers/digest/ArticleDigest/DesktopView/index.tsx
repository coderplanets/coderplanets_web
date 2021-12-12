/*
 * ArticleDigest
 */

import { FC } from 'react'
import { isNil } from 'ramda'

import type { TScrollDirection, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import useScroll from '@/hooks/useScroll'
import usePlatform from '@/hooks/usePlatform'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import ViewportTracker from '@/widgets/ViewportTracker'
import { CollectionFolder, FixedHeader } from './dynamic'
import Layout from './Layout'

import type { TStore } from '../store'
import {
  Wrapper,
  InnerWrapper,
  BannerContent,
} from '../styles/desktop_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  articleDigest?: TStore
  testid?: string
  metric?: TMetric
}

const ArticleDigestContainer: FC<TProps> = ({
  articleDigest: store,
  testid = 'article-digest',
  metric = METRIC.ARTICLE,
}) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection as TScrollDirection)

  const { isMobile } = usePlatform()
  const { viewingArticle, inViewport, activeThread, tab } = store

  if (isNil(viewingArticle.id)) return null

  return (
    <Wrapper testid={testid} metric={metric}>
      {!isMobile && <CollectionFolder />}

      <FixedHeader
        show={!inViewport}
        article={viewingArticle}
        metric={metric}
      />
      <InnerWrapper>
        <BannerContent>
          <Layout
            article={viewingArticle}
            thread={activeThread}
            metric={metric}
            tab={tab}
          />
        </BannerContent>
      </InnerWrapper>
      <ViewportTracker onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

export default pluggedIn(ArticleDigestContainer) as FC<TProps>
