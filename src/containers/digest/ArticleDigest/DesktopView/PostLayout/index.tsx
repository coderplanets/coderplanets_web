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

import SubCommunity from './SubCommunity'
import PublishDate from './PublishDate'

import {
  Main,
  Header,
  Title,
  AuthorName,
  BottomInfo,
  SubWrapper,
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
          <DotDivider space={8} />
          <ArchivedSign />
          <SpaceGrow />
          <ArticleMenu />
        </Header>
        <Title>{article.title}</Title>
        <BottomInfo>
          <ArticleBaseStats article={article} />
          <AuthorName>by: mydearxym</AuthorName>
        </BottomInfo>
      </Main>
      <SubWrapper>
        <SubCommunity />
      </SubWrapper>
    </Fragment>
  )
}

export default memo(PostLayout)
