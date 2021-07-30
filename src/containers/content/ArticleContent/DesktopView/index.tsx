/*
 *
 * general ArticleContent for Post, Job, Blog, Radar ..
 *
 */

import { FC, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Waypoint } from 'react-waypoint'

import type { TMetric } from '@/spec'
import { pluggedIn, buildLog } from '@/utils'

// import Comments from '@/containers/unit/Comments'
import ArticleSticker from '@/containers/tool/ArticleSticker'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'
import { LavaLampLoading } from '@/components/Loading'

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
          <Waypoint
            onEnter={() => checkAnchor(ref?.current)}
            onLeave={() => checkAnchor(ref?.current)}
          />
          <MainWrapper metric={metric}>
            <ArticleWrapper ref={ref}>
              <MarkDownRender body={viewingArticle.body} />
              <ArticleFooter />
            </ArticleWrapper>

            <Waypoint
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
