/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TPost, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import { SpaceGrow } from '@/widgets/Common'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import ArticleBelongCommunity from '@/widgets/ArticleBelongCommunity'
import DotDivider from '@/widgets/DotDivider'
import ArchivedSign from '@/widgets/ArchivedSign'
import ArticleMenu from '@/widgets/ArticleMenu'
import ReadableDate from '@/widgets/ReadableDate'

import {
  Main,
  Header,
  PublishDateInfo,
  Title,
  AuthorName,
  BottomInfo,
  CommunityInfo,
} from '../styles/desktop_view/post_layout'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TPost
  metric?: TMetric
}

const PostLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <Header>
          <PublishDateInfo>
            <ReadableDate date={article.insertedAt} fmt="absolute" />
          </PublishDateInfo>
          {article.isArchived && (
            <Fragment>
              <DotDivider space={8} />
              <ArchivedSign date={article.archivedAt} />
            </Fragment>
          )}
          <SpaceGrow />
          <ArticleMenu article={article} />
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

export default memo(PostLayout)
