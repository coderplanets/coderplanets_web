import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_ASSETS } from '../../config'

import { AvatarsRow } from '../../components'

import {
  Wrapper,
  Avatar,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  TitleTag,
  SecondHalf,
  BodyDigest,
  Extra,
  TitleTagDot,
} from './styles/item'

import { cutFrom } from '../../utils'
import * as logic from './logic'

const Item = ({ data, active, index }) => (
  <Wrapper current={data} active={active} index={index}>
    <div>
      <Avatar src={data.author.avatar} alt="avatar" />
    </div>
    <Main>
      <TopHalf>
        <Breif onClick={logic.onTitleSelect.bind(this, data)}>
          <Title>{data.title}</Title>
          <TitleLink>
            <LinkIcon src={`${ICON_ASSETS}/cmd/link.svg`} />
            <span style={{ marginLeft: 9 }}>github</span>
          </TitleLink>
          <TitleTag>
            <TitleTagDot />
            问答
          </TitleTag>
        </Breif>
        <div>
          <AvatarsRow
            users={data.commentsParticipators}
            total={data.commentsParticipatorsCount}
          />
        </div>
      </TopHalf>

      <SecondHalf>
        <Extra>
          {data.author.nickname} 发布于:{' '}
          <TimeAgo datetime={data.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {data.views}
        </Extra>
        <BodyDigest>{cutFrom(data.digest, 90)}</BodyDigest>
      </SecondHalf>
    </Main>
  </Wrapper>
)

export default Item
