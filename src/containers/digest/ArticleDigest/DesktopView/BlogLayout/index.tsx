/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TBlog, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import { SpaceGrow } from '@/widgets/Common'
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
  CommunityInfo,
} from '../../styles/desktop_view/blog_layout/index'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TBlog
  metric?: TMetric
}

const BlogLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <Header>
          <LinkIcon />
          <LinkInfo href={article.linkAddr} target="_blank">
            {article.linkAddr}
          </LinkInfo>
          <SpaceGrow />
          <ArticleMenu />
        </Header>
        <Title>{article.title}</Title>
        <BottomInfo>
          <ArticleBaseStats article={article} />
          <AuthorName>by: {article.author.nickname}</AuthorName>
        </BottomInfo>
      </Main>
      <CommunityInfo>
        <ArticleBelongCommunity article={article} />
      </CommunityInfo>
    </Fragment>
  )
}

export default memo(BlogLayout)
