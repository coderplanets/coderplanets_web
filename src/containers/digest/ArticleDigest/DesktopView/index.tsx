/*
 *
 * ArticleDigest
 *
 */

import { FC } from 'react'
import { isNil } from 'ramda'
import { Waypoint } from 'react-waypoint'

import type { TScrollDirection } from '@/spec'
import { METRIC } from '@/constant'
import { useScroll } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import ArticleBaseStats from '@/components/ArticleBaseStats'
import SubCommunity from './SubCommunity'
import PublishDate from './PublishDate'
// import DotDivider from '@/components/DotDivider'
// import { Space } from '@/components/Common'

import Title from './Title'

import type { TStore } from '../store'

import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  Main,
  AuthorName,
  BottomInfo,
  SubWrapper,
} from '../styles/desktop_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  articleDigest?: TStore
  testid?: string
  metric?: string
}

const ArticleDigestContainer: FC<TProps> = ({
  articleDigest: store,
  testid = 'article-digest',
  metric = METRIC.ARTICLE,
}) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection as TScrollDirection)

  const { activeThread, viewingArticle } = store

  if (isNil(viewingArticle.id)) return null

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <BannerContent>
          <Main metric={metric}>
            <PublishDate insertedAt={viewingArticle.insertedAt} />
            <Title thread={activeThread} data={viewingArticle} />
            <BottomInfo>
              <ArticleBaseStats article={viewingArticle} />
              <AuthorName>mydearxym</AuthorName>
            </BottomInfo>
          </Main>
          <SubWrapper>
            <SubCommunity />
          </SubWrapper>
        </BannerContent>
      </InnerWrapper>
      <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

export default pluggedIn(ArticleDigestContainer) as FC<TProps>
