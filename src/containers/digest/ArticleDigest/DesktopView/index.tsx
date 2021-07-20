/*
 *
 * ArticleDigest
 *
 */

import { FC } from 'react'
import { isNil } from 'ramda'
import { Waypoint } from 'react-waypoint'

import type { TScrollDirection, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { useScroll } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

// import PostLayout from './PostLayout'
import WorksLayout from './WorksLayout'

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

  console.log('article digest metric: ', metric)

  const { viewingArticle } = store

  if (isNil(viewingArticle.id)) return null

  return (
    <Wrapper testid={testid} metric={metric}>
      <InnerWrapper>
        <BannerContent>
          <WorksLayout article={viewingArticle} metric={metric} />
          {/* <PostLayout article={viewingArticle} /> */}
        </BannerContent>
      </InnerWrapper>
      <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

export default pluggedIn(ArticleDigestContainer) as FC<TProps>
