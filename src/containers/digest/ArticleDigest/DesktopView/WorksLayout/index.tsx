/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TPost } from '@/spec'
import { METRIC, UPVOTE_LAYOUT } from '@/constant'
import { buildLog } from '@/utils'

import ArticleBaseStats from '@/components/ArticleBaseStats'
import Upvote from '@/components/Upvote'

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

const WorksLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <Title>{article.title}</Title>
        <BottomInfo>
          <ArticleBaseStats article={article} />
          <AuthorName>by: mydearxym</AuthorName>
        </BottomInfo>
      </Main>
      <SubWrapper>
        <Upvote count={17} type={UPVOTE_LAYOUT.WORKS_ARTICLE} />
      </SubWrapper>
    </Fragment>
  )
}

export default memo(WorksLayout)
