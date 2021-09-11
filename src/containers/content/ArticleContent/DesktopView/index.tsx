/*
 *
 * general ArticleContent for Post, Job, Blog, Radar ..
 *
 */

import { FC, useRef } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import ArticleSticker from '@/containers/tool/ArticleSticker'
import ArtimentBody from '@/components/ArtimentBody'
// import ArticleFooter from '@/containers/unit/ArticleFooter'

import ViewportTracker from '@/components/ViewportTracker'
import Maybe from '@/components/Maybe'
import { LavaLampLoading } from '@/components/dynamic'

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

export const ArticleFooter = dynamic(
  () => import('@/containers/unit/ArticleFooter'),
  {
    ssr: false,
  },
)

export const Comments = dynamic(() => import('@/containers/unit/Comments'), {
  /* eslint-disable react/display-name */
  loading: () => <LavaLampLoading size="small" />,
  ssr: false,
})

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
              <ArtimentBody document={viewingArticle.document} />
              <ArticleFooter />
            </ArticleWrapper>

            <ViewportTracker
              onEnter={() => checkAnchor(ref?.current)}
              onLeave={() => checkAnchor(ref?.current)}
            />
            <CommentsWrapper>
              <Comments ssr />
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
