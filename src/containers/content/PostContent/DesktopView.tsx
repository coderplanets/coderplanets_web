/*
 *
 * PostContent
 *
 */

import React, { FC, useRef } from 'react'
import { Waypoint } from 'react-waypoint'

import { pluggedIn, buildLog } from '@/utils'

import Comments from '@/containers/unit/Comments'
// import ArticleAuthorCard from '@/containers/unit/ArticleAuthorCard'
import ArticleSticker from '@/containers/tool/ArticleSticker'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'

import type { TStore } from './store'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles/desktop_view'

import { useInit, checkAnchor } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

type TProps = {
  postContent?: TStore
  testid?: string
  metric?: string
}

const PostContentContainer: FC<TProps> = ({
  postContent: store,
  metric,
  testid,
}) => {
  useInit(store)

  const { viewingArticle } = store
  const ref = useRef()

  return (
    <Wrapper testid={testid}>
      <Maybe test={viewingArticle.id}>
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
              {/* @ts-ignore */}
              <Comments ssr />
            </CommentsWrapper>
          </MainWrapper>
          <SidebarWrapper>
            <ArticleSticker />
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default pluggedIn(PostContentContainer) as FC<TProps>
