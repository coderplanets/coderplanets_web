import React from 'react'

import { Button } from '../../components'

import {
  UserWrapper,
  UserInfo,
  UserBrief,
  UserName,
  BriefInfo,
  Avatar,
  UserHeader,
} from './styles/userheader'

const UserHeaderSection = () => {
  return (
    <UserWrapper>
      <UserHeader>
        <UserInfo>
          <Avatar
            src="https://s3.amazonaws.com/uifaces/faces/twitter/dhrubo/128.jpg"
            alt="user_avatar"
          />
          <UserBrief>
            <UserName>mydearxym</UserName>
            <BriefInfo>教育经历:&nbsp; 成都信息工程学院</BriefInfo>
            <BriefInfo>所在公司:&nbsp; 英夫美迪</BriefInfo>
            <BriefInfo>个人简介:&nbsp; coderplanets.com 作者</BriefInfo>
            <BriefInfo>所在地区:&nbsp; 成都</BriefInfo>
          </UserBrief>
        </UserInfo>

        <div>
          <Button size="small" type="primary" ghost>
            主页
          </Button>
        </div>
      </UserHeader>
    </UserWrapper>
  )
}

export default UserHeaderSection
