import React from 'react'

import CustomScroller from '@/components/CustomScroller'

import {
  Wrapper,
  Header,
  AuthorWrapper,
  Avatar,
  Digest,
  UserName,
  Desc,
} from '../styles/right_sidebar/markers_info'

const src =
  'https://avatars0.githubusercontent.com/u/6184465?s=60&u=b65fd4fc422f7a3aed97f6373ee0a9550e3261ed&v=4'

const Maker = () => {
  return (
    <AuthorWrapper>
      <Avatar src={src} />
      <Digest>
        <UserName>Mydearxym</UserName>
        <Desc>very cool person</Desc>
      </Digest>
    </AuthorWrapper>
  )
}

const MakersInfo = () => {
  return (
    <Wrapper>
      <Header> 4 位创作者</Header>
      <CustomScroller
        direction="vertical"
        height="120px"
        showShadow={false}
        barSize="tiny"
      >
        <Maker />
        <Maker />
        <Maker />
        <Maker />
        <Maker />
        <Maker />
      </CustomScroller>
    </Wrapper>
  )
}

export default MakersInfo
