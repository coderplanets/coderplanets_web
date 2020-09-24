import React from 'react'
import TimeAgo from 'timeago-react'

import { cutFrom } from '@/utils'

import {
  Wrapper,
  CommentsDigest,
  BodyDigest,
  PublishLabel,
  Extra,
} from '../../styles/digest_view/body'

const Body = ({ item }) => {
  return (
    <Wrapper>
      <Extra>
        {item.author.nickname}
        {item.copyRight === 'original' ? (
          <PublishLabel>&nbsp;发布于:</PublishLabel>
        ) : (
          <PublishLabel>&nbsp;搬运于:</PublishLabel>
        )}
        <TimeAgo datetime={item.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
        {item.views}
        <CommentsDigest>⁝ 评论: {item.commentsCount}</CommentsDigest>
      </Extra>
      <BodyDigest>{cutFrom(item.digest, 90)}</BodyDigest>
    </Wrapper>
  )
}

export default Body
