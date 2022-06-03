import { FC, memo } from 'react'

import type { TArticle, TMetric, TThread } from '@/spec'
import { METRIC } from '@/constant'

import ArticleCatState from '@/widgets/ArticleCatState'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'

import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  RightWrapper,
  Title,
  ArticleStateBadgeWrapper,
} from '../styles/desktop_view/fixed_header'

type TProps = {
  article: TArticle
  metric?: TMetric
  show?: boolean
  testid?: string
}
const FixedHeader: FC<TProps> = ({
  article,
  show = false,
  metric = METRIC.ARTICLE,
  testid = 'article-fixed-header',
}) => {
  const { meta } = article
  const thread = meta.thread.toLowerCase() as TThread

  return (
    <Wrapper show={show} testid={testid}>
      <InnerWrapper metric={metric}>
        <ContentWrapper metric={metric}>
          <Title>{article.title}</Title>
          <ArticleStateBadgeWrapper>
            {article.id === '239' && <ArticleCatState cat="FEATURE" />}
            {article.id === '231' && <ArticleCatState cat="BUG" />}
            {article.id === '227' && <ArticleCatState cat="BUG" state="TODO" />}
            {article.id === '228' && (
              <ArticleCatState cat="FEATURE" state="WIP" />
            )}
            {article.id === '226' && (
              <ArticleCatState cat="QUESTION" state="RESOLVE" />
            )}
            {article.id === '225' && (
              <ArticleCatState cat="LOCK" state="LOCK" />
            )}
          </ArticleStateBadgeWrapper>
        </ContentWrapper>
        <RightWrapper metric={metric} thread={thread}>
          <ArticleBaseStats article={article} container="drawer" />
        </RightWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(FixedHeader)
