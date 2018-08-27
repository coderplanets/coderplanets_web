import React from 'react'

import { ICON_ASSETS } from '../../config'

import { Button } from '../../components'
import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  BriefTextWrapper,
  UserTitle,
  UserDesc,
  UserDetailDesc,
  DescLable,
  DescIconLable,
  DetailToggleLabel,
  SocialSpliter,
  SocialWrapper,
  SocialIcon,
} from './styles/user_brief'

import * as logic from './logic'

const SocialIcons = () => {
  return (
    <SocialWrapper>
      <SocialIcon src={`${ICON_ASSETS}/cmd/github.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/weixin.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/qq.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/weibo.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/twitter.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/facebook.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/zhihu.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/dribble.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/huaban.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/pinterest.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/instagram.svg`} />
      <SocialIcon src={`${ICON_ASSETS}/cmd/douban.svg`} />
    </SocialWrapper>
  )
}

const UserBrief = ({ user, showDetail }) => (
  <Wrapper>
    <AvatarWrapper>
      <Avatar src={user.avatar} />
      <Button size="small" type="primary" ghost>
        编辑资料
      </Button>
    </AvatarWrapper>

    <BriefTextWrapper>
      <UserTitle>{user.nickname}</UserTitle>
      {showDetail ? (
        <React.Fragment>
          <UserDetailDesc>
            <DescLable>个人介绍 </DescLable>
            {user.bio}
          </UserDetailDesc>
          <UserDetailDesc>
            <DescLable>所在城市</DescLable> 成都
          </UserDetailDesc>
          <UserDetailDesc>
            <DescLable>职业经历</DescLable> google.inc
          </UserDetailDesc>
          <UserDetailDesc>
            <DescLable>教育经历</DescLable> 北京大学
          </UserDetailDesc>
          <UserDetailDesc>
            <DescLable>个人主页</DescLable> http://www.xxx.com/xxx
          </UserDetailDesc>
          <UserDetailDesc onClick={logic.toggleDetail} clickable>
            <DescIconLable src={`${ICON_ASSETS}/cmd/profile_arrow.svg`} />
            收起详细资料
          </UserDetailDesc>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <UserDesc>
            <DescIconLable src={`${ICON_ASSETS}/cmd/profile_bio.svg`} />{' '}
            <div>{user.bio}</div>
          </UserDesc>
          <UserDesc>
            <DescIconLable src={`${ICON_ASSETS}/cmd/profile_location.svg`} />{' '}
            <div>成都</div>
          </UserDesc>
          <UserDesc>
            <DescIconLable src={`${ICON_ASSETS}/cmd/profile_company.svg`} />{' '}
            <div>Google.inc</div>
          </UserDesc>
          <UserDesc>
            <DescIconLable src={`${ICON_ASSETS}/cmd/profile_education.svg`} />{' '}
            <div>教育</div>
          </UserDesc>
          <UserDesc onClick={logic.toggleDetail} clickable>
            <DetailToggleLabel
              src={`${ICON_ASSETS}/cmd/profile_arrow.svg`}
              reverse
            />
            <div>查看详细资料</div>
          </UserDesc>
        </React.Fragment>
      )}
      <SocialSpliter />
      <UserDesc>
        <SocialIcons />
      </UserDesc>
    </BriefTextWrapper>
  </Wrapper>
)

export default UserBrief
