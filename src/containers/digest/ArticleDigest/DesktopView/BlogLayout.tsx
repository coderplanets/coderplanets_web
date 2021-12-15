/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TBlog, TMetric } from '@/spec'
import { METRIC, BLOG_TAB_ITEMS } from '@/constant'
import { buildLog } from '@/utils/logger'
import { cutRest } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import Tabs from '@/widgets/Switcher/Tabs'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import ArticleBelongCommunity from '@/widgets/ArticleBelongCommunity'
import ArticleMenu from '@/widgets/ArticleMenu'

import {
  Main,
  Header,
  LinkInfo,
  LinkIcon,
  Title,
  AuthorName,
  BottomInfo,
  TabWrapper,
  CommunityInfo,
} from '../styles/desktop_view/blog_layout'
import {
  onBlogTabChange,
  subscribeCommunity,
  unsubscribeCommunity,
} from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TBlog
  metric?: TMetric
  tab: string
}

const BlogLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article, tab }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <Header>
          <LinkIcon />
          <LinkInfo href={article.linkAddr} target="_blank">
            {cutRest(article.linkAddr, 40)}
          </LinkInfo>
          <SpaceGrow />
          <ArticleMenu article={article} />
        </Header>
        <Title>{article.title}</Title>
        <BottomInfo>
          <ArticleBaseStats article={article} />
          <AuthorName>by: {article.author.nickname}</AuthorName>
          <TabWrapper>
            <Tabs
              items={BLOG_TAB_ITEMS}
              size="small"
              activeKey={tab}
              bottomSpace={10}
              onChange={onBlogTabChange}
            />
          </TabWrapper>
        </BottomInfo>
      </Main>
      <CommunityInfo>
        <ArticleBelongCommunity
          article={article}
          onFollow={() => subscribeCommunity()}
          onUndoFollow={() => unsubscribeCommunity()}
        />
      </CommunityInfo>
    </Fragment>
  )
}

export default memo(BlogLayout)
