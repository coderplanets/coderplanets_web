import React from 'react'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  UserTitle,
  UserDesc,
} from './styles/user_brief'

const UserBrief = () => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src="https://avatars2.githubusercontent.com/u/6184465?v=4" />
      </AvatarWrapper>

      <div>
        <UserTitle>Mydearxym(谢一面)</UserTitle>
        <UserDesc>所属行业: xxx</UserDesc>
        <UserDesc>
          个人介绍: 我来个比较长一点点的个人介绍哈，看看布局效果
        </UserDesc>
        <UserDesc>公司: xxx</UserDesc>
        <UserDesc>各种主页: xxx</UserDesc>
      </div>
    </Wrapper>
  )
}

export default UserBrief
