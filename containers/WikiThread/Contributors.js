import React from 'react'

import { ICON_CMD } from '../../config'
import { Popover, Maybe, Space } from '../../components'

import {
  Wrapper,
  NoteWrapper,
  NoteTitle,
  NoteDivider,
  NoteDesc,
  AvatarListWrapper,
  AvatarLink,
  Avatar,
  UserPopWrapper,
  PopAvatarWrapper,
  PopAvatar,
  UserPopInfo,
  Username,
  UserBio,
  UserLocation,
  UserCompany,
  LabelIcon,
  LabelText,
  SycNote,
} from './styles/contributors'

import fakeUser from './fakeUser'

import { uid } from '../../utils'

const Note = () => (
  <NoteWrapper>
    <NoteTitle>本页贡献者</NoteTitle>
    <NoteDivider />
    <NoteDesc>参与编辑后你的 GitHub 头像会同步在这里, 感谢参与.</NoteDesc>
  </NoteWrapper>
)

const AvatarPopInfo = ({ user }) => (
  <UserPopWrapper>
    <PopAvatarWrapper>
      <PopAvatar src={user.avatar} />
    </PopAvatarWrapper>
    <UserPopInfo>
      <Username>{user.nickname}</Username>
      <UserBio>{user.bio}</UserBio>
      <Maybe test={user.location}>
        <UserLocation>
          <LabelIcon src={`${ICON_CMD}/city_map.svg`} />
          <LabelText> {user.location}</LabelText>
        </UserLocation>
      </Maybe>
      <Maybe test={user.company}>
        <UserCompany>
          <LabelIcon src={`${ICON_CMD}/profile_company.svg`} />
          <LabelText> {user.company}</LabelText>
        </UserCompany>
      </Maybe>
    </UserPopInfo>
  </UserPopWrapper>
)

const AvatarList = () => (
  <AvatarListWrapper>
    {fakeUser.map(user => (
      <Popover
        content={<AvatarPopInfo user={user} />}
        placement="bottom"
        trigger="hover"
        key={uid.gen()}
      >
        <AvatarLink>
          <Avatar src={user.avatar} />
        </AvatarLink>
      </Popover>
    ))}
  </AvatarListWrapper>
)

const Contributors = () => (
  <Wrapper>
    <Note />
    <AvatarList />

    <SycNote>
      <LabelIcon src={`${ICON_CMD}/sync.svg`} />
      <LabelText>最后同步:</LabelText>
      <Space right="5px" />
      <LabelText>3天前</LabelText>
    </SycNote>
  </Wrapper>
)

export default Contributors
