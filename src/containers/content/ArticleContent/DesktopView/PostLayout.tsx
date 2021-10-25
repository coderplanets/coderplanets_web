/*
 *
 * general ArticleContent for Post, Job, Blog, Radar ..
 *
 */

import { FC, useRef } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import { ArticleFooter, Comments } from '@/containers/dynamic'
import ArticleSticker from '@/containers/tool/ArticleSticker'
import ArtimentBody from '@/widgets/ArtimentBody'

import ViewportTracker from '@/widgets/ViewportTracker'

import type { TStore } from '../store'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from '../styles/desktop_view/post_layout'

import { useInit, checkAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

type TProps = {
  articleContent?: TStore
  testid?: string
  metric?: TMetric
}

const ArticleContentContainer: FC<TProps> = ({
  articleContent: store,
  metric,
  testid,
}) => {
  useInit(store)

  const { viewingArticle } = store
  const ref = useRef()

  if (!viewingArticle.id) return null

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <ViewportTracker
          onEnter={() => checkAnchor(ref?.current)}
          onLeave={() => checkAnchor(ref?.current)}
        />
        <MainWrapper metric={metric}>
          <ArticleWrapper ref={ref}>
            <ArtimentBody document={viewingArticle.document} />
            <ArticleFooter metric={metric} />
          </ArticleWrapper>

          <ViewportTracker
            onEnter={() => checkAnchor(ref?.current)}
            onLeave={() => checkAnchor(ref?.current)}
          />
          <CommentsWrapper>
            <Comments />
          </CommentsWrapper>
        </MainWrapper>
        <SidebarWrapper>
          <ArticleSticker metric={metric} />
        </SidebarWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleContentContainer) as FC<TProps>