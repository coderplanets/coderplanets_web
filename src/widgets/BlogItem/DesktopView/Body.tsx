import { FC } from 'react'
import TimeAgo from 'timeago-react'

import type { TBlog } from '@/spec'
import { EVENT } from '@/constant'
import { send } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import DigestSentence from '@/widgets/DigestSentence'
import CommunityCard from '@/widgets/Cards/CommunityCard'
import UserCard from '@/widgets/Cards/UserCard'
import Tooltip from '@/widgets/Tooltip'

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
  CommentIcon,
} from '../styles/desktop_view/body'

type TProps = {
  item: TBlog
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
            content={<UserCard user={author} />}
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
            <ViewsIcon />
            {item.views}
          </ItemWrapper>
          <Dot radius={3} space={10} />
          <ItemWrapper>
            <CommentIcon />
            {item.commentsCount}
          </ItemWrapper>
        </LeftPart>
        <SpaceGrow />
      </Extra>

      <DigestSentence
        top={5}
        right={65}
        onPreview={() => send(EVENT.PREVIEW_ARTICLE, { article: item })}
      >
        {item.digest}
      </DigestSentence>
    </Wrapper>
  )
}

export default Body
