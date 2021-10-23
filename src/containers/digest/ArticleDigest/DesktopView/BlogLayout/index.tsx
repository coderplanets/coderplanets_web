/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TBlog, TMetric } from '@/spec'
import { METRIC } from '@/constant'
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
} from '../../styles/desktop_view/blog_layout'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TBlog
  metric?: TMetric
}

const tabItems = [
  {
    title: '摘要',
    raw: 'digest',
  },
  {
    title: '历史文章',
    raw: 'feeds',
  },
  {
    title: '作者信息',
    raw: 'author',
  },
]

const BlogLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <Header>
          <LinkIcon />
          <LinkInfo href={article.linkAddr} target="_blank">
            {cutRest(article.linkAddr, 40)}
          </LinkInfo>
          <SpaceGrow />
          <ArticleMenu />
        </Header>
        <Title>{article.title}</Title>
        <BottomInfo>
          <ArticleBaseStats article={article} />
          <AuthorName>by: {article.author.nickname}</AuthorName>
          <TabWrapper>
            <Tabs
              items={tabItems}
              size="small"
              activeKey="digest"
              bottomSpace={10}
            />
          </TabWrapper>
        </BottomInfo>
      </Main>
      <CommunityInfo>
        <ArticleBelongCommunity article={article} />
      </CommunityInfo>
    </Fragment>
  )
}

export default memo(BlogLayout)
