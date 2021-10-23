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
import NoticeBar from '@/widgets/NoticeBar'
import ArtimentBody from '@/widgets/ArtimentBody'

import ViewportTracker from '@/widgets/ViewportTracker'
import Maybe from '@/widgets/Maybe'

import type { TStore } from '../store'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from '../styles/desktop_view'

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

  return (
    <Wrapper testid={testid}>
      <Maybe test={!!viewingArticle.id}>
        <InnerWrapper>
          <ViewportTracker
            onEnter={() => checkAnchor(ref?.current)}
            onLeave={() => checkAnchor(ref?.current)}
          />
          <MainWrapper metric={metric}>
            <ArticleWrapper ref={ref}>
              <NoticeBar
                type="notice"
                content="历史数据来自该博客公开的 RSS，可能会有滞后。"
                top={-8}
                left={-4}
                bottom={5}
                noBg
              />
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
      </Maybe>
    </Wrapper>
  )
}

export default pluggedIn(ArticleContentContainer) as FC<TProps>
