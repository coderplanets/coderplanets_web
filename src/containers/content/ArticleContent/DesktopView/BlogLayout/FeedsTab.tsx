import { FC } from 'react'
import TimeAgo from 'timeago-react'

import type { TMetric, TBlog } from '@/spec'
import { buildLog } from '@/utils/logger'

import NoticeBar from '@/widgets/NoticeBar'
import { MainWrapper, ArticleWrapper } from '../../styles/desktop_view'
import {
  Wrapper,
  Header,
  PubDate,
  Title,
  Digest,
} from '../../styles/desktop_view/blog_layout/feeds_tab'

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
        <NoticeBar
          type="notice"
          content="数据来自该博客提供的 RSS 订阅源，可能会有滞后。 "
          top={-5}
          bottom={20}
          left={-2}
        />

        {items.map((item) => (
          <Wrapper key={item.id}>
            <Header>
              <Title href={item.linkAddr} target="_blank">
                {item.title}
              </Title>
              <PubDate>
                <TimeAgo datetime={item.published} locale="zh_CN" />
              </PubDate>
            </Header>

            <Digest>{item.digest}</Digest>
          </Wrapper>
        ))}
      </ArticleWrapper>
    </MainWrapper>
  )
}

export default FeedsTab
