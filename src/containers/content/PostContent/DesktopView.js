/*
 *
 * PostContent
 *
 */

import React, { useRef } from 'react'
import { Waypoint } from 'react-waypoint'

import { connectStore, buildLog, isElementInViewport } from '@/utils'

import Comments from '@/containers/unit/Comments'
// import ArticleAuthorCard from '@/containers/unit/ArticleAuthorCard'
import ArticleSticker from '@/containers/tool/ArticleSticker'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles/desktop_view'

import { useInit, articleInAnchor, articleOutAnchor } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

const checkAnchor = (el) =>
  isElementInViewport(el) ? articleInAnchor() : articleOutAnchor()

const PostContentContainer = ({ postContent: store }) => {
  useInit(store)

  const { viewingData } = store
  const ref = useRef()

  return (
    <Wrapper>
      <Maybe test={viewingData.id}>
        <InnerWrapper>
          <Waypoint
            onEnter={() => checkAnchor(ref?.current)}
            onLeave={() => checkAnchor(ref?.current)}
          />
          <MainWrapper>
            <ArticleWrapper ref={ref}>
              <MarkDownRender body={viewingData.body} />
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
            <ArticleSticker />
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default connectStore(PostContentContainer)
