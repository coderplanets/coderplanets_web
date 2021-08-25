import { FC } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import { ICON } from '@/config'
import { EVENT } from '@/constant'
import { cutRest, send } from '@/utils/helper'

import { SpaceGrow } from '@/components/Common'
import DigestSentence from '@/components/DigestSentence'
import CommunityCard from '@/components/Cards/CommunityCard'
import UserCard from '@/components/Cards/UserCard'
import Tooltip from '@/components/Tooltip'

import ActiveBadge from './ActiveBadge'

import {
  Wrapper,
  Dot,
  PublishTime,
  Extra,
  LeftPart,
  CommunityLabel,
  LabelDivider,
  AuthorName,
  ItemWrapper,
  ViewsIcon,
} from '../../styles/digest_view/body'

type TProps = {
  item: TPost
}

const Body: FC<TProps> = ({ item }) => {
  // console.log('# originalCommunity: ', originalCommunity)
  const { originalCommunity, author } = item

  return (
    <Wrapper>
      <Extra>
        <LeftPart>
          <Tooltip
            content={<CommunityCard item={originalCommunity} />}
            placement="bottom-start"
            delay={500}
          >
            <CommunityLabel>{originalCommunity.title}</CommunityLabel>
          </Tooltip>
          <LabelDivider />
          <Tooltip
            content={<UserCard item={author} />}
            placement="bottom-start"
            delay={500}
          >
            <AuthorName>{author.nickname}</AuthorName>
          </Tooltip>

          <Dot radius={3} space={10} />
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
