import React from 'react'

import { Margin } from '../BaseStyled'

import {
  Wrapper,
  UserInfo,
  Avatar,
  UserName,
  PublishAt,
  Desc,
  Text,
  Value,
} from './styles/top_header'

const TopHeader = () => (
  <Wrapper>
    <UserInfo>
      <Avatar
        src="http://robohash.org/set_set1/bgset_bg2/K9q2gg"
        alt="user_avatar"
      />
      <div>
        <UserName>simon</UserName>
        <PublishAt>发表于: xxx</PublishAt>
      </div>
    </UserInfo>
    <Desc>
      <Text>
        浏览： <Value>2228</Value>
      </Text>
      <Margin top="2px" />
      <Text>
        最后同步： <Value>3 天前</Value>
      </Text>
    </Desc>
  </Wrapper>
)

export default TopHeader
