import { FC } from 'react'

import type { TMetric } from '@/spec'
import { BLOG_TAB } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

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

  const { viewingArticle: article, articleTab, blogRssInfoData } = store
  if (!article.id) return null

  if (articleTab === BLOG_TAB.FEEDS) {
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

  if (articleTab === BLOG_TAB.AUTHOR) {
    return (
      <Wrapper testid={testid}>
        <InnerWrapper>
          <AuthorTab metric={metric} author={blogRssInfoData.author} />
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
        <ArticleTab metric={metric} article={article} />
        <SidebarWrapper>
          <ArticleSticker metric={metric} />
        </SidebarWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(ArticleContentContainer, 'articleContent') as FC<TProps>
