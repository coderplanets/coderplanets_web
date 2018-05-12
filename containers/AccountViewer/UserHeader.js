import React from 'react'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config'
import { A, Button, Icon } from '../../components'

import {
  UserWrapper,
  UserInfo,
  UserBrief,
  UserName,
  BriefInfo,
  Avatar,
  UserHeader,
  SocalIcon,
  EditIcon,
} from './styles/user_header'

const tooltipOffset = JSON.stringify({ top: 5, left: 3 })
const SocalIcons = ({ accountInfo: { githubProfile } }) => (
  <BriefInfo>
    <div
      key={shortid.generate()}
      data-tip="站内主页"
      data-offset={tooltipOffset}
      data-delay-show="500"
    >
      <SocalIcon path={`${ICON_ASSETS}/cmd/home.svg`} />
    </div>

    {githubProfile ? (
      <A href={githubProfile.htmlUrl}>
        <div
          key={shortid.generate()}
          data-tip={githubProfile.htmlUrl}
          data-offset={tooltipOffset}
          data-delay-show="500"
        >
          <SocalIcon path={`${ICON_ASSETS}/cmd/github.svg`} />
        </div>
      </A>
    ) : (
      <div />
    )}
  </BriefInfo>
)

const UserHeaderSection = ({ accountInfo, logout, editProfile }) => (
  <UserWrapper>
    <UserHeader>
      <UserInfo>
        {/* Avatar should be a link to accout's home */}
        <Avatar src={accountInfo.avatar} alt="user_avatar" />
        <UserBrief>
          <UserName>
            {accountInfo.nickname}
            {/* eslint-disable */}
            <div onClick={editProfile}>
              <EditIcon path={`${ICON_ASSETS}/cmd/edit.svg`} />
            </div>
            {/* eslint-enable */}
          </UserName>
          <BriefInfo>教育经历:&nbsp; 成都信息工程学院</BriefInfo>
          <BriefInfo>bio:&nbsp; {accountInfo.bio}</BriefInfo>
          <BriefInfo>所在地区:&nbsp; 成都</BriefInfo>
          <SocalIcons accountInfo={accountInfo} />
        </UserBrief>
      </UserInfo>

      <div>
        <Button size="small" type="primary" ghost onClick={logout}>
          <Icon type="logout" />
          登&nbsp;出
        </Button>
      </div>
    </UserHeader>
  </UserWrapper>
)

export default UserHeaderSection
