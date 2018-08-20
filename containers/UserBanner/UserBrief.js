import React from 'react'

import { ICON_ASSETS } from '../../config'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  BriefTextWrapper,
  UserTitle,
  UserDesc,
  DescLable,
  SocialSpliter,
  SocialWrapper,
  SocialIcon,
} from './styles/user_brief'

const SocialIcons = () => {
  return (
    <SocialWrapper>
      <SocialIcon src={`${ICON_ASSETS}/cmd/github.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/weixin.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/weibo.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/twitter.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/facebook.svg`} />
    </SocialWrapper>
  )
}

const UserBrief = ({ user }) => (
  <Wrapper>
    <AvatarWrapper>
      <Avatar src={user.avatar} />
    </AvatarWrapper>

    <BriefTextWrapper>
      <UserTitle>{user.nickname}</UserTitle>
      <UserDesc>
        <DescLable>所在城市</DescLable> xxx
      </UserDesc>
      <UserDesc>
        <DescLable>职业经历</DescLable> xxx
      </UserDesc>
      <UserDesc>
        <DescLable>教育经历</DescLable> xxx
      </UserDesc>
      <UserDesc>
        <DescLable>个人介绍 </DescLable>
        {user.bio}
      </UserDesc>
      <SocialSpliter />
      <UserDesc>
        <DescLable>社交账号</DescLable>
        <SocialIcons />
      </UserDesc>
    </BriefTextWrapper>
  </Wrapper>
)

export default UserBrief
