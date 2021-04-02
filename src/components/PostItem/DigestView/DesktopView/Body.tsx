import React from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import { ICON } from '@/config'
import { cutRest } from '@/utils'

import Tooltip from '@/components/Tooltip'
import { SpaceGrow } from '@/components/Common'
import DigestSentence from '@/components/DigestSentence'

import {
  Wrapper,
  Dot,
  PublishTime,
  Extra,
  LeftPart,
  AuthorName,
  ItemWrapper,
  ViewsIcon,
  ActiveItemWrapper,
  ActiveIcon,
} from '../../styles/digest_view/body'

type TProps = {
  item: TPost
  onPreview?: (obj: TPost) => void
}

const Body: React.FC<TProps> = ({ item, onPreview }) => {
  return (
    <Wrapper>
      <Extra>
        <LeftPart>
          <AuthorName>{item.author.nickname}</AuthorName>
          <Dot radius={3} space={8} />
          <PublishTime>
            <TimeAgo datetime={item.insertedAt} locale="zh_CN" />
          </PublishTime>
          <Dot radius={3} space={10} />
          <ItemWrapper>
            <ViewsIcon src={`${ICON}/article/viewed.svg`} />
            {item.views}
          </ItemWrapper>
        </LeftPart>
        <SpaceGrow />

        <ActiveItemWrapper hasComments={item.commentsCount > 0}>
          <Tooltip content={<div>最后回复</div>} placement="bottom">
            <ActiveIcon src={`${ICON}/shape/activity.svg`} />
            4天前
          </Tooltip>
        </ActiveItemWrapper>
      </Extra>

      <DigestSentence top={5} right={140} onPreview={() => onPreview(item)}>
        {cutRest(item.digest, 90)}
      </DigestSentence>
    </Wrapper>
  )
}

export default Body
