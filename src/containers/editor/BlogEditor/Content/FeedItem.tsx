import { FC, memo } from 'react'

import type { TBlog } from '@/spec'
import { SVG } from '@/constant'
import Checker from '@/components/Checker'
import IconButton from '@/components/Buttons/IconButton'

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
import { toStep } from '../logic'

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
  const active = item.id === '1'
  return (
    <Wrapper>
      <Header>
        {withSelector && (
          <Selector>
            <Checker checked={false} />
          </Selector>
        )}

        {!withEdit ? (
          <HoverTitle $active={active}>{item.title}</HoverTitle>
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
            mTop={3}
          />
        )}
      </Header>
      {!withEdit ? (
        <HoverPubDateWrapper $active={active}>
          <AbsDate date={item.published} withTime={false} />
          <RelDate datetime={item.published} locale="zh_CN" />
        </HoverPubDateWrapper>
      ) : (
        <PubDateWrapper>
          <AbsDate date={item.published} withTime={false} />
          <RelDate datetime={item.published} locale="zh_CN" />
        </PubDateWrapper>
      )}

      {!withEdit ? (
        <HoverDigest $active={active}>{item.digest}</HoverDigest>
      ) : (
        <Digest>{item.digest}</Digest>
      )}
    </Wrapper>
  )
}

export default memo(FeedItem)
