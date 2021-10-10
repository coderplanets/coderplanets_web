import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TArticle } from '@/spec'
import { upvoteOnArticleList } from '@/utils/helper'
import { ICON } from '@/config'
import Upvote from '@/components/Upvote'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'

import { Wrapper, PublishWrapper, Bottom } from './styles/footer'

type TProps = {
  data: TArticle
}

const Footer: FC<TProps> = ({ data }) => {
  const {
    author,
    insertedAt,
    commentsCount,
    upvotesCount,
    viewerHasUpvoted,
    meta,
  } = data

  return (
    <Wrapper>
      <PublishWrapper>
        {author.nickname} <DotDivider space={6} />
        <TimeAgo datetime={insertedAt} locale="zh_CN" />
      </PublishWrapper>
      <Bottom>
        <Upvote
          count={upvotesCount}
          avatarList={meta.latestUpvotedUsers}
          viewerHasUpvoted={viewerHasUpvoted}
          onAction={(viewerHasUpvoted) =>
            upvoteOnArticleList(data, viewerHasUpvoted)
          }
        />
        <IconText iconSrc={`${ICON}/article/comment.svg`} size="medium">
          {commentsCount}
        </IconText>
      </Bottom>
    </Wrapper>
  )
}

export default memo(Footer)
