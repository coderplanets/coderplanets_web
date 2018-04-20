import React from 'react'

import { Button } from 'antd'

import {
  UserWrapper,
  UserInfo,
  UserBrief,
  UserName,
  BriefInfo,
  Avatar,
  UserHeader,
} from './styles/userheader'

const UserHeaderSection = ({ accountInfo }) => {
  return (
    <UserWrapper>
      <UserHeader>
        <UserInfo>
          <Avatar src={accountInfo.avatar} alt="user_avatar" />
          <UserBrief>
            <UserName>{accountInfo.nickname}</UserName>
            <BriefInfo>教育经历:&nbsp; 成都信息工程学院</BriefInfo>
            <BriefInfo>bio:&nbsp; {accountInfo.bio}</BriefInfo>
            <BriefInfo>所在地区:&nbsp; 成都</BriefInfo>
            <BriefInfo>github:&nbsp; todo</BriefInfo>
          </UserBrief>
        </UserInfo>

        <div>
          <Button size="small" type="primary" ghost>
            已/关注/编辑/登出
          </Button>
        </div>
      </UserHeader>
    </UserWrapper>
  )
}

export default UserHeaderSection
