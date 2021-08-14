import { FC } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import { ICON } from '@/config'
import { EVENT } from '@/constant'
import { cutRest, send } from '@/utils/helper'

import { SpaceGrow } from '@/components/Common'
import DigestSentence from '@/components/DigestSentence'

import ActiveBadge from './ActiveBadge'

import {
  Wrapper,
  Dot,
  PublishTime,
  Extra,
  LeftPart,
  AuthorName,
  ItemWrapper,
  ViewsIcon,
} from '../../styles/digest_view/body'

type TProps = {
  item: TPost
}

const Body: FC<TProps> = ({ item }) => {
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

        <ActiveBadge item={item} />
      </Extra>

      <DigestSentence
        top={5}
        right={140}
        onPreview={() => send(EVENT.PREVIEW_ARTICLE, { article: item })}
      >
        {cutRest(`${item.digest}`, 70)}
      </DigestSentence>
    </Wrapper>
  )
}

export default Body
