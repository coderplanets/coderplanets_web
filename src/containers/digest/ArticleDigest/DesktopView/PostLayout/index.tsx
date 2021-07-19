/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TPost } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils'

import ArticleBaseStats from '@/components/ArticleBaseStats'
import SubCommunity from './SubCommunity'
import PublishDate from './PublishDate'

import {
  Main,
  Title,
  AuthorName,
  BottomInfo,
  SubWrapper,
} from '../../styles/desktop_view/post_layout/index'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TPost
  metric?: string
}

const PostLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <PublishDate insertedAt={article.insertedAt} />
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
