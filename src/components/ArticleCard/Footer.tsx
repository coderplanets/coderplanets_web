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
  const { author, insertedAt, commentsCount } = data

  return (
    <Wrapper>
      <PublishWrapper>
        {author.nickname} <DotDivider space={6} />
        <TimeAgo datetime={insertedAt} locale="zh_CN" />
      </PublishWrapper>
      <Bottom>
        {/* 你和 头像 Raw 等 24 人觉得很赞 -- 评论 35，收藏, 分享, 举报(more 里面) */}
        <Upvote />
        <IconText iconSrc={`${ICON}/article/comment.svg`} size="medium">
          {commentsCount}
        </IconText>
      </Bottom>
    </Wrapper>
  )
}

export default memo(Footer)
