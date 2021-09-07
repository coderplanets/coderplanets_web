/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TPost, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import { SpaceGrow } from '@/components/Common'
import ArticleBaseStats from '@/components/ArticleBaseStats'
import DotDivider from '@/components/DotDivider'
import ArchivedSign from '@/components/ArchivedSign'
import ArticleMenu from '@/components/ArticleMenu'

import OriginalCommunity from './OriginalCommunity'
import PublishDate from './PublishDate'

import {
  Main,
  Header,
  Title,
  AuthorName,
  BottomInfo,
  CommunityInfo,
} from '../../styles/desktop_view/post_layout/index'

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
          <PublishDate insertedAt={article.insertedAt} />
          {article.isArchived && (
            <Fragment>
              <DotDivider space={8} />
              <ArchivedSign date={article.archivedAt} />
            </Fragment>
          )}
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
        <OriginalCommunity community={article.originalCommunity} />
      </CommunityInfo>
    </Fragment>
  )
}

export default memo(PostLayout)
