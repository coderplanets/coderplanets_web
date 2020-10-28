import React from 'react'
import TimeAgo from 'timeago-react'

import { cutFrom } from '@/utils'

import {
  Wrapper,
  CommentsDigest,
  Digest,
  PublishLabel,
  Extra,
} from '../../styles/digest_view/body'

const Body = ({ item, onPreview }) => {
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
      <Digest onClick={() => onPreview(item)}>
        {cutFrom(item.digest, 90)}
      </Digest>
    </Wrapper>
  )
}

export default Body
