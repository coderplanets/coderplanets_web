import { FC } from 'react'

import type { TMetric, TBlog } from '@/spec'
import { buildLog } from '@/utils/logger'

import BlogFeedsList from '@/widgets/BlogFeedsList'

import { MainWrapper, ArticleWrapper } from '../../styles/desktop_view'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent:FeedTab')

type TProps = {
  items: TBlog[]
  metric?: TMetric
}

const FeedsTab: FC<TProps> = ({ items, metric }) => {
  return (
    <MainWrapper metric={metric}>
      <ArticleWrapper>
        <BlogFeedsList items={items} />
      </ArticleWrapper>
    </MainWrapper>
  )
}

export default FeedsTab
