import { FC, memo } from 'react'

import Checker from '@/components/Checker'
import type { TBlog } from '@/spec'
import {
  Wrapper,
  Header,
  Selector,
  Title,
  BlogLink,
  PubDateWrapper,
  EditIcon,
  AbsDate,
  RelDate,
  Digest,
} from '../styles/content/feed_item'

type TProps = {
  item: TBlog
  withSelector?: boolean
  withEdit?: boolean
}

const FeedItem: FC<TProps> = ({
  item,
  withSelector = true,
  withEdit = false,
}) => {
  return (
    <Wrapper>
      <Header>
        {withSelector && (
          <Selector>
            <Checker checked={false} />
          </Selector>
        )}

        <Title>{item.title}</Title>
        <BlogLink href={item.linkAddr} target="_blank">
          原文
        </BlogLink>
        {withEdit && <EditIcon />}
      </Header>
      <PubDateWrapper>
        <AbsDate date={item.published} withTime={false} />
        <RelDate datetime={item.published} locale="zh_CN" />
      </PubDateWrapper>
      <Digest>{item.digest}</Digest>
    </Wrapper>
  )
}

export default memo(FeedItem)
