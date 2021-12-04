/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'
import Link from 'next/link'

import type { TPost, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import { ArchivedSign } from '@/widgets/dynamic'
import { SpaceGrow } from '@/widgets/Common'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import ArticleBelongCommunity from '@/widgets/ArticleBelongCommunity'
import DotDivider from '@/widgets/DotDivider'
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
  const { author } = article

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
          <Link href={`/u/${author.login}`} passHref>
            <AuthorName>&#9865; &nbsp;{author.nickname}</AuthorName>
          </Link>
        </BottomInfo>
      </Main>
      <CommunityInfo>
        <ArticleBelongCommunity article={article} />
      </CommunityInfo>
    </Fragment>
  )
}

export default memo(PostLayout)
