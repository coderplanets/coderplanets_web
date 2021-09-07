import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TJob } from '@/spec'
import { ICON } from '@/config'
import Upvote from '@/components/Upvote'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'

import { Wrapper, PublishWrapper, Bottom } from './styles/footer'

type TProps = {
  data: TJob
}

const Footer: FC<TProps> = ({ data }) => {
  const { author, insertedAt, commentsCount, upvotesCount, meta } = data

  return (
    <Wrapper>
      <PublishWrapper>
        {author.nickname} <DotDivider space={6} />
        <TimeAgo datetime={insertedAt} locale="zh_CN" />
      </PublishWrapper>
      <Bottom>
        <Upvote count={upvotesCount} avatarList={meta.latestUpvotedUsers} />
        <IconText iconSrc={`${ICON}/article/comment.svg`} size="medium">
          {commentsCount}
        </IconText>
      </Bottom>
    </Wrapper>
  )
}

export default memo(Footer)
