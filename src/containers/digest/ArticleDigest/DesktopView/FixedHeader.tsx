import { FC, memo, Fragment } from 'react'

import type { TArticle, TWorks, TMetric, TThread } from '@/spec'
import { METRIC } from '@/constant'

import Upvote from '@/widgets/Upvote'
import DotDivider from '@/widgets/DotDivider'

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
      const works = article as TWorks
      return (
        <Fragment>
          <Cover src={works.cover} />
          <Title>{works.title}</Title>
          <DotDivider space={10} />
          <Desc>{works.desc}</Desc>
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
  const { upvotesCount, meta, viewerHasUpvoted } = article
  const thread = meta.thread.toLowerCase() as TThread

  return (
    <Wrapper show={show} testid={testid}>
      <InnerWrapper metric={metric}>
        <ContentWrapper metric={metric}>
          <TitleContent article={article} metric={metric} />
        </ContentWrapper>
        <StickerWrapper metric={metric} thread={thread}>
          <Upvote
            count={upvotesCount}
            avatarList={meta.latestUpvotedUsers}
            viewerHasUpvoted={viewerHasUpvoted}
          />
        </StickerWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(FixedHeader)
