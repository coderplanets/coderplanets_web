import { FC, memo } from 'react'

import type { TBlog } from '@/spec'
import { SVG } from '@/constant'

import TimeAgo from 'timeago-react'
import Checker from '@/widgets/Checker'
import IconButton from '@/widgets/Buttons/IconButton'

import {
  Wrapper,
  Header,
  Selector,
  Title,
  HoverTitle,
  BlogLink,
  PubDateWrapper,
  HoverPubDateWrapper,
  AbsDate,
  RelDate,
  Digest,
  HoverDigest,
} from '../styles/content/feed_item'
import { toStep, selectBlog } from '../logic'

type TProps = {
  item: TBlog
  withSelector?: boolean
  withEdit?: boolean
  active?: boolean
}

const FeedItem: FC<TProps> = ({
  item,
  withSelector = true,
  withEdit = false,
  active = false,
}) => {
  return (
    <Wrapper>
      <Header>
        {withSelector && (
          <Selector>
            <Checker checked={active} onChange={() => selectBlog(item)} />
          </Selector>
        )}

        {!withEdit ? (
          <HoverTitle $active={active} onClick={() => selectBlog(item)}>
            {item.title}
          </HoverTitle>
        ) : (
          <Title>{item.title}</Title>
        )}
        <BlogLink href={item.linkAddr} target="_blank">
          原文
        </BlogLink>
        {withEdit && (
          <IconButton
            icon={SVG.EDIT_PEN}
            onClick={() => toStep('STEP_2')}
            top={3}
          />
        )}
      </Header>
      {!withEdit ? (
        <HoverPubDateWrapper $active={active} onClick={() => selectBlog(item)}>
          <AbsDate date={item.published} withTime={false} />
          <RelDate>
            <TimeAgo datetime={item.published} locale="zh_CN" />
          </RelDate>
        </HoverPubDateWrapper>
      ) : (
        <PubDateWrapper>
          <AbsDate date={item.published} withTime={false} />
          <RelDate>
            <TimeAgo datetime={item.published} locale="zh_CN" />
          </RelDate>
        </PubDateWrapper>
      )}

      {!withEdit ? (
        <HoverDigest $active={active} onClick={() => selectBlog(item)}>
          {item.digest}
        </HoverDigest>
      ) : (
        <Digest>{item.digest}</Digest>
      )}
    </Wrapper>
  )
}

export default memo(FeedItem)
