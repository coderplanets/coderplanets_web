import { FC, Fragment } from 'react'
import TimeAgo from 'timeago-react'

import type { TBlog } from '@/spec'
import { buildLog } from '@/utils/logger'

import NoticeBar from '@/widgets/NoticeBar'

import { Wrapper, Header, PubDate, Title, Digest } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent:FeedTab')

type TProps = {
  items: TBlog[]
}

const BlogFeedsList: FC<TProps> = ({ items }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default BlogFeedsList
