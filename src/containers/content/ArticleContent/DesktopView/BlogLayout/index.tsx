/*
 *
 * general ArticleContent for Post, Job, Blog, Radar ..
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import ArticleSticker from '@/containers/tool/ArticleSticker'

import ArticleTab from './ArticleTab'
import FeedsTab from './FeedsTab'
import AuthorTab from './AuthorTab'

import type { TStore } from '../../store'

import {
  Wrapper,
  InnerWrapper,
  SidebarWrapper,
} from '../../styles/desktop_view/blog_layout'

import { useInit } from '../../logic'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent')

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

  const { viewingArticle, articleTab, blogRssInfoData } = store
  // log('>>>## blogRssInfoData: ', blogRssInfoData)
  log('articleTab: ', articleTab)

  if (!viewingArticle.id) return null
  if (articleTab === 'feeds') {
    return (
      <Wrapper testid={testid}>
        <InnerWrapper>
          <FeedsTab metric={metric} items={blogRssInfoData.historyFeed} />
          <SidebarWrapper>
            <ArticleSticker metric={metric} />
          </SidebarWrapper>
        </InnerWrapper>
      </Wrapper>
    )
  }

  if (articleTab === 'author') {
    return (
      <Wrapper testid={testid}>
        <InnerWrapper>
          <AuthorTab metric={metric} />
          <SidebarWrapper>
            <ArticleSticker metric={metric} />
          </SidebarWrapper>
        </InnerWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper testid={testid}>
      <InnerWrapper>
        <ArticleTab metric={metric} article={viewingArticle} />
        <SidebarWrapper>
          <ArticleSticker metric={metric} />
        </SidebarWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleContentContainer) as FC<TProps>
