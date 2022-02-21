/*
 *
 * PostContent
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import { ArticleFooter, Comments } from '@/containers/dynamic'
import Maybe from '@/widgets/Maybe'
import ViewportTracker from '@/widgets/ViewportTracker'

import type { TStore } from '../store'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from '../styles/mobile_view'

import { useInit, articleInAnchor, articleOutAnchor } from '../logic'

export const MarkDownRender = dynamic(
  () => import('@/widgets/MarkDownRender'),
  {
    ssr: false,
  },
)

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

type TProps = {
  articleContent?: TStore
  testid?: string
}

const ArticleContentContainer: FC<TProps> = ({
  articleContent: store,
  testid = 'article-content',
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
              <Comments />
            </CommentsWrapper>
          </MainWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default bond(ArticleContentContainer, 'articleContent') as FC<TProps>
