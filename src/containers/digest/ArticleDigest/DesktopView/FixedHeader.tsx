import { FC, memo, Fragment } from 'react'

import type { TArticle, TMetric, TThread } from '@/spec'
import { METRIC } from '@/constant'

import Upvote from '@/components/Upvote'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  StickerWrapper,
  Cover,
  Title,
  Desc,
} from '../styles/desktop_view/fixed_header'

const TitleContent: FC<{ article: TArticle; metric: TMetric }> = ({
  article,
  metric,
}) => {
  switch (metric) {
    case METRIC.WORKS_ARTICLE: {
      return (
        <Fragment>
          <Cover src="https://avatars.githubusercontent.com/u/2041385?s=64&v=4" />
          <Title>CoderPlanets</Title>
          <DotDivider space={10} />
          <Desc>可能是最性感的开发者社区, 可能是最性感的开发者社区</Desc>
        </Fragment>
      )
    }

    default: {
      return <Title>{article.title}</Title>
    }
  }
}

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
  const { upvotesCount, meta } = article
  const thread = meta.thread.toLowerCase() as TThread

  return (
    <Wrapper show={show} testid={testid}>
      <InnerWrapper metric={metric}>
        <ContentWrapper metric={metric}>
          <TitleContent article={article} metric={metric} />
        </ContentWrapper>
        <StickerWrapper metric={metric} thread={thread}>
          <Upvote count={upvotesCount} avatarList={meta.latestUpvotedUsers} />
        </StickerWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(FixedHeader)
