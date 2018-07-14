import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_ASSETS } from '../../config'

import { AvatarsRow } from '../../components'

import {
  PostWrapper,
  PostAvatar,
  PostTitleLink,
  LinkIcon,
  PostMain,
  PostTopHalf,
  PostBreif,
  PostTitle,
  PostTitleTag,
  PostSecondHalf,
  PostBodyDigest,
  PostExtra,
  PostTitleTagDot,
} from './styles/item'

import { cutFrom } from '../../utils'
import * as logic from './logic'

const Item = ({ data, active, index }) => (
  <PostWrapper current={data} active={active} index={index}>
    <div>
      <PostAvatar src={data.author.avatar} alt="avatar" />
    </div>
    <PostMain>
      <PostTopHalf>
        <PostBreif onClick={logic.onTitleSelect.bind(this, data)}>
          <PostTitle>{data.title}</PostTitle>
          <PostTitleLink>
            <LinkIcon src={`${ICON_ASSETS}/cmd/link.svg`} />
            <span style={{ marginLeft: 9 }}>github</span>
          </PostTitleLink>
          <PostTitleTag>
            <PostTitleTagDot />
            问答
          </PostTitleTag>
        </PostBreif>
        <div>
          <AvatarsRow
            users={data.commentsParticipators}
            total={data.commentsParticipatorsCount}
          />
        </div>
      </PostTopHalf>

      <PostSecondHalf>
        <PostExtra>
          {data.author.nickname} 发布于:{' '}
          <TimeAgo datetime={data.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {data.views}
        </PostExtra>
        <PostBodyDigest>{cutFrom(data.digest, 90)}</PostBodyDigest>
      </PostSecondHalf>
    </PostMain>
  </PostWrapper>
)

export default Item
