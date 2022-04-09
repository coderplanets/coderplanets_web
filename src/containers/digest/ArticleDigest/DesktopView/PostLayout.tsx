/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'
import Link from 'next/link'

import type { TPost, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import { ArchivedSign } from '@/widgets/dynamic'
import Upvote from '@/widgets/Upvote'
import { SpaceGrow } from '@/widgets/Common'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
// import ArticleBelongCommunity from '@/widgets/ArticleBelongCommunity'
import DotDivider from '@/widgets/DotDivider'
import ArticleMenu from '@/widgets/ArticleMenu'
import ReadableDate from '@/widgets/ReadableDate'

import {
  Main,
  Header,
  PublishDateInfo,
  UpvoteInfo,
  Title,
  AuthorName,
  BottomInfo,
  // CommunityInfo,
} from '../styles/desktop_view/post_layout'
// import { subscribeCommunity, unsubscribeCommunity } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TPost
  metric?: TMetric
}

const PostLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  const {
    author,
    title,
    insertedAt,
    isArchived,
    archivedAt,
    upvotesCount,
    meta,
    viewerHasUpvoted,
  } = article

  return (
    <Fragment>
      <Main metric={metric}>
        <Header>
          <Link href={`/u/${author.login}`} passHref>
            <AuthorName>{author.nickname}</AuthorName>
          </Link>
          <DotDivider space={12} />
          <PublishDateInfo>
            <ReadableDate date={insertedAt} fmt="absolute" withTime={false} />
          </PublishDateInfo>
          {isArchived && (
            <Fragment>
              <DotDivider space={8} />
              <ArchivedSign date={archivedAt} />
            </Fragment>
          )}
          <SpaceGrow />
          <UpvoteInfo>
            <Upvote
              count={upvotesCount}
              avatarList={meta.latestUpvotedUsers}
              viewerHasUpvoted={viewerHasUpvoted}
              type="comment"
            />
          </UpvoteInfo>
        </Header>
        <Title>{title}</Title>
        <BottomInfo>
          <ArticleBaseStats article={article} />
          <ArticleMenu article={article} />
        </BottomInfo>
      </Main>
      {/* <CommunityInfo>
        <ArticleBelongCommunity
          article={article}
          onFollow={() => subscribeCommunity()}
          onUndoFollow={() => unsubscribeCommunity()}
        />
      </CommunityInfo> */}
    </Fragment>
  )
}

export default memo(PostLayout)
