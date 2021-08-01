/*
 *
 * PostContent
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Comments from '@/containers/unit/Comments'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'
import ViewportTracker from '@/components/ViewportTracker'

import type { TStore } from '../store'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from '../styles/mobile_view'

import { useInit, articleInAnchor, articleOutAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

type TProps = {
  postContent?: TStore
  testid?: string
}

const PostContentContainer: FC<TProps> = ({
  postContent: store,
  testid = 'post-content',
}) => {
  useInit(store)
  const { viewingArticle } = store

  return (
    <Wrapper testid={testid}>
      <Maybe test={!!viewingArticle.id}>
        <InnerWrapper>
          <MainWrapper>
            <ArticleWrapper>
              <MarkDownRender body={viewingArticle.body} />
            </ArticleWrapper>
            <ViewportTracker
              onEnter={articleInAnchor}
              onLeave={articleOutAnchor}
            />
            <ArticleFooter />
            <CommentsWrapper>
              {/* @ts-ignore */}
              <Comments ssr />
            </CommentsWrapper>
          </MainWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default pluggedIn(PostContentContainer) as FC<TProps>
